<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Applicant;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Models\EmployerVacancyDetail;
use Illuminate\Support\Facades\Redirect;

class ApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applicants = Applicant::where('is_hired', 0)->get();
        return Inertia::render('Applicants/index', [
            'applicants' => $applicants
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $e_signature = null;
        if($request->hasFile('e_signature')) {
            $filename = time().rand(3, 9). '.'.$request->file('e_signature')->getClientOriginalExtension();
            $request->file('e_signature')->move('uploads/applicants/', $filename);
            $e_signature = $filename;

        }
        $applicant = Applicant::create([
            'surname' => trim($request->personalDetails['surname'], '"'),
            'firstname' => trim($request->personalDetails['firstname'], '"'),
            'middlename' => trim($request->personalDetails['middlename'], '"'),
            'suffix' => ($request->personalDetails['suffix'] != null) ? '' : trim($request->personalDetails['suffix'], '"'),
            'birthdate' => date('Y-m-d', strtotime(trim($request->personalDetails['birthdate'], '"'))),
            'civil_status' => trim($request->personalDetails['civilStatus'], '"'),
            'height' => trim($request->personalDetails['height'], '"'),
            'religion' => trim($request->personalDetails['religion'], '"'),
            'sex' => trim($request->personalDetails['sex'], '"'),
            'email_address' => trim($request->personalDetails['emailAddress'], '"'),
            'landline_number' => ($request->personalDetails['landlineNumber'] != null) ? trim($request->personalDetails['landlineNumber'], '"') : '' ,
            'phone_number' => trim($request->personalDetails['phoneNumber'], '"'),
            'disability' => ($request->personalDetails['disability'] != null) ? trim($request->personalDetails['disability'], '"') : '',
            'TIN_number' => ($request->personalDetails['TINNumber'] != null) ? trim($request->personalDetails['TINNumber'], '"') : '',
            'GSIS_SSS_id' => ($request->personalDetails['GSISNumber'] != null) ? trim($request->personalDetails['GSISNumber'], '"') : '',
            'pag_ibig_number' => ($request->personalDetails['pagIbigNumber'] != null) ? trim($request->personalDetails['pagIbigNumber'], '"') : '',
            'philhealth_id' => ($request->personalDetails['philhealthNumber'] != null) ? trim($request->personalDetails['philhealthNumber'], '"') : '',
            'is_actively_looking_for_work' =>  trim($request->personalDetails['activelyLookingForWork'], '"') == "Yes" ? 1 : 0,
            'is_willing_to_work_immidiately' => trim($request->personalDetails['willingToWorkImmediately'], '"') == "Yes" ? 1 : 0,
            'find_job_duration' => ($request->personalDetails['howLongLookingForWork'] != null) ? trim($request->personalDetails['howLongLookingForWork'], '"') : '',
            'when_to_start_working' => ($request->personalDetails['noWhenToWork'] != null) ? date('Y-m-d', strtotime(trim($request->personalDetails['noWhenToWork'], '"'))):date('Y-m-d', time()),
            'is_4Ps' => trim($request->personalDetails['is4psBeneficiary'], '"') == "Yes" ? 1 : 0,
            'household_id_4ps' => ($request->personalDetails['householdNumber'] != null) ? trim($request->personalDetails['householdNumber'], '"'):'',
            'expected_salary' => trim($request->personalDetails['expectedSalary'], '"'),
            'passport_number' => ($request->personalDetails['passportNumber'] != null) ? trim($request->personalDetails['passportNumber'], '"') : '',
            'expiry_date' => ($request->personalDetails['expiryDate'] != null) ? date('Y-m-d', strtotime(trim($request->personalDetails['expiryDate'], '"'))) :date('Y-m-d', time()),
            'skills_without_formal_training' => trim($request->personalDetails['OtherSkills'], '"'),
            'e_signature' => $e_signature,
            'is_authorization_accepted' => trim($request->personalDetails['authorizationAccepted'], '"') == true? 1: 0,
        ]);

        $applicant->applicant_address()->create([
            'address_type' => 0,
            'region' => trim($request->address['placeOfBirth']['region'], '"'),
            'province' => trim($request->address['placeOfBirth']['province'], '"'),
            'municipality_or_city' => trim($request->address['placeOfBirth']['city'], '"'),
            'barangay' => trim($request->address['placeOfBirth']['barangay'], '"'),
            'house_no_or_street' => trim($request->address['placeOfBirth']['houseStreetVillage'], '"'),
        ]);

        $applicant->applicant_address()->create([
            'address_type' => 1,
            'region' => trim($request->address['presentAddress']['region'], '"'),
            'province' => trim($request->address['presentAddress']['province'], '"'),
            'municipality_or_city' => trim($request->address['presentAddress']['city'], '"'),
            'barangay' => trim($request->address['presentAddress']['barangay'], '"'),
            'house_no_or_street' => trim($request->address['presentAddress']['houseStreetVillage'], '"'),
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 0,
            'school' => ($request->educationalBackground['elementary']['name'] != null) ? trim($request->educationalBackground['elementary']['name'], '"') : '',
            'course' => ($request->educationalBackground['elementary']['course'] != null) ? trim($request->educationalBackground['elementary']['course'], '"') : '',
            'year_graduated' => (trim($request->educationalBackground['elementary']['yearGraduated'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['elementary']['yearGraduated'], '"'))) : date(time()),
            'level' => ($request->educationalBackground['elementary']['underGraduate'] != null) ? trim($request->educationalBackground['elementary']['underGraduate'], '"') : '',
            'year_last_attended' => (trim($request->educationalBackground['elementary']['yearLastAttended'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['elementary']['yearLastAttended'], '"'))): date(time()),
            'awards' => ($request->educationalBackground['elementary']['awardsRecieved'] != null) ? trim($request->educationalBackground['elementary']['awardsRecieved'], '"'):'',
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 0,
            'school' => ($request->educationalBackground['secondary']['name'] != null) ? trim($request->educationalBackground['secondary']['name'], '"') : '',
            'course' => ($request->educationalBackground['secondary']['course'] != null) ? trim($request->educationalBackground['secondary']['course'], '"') : '',
            'year_graduated' => (trim($request->educationalBackground['secondary']['yearGraduated'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['secondary']['yearGraduated'], '"'))) : date(time()),
            'level' => ($request->educationalBackground['secondary']['underGraduate'] != null) ? trim($request->educationalBackground['secondary']['underGraduate'], '"') : '',
            'year_last_attended' => (trim($request->educationalBackground['secondary']['yearLastAttended'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['secondary']['yearLastAttended'], '"'))): date(time()),
            'awards' => ($request->educationalBackground['secondary']['awardsRecieved'] != null) ? trim($request->educationalBackground['secondary']['awardsRecieved'], '"'):'',
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 0,
            'school' => ($request->educationalBackground['tertiary']['name'] != null) ? trim($request->educationalBackground['tertiary']['name'], '"') : '',
            'course' => ($request->educationalBackground['tertiary']['course'] != null) ? trim($request->educationalBackground['tertiary']['course'], '"') : '',
            'year_graduated' => (trim($request->educationalBackground['tertiary']['yearGraduated'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['tertiary']['yearGraduated'], '"'))) : date(time()),
            'level' => ($request->educationalBackground['tertiary']['underGraduate'] != null) ? trim($request->educationalBackground['tertiary']['underGraduate'], '"') : '',
            'year_last_attended' => (trim($request->educationalBackground['tertiary']['yearLastAttended'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['tertiary']['yearLastAttended'], '"'))): date(time()),
            'awards' => ($request->educationalBackground['tertiary']['awardsRecieved'] != null) ? trim($request->educationalBackground['tertiary']['awardsRecieved'], '"'):'',
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 0,
            'school' => ($request->educationalBackground['graduateStudies']['name'] != null) ? trim($request->educationalBackground['graduateStudies']['name'], '"') : '',
            'course' => ($request->educationalBackground['graduateStudies']['course'] != null) ? trim($request->educationalBackground['graduateStudies']['course'], '"') : '',
            'year_graduated' => (trim($request->educationalBackground['graduateStudies']['yearGraduated'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['graduateStudies']['yearGraduated'], '"'))) : date(time()),
            'level' => ($request->educationalBackground['graduateStudies']['underGraduate'] != null) ? trim($request->educationalBackground['graduateStudies']['underGraduate'], '"') : '',
            'year_last_attended' => (trim($request->educationalBackground['graduateStudies']['yearLastAttended'] != null)) ? date('Y', strtotime(trim($request->educationalBackground['graduateStudies']['yearLastAttended'], '"'))): date(time()),
            'awards' => ($request->educationalBackground['graduateStudies']['awardsRecieved'] != null) ? trim($request->educationalBackground['graduateStudies']['awardsRecieved'], '"'):'',
        ]);

        $applicant->applicant_vocational_course()->create([
            'training_or_courses' => ($request->trainingVocationalCourse['trainingVocationalCourse1']['training_or_courses'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse1']['training_or_courses'], '"') : '',
            'duration' => ($request->trainingVocationalCourse['trainingVocationalCourse1']['duration'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse1']['duration'], '"') : '',
            'instituition' => ($request->trainingVocationalCourse['trainingVocationalCourse1']['instituition'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse1']['instituition'], '"'):'',
            'certificates' => ($request->trainingVocationalCourse['trainingVocationalCourse1']['certificates'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse1']['certificates'], '"'):'',
        ]);

        $applicant->applicant_vocational_course()->create([
            'training_or_courses' => ($request->trainingVocationalCourse['trainingVocationalCourse2']['training_or_courses'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse2']['training_or_courses'], '"') : '',
            'duration' => ($request->trainingVocationalCourse['trainingVocationalCourse2']['duration'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse2']['duration'], '"') : '',
            'instituition' => ($request->trainingVocationalCourse['trainingVocationalCourse2']['instituition'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse2']['instituition'], '"'):'',
            'certificates' => ($request->trainingVocationalCourse['trainingVocationalCourse2']['certificates'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse2']['certificates'], '"'):'',
        ]);

        $applicant->applicant_vocational_course()->create([
            'training_or_courses' => ($request->trainingVocationalCourse['trainingVocationalCourse3']['training_or_courses'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse3']['training_or_courses'], '"') : '',
            'duration' => ($request->trainingVocationalCourse['trainingVocationalCourse3']['duration'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse3']['duration'], '"') : '',
            'instituition' => ($request->trainingVocationalCourse['trainingVocationalCourse3']['instituition'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse3']['instituition'], '"'):'',
            'certificates' => ($request->trainingVocationalCourse['trainingVocationalCourse3']['certificates'] != null) ? trim($request->trainingVocationalCourse['trainingVocationalCourse3']['certificates'], '"'):'',
        ]);

        $applicant->applicant_eligibility()->create([
            'eligibility' => ($request->eligibility['eligibility1']['eligibility'] != null) ? trim($request->eligibility['eligibility1']['eligibility'], '"') : '',
            'rating' => ($request->eligibility['eligibility1']['rating'] != null) ? trim($request->eligibility['eligibility1']['rating'], '"') : '',
            'date_of_examination' => ($request->eligibility['eligibility1']['date_of_examination'] != null) ? date('Y-m-d', strtotime(trim($request->eligibility['eligibility1']['date_of_examination'], '"'))): date('Y-m-d',time()),
        ]);


        $applicant->applicant_eligibility()->create([
            'eligibility' => ($request->eligibility['eligibility2']['eligibility'] != null) ? trim($request->eligibility['eligibility2']['eligibility'], '"') : '',
            'rating' => ($request->eligibility['eligibility2']['rating'] != null) ? trim($request->eligibility['eligibility2']['rating'], '"') : '',
            'date_of_examination' => ($request->eligibility['eligibility2']['date_of_examination'] != null) ? date('Y-m-d', strtotime(trim($request->eligibility['eligibility2']['date_of_examination'], '"'))): date('Y-m-d',time()),
        ]);

        $applicant->applicant_professional_license()->create([
            'professional_license' => ($request->professionalLicense['professional_license1']['professionalLicense'] != null) ? trim($request->professionalLicense['professional_license1']['professionalLicense'], '"') : '',
            'valid_until' => ($request->professionalLicense['professional_license1']['valid_until'] != null) ? date('Y-m-d', strtotime(trim($request->professionalLicense['professional_license1']['valid_until'], '"'))): date('Y-m-d',time()),
        ]);

        $applicant->applicant_professional_license()->create([
            'professional_license' => ($request->professionalLicense['professional_license2']['professionalLicense'] != null) ? trim($request->professionalLicense['professional_license2']['professionalLicense'], '"') : '',
            'valid_until' => ($request->professionalLicense['professional_license2']['valid_until'] != null) ? date('Y-m-d', strtotime(trim($request->professionalLicense['professional_license2']['valid_until'], '"'))) : date('Y-m-d',time()),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => ($request->preferredWorkLocation['local']['preferredWorkLocationLocal1'] != null) ? trim($request->preferredWorkLocation['local']['preferredWorkLocationLocal1'], '"'):'',
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => ($request->preferredWorkLocation['local']['preferredWorkLocationLocal2'] != null) ? trim($request->preferredWorkLocation['local']['preferredWorkLocationLocal1'], '"'):'',
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => ($request->preferredWorkLocation['local']['preferredWorkLocationLocal3'] != null) ? trim($request->preferredWorkLocation['local']['preferredWorkLocationLocal1'], '"'):'',
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 1,
            'location' => ($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas1'] != null) ? trim($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas1'], '"'):'',
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 1,
            'location' => ($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas2'] != null) ? trim($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas2'], '"'):'',
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 1,
            'location' => ($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas3'] != null) ? trim($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas3'], '"'):'',
        ]);
        
        $applicant->applicant_job_preference()->create([
            'occupation' => ($request->jobPreferenceLocation['preferredOccupation1'] != null) ? trim($request->jobPreferenceLocation['preferredOccupation1'], '"'):'',
        ]);

        $applicant->applicant_job_preference()->create([
            'occupation' => ($request->jobPreferenceLocation['preferredOccupation2'] != null) ? trim($request->jobPreferenceLocation['preferredOccupation2'], '"'):'',
        ]);

        $applicant->applicant_job_preference()->create([
            'occupation' => ($request->jobPreferenceLocation['preferredOccupation3'] != null) ? trim($request->jobPreferenceLocation['preferredOccupation3'], '"'):'',
        ]);

        $applicant->applicant_job_preference()->create([
            'occupation' => ($request->jobPreferenceLocation['preferredOccupation4'] != null) ? trim($request->jobPreferenceLocation['preferredOccupation4'], '"'):'',
        ]);

        $applicant->applicant_language_spoken()->create([
            'language_spoken' => ($request->language['others']['name'] != null) ? trim($request->language['others']['name'], '"'):'',
            'can_read' => ($request->language['others']['canRead'] != null) ? (trim($request->language['others']['canRead'], '"') == true ? 1 : 0) : 0,
            'can_write' => ($request->language['others']['canWrite'] != null) ? (trim($request->language['others']['canWrite'], '"') == true ? 1 : 0) : 0,
            'can_speak' => ($request->language['others']['canSpeak'] != null) ? (trim($request->language['others']['canSpeak'], '"') == true ? 1 : 0) : 0,
            'can_understand' => ($request->language['others']['canUnderstand'] != null) ? (trim($request->language['others']['canUnderstand'], '"') == true ? 1 : 0) : 0,
        ]);

        $applicant->applicant_language_spoken()->create([
            'language_spoken' => trim($request->language['english']['name'], '"'),
            'can_read' => trim($request->language['english']['canRead'], '"') == true ? 1 : 0,
            'can_write' => trim($request->language['english']['canWrite'], '"') == true ? 1 : 0,
            'can_speak' => trim($request->language['english']['canSpeak'], '"') == true ? 1 : 0,
            'can_understand' => trim($request->language['english']['canUnderstand'], '"') == true ? 1 : 0,
        ]);

        $applicant->applicant_language_spoken()->create([
            'language_spoken' => trim($request->language['filipino']['name'], '"'),
            'can_read' => ($request->language['filipino']['canRead'] != null) ? (trim($request->language['filipino']['canRead'], '"') == true ? 1 : 0) : 0,
            'can_write' => ($request->language['filipino']['canWrite'] != null) ? (trim($request->language['filipino']['canWrite'], '"') == true ? 1 : 0) : 0,
            'can_speak' => ($request->language['filipino']['canSpeak'] != null) ? (trim($request->language['filipino']['canSpeak'], '"') == true ? 1 : 0) : 0,
            'can_understand' => ($request->language['filipino']['canUnderstand'] != null) ? (trim($request->language['filipino']['canUnderstand'], '"') == true ? 1 : 0) : 0,
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => ($request->workExperience['workExperience1']['companyName'] != null) ? trim($request->workExperience['workExperience1']['companyName'], '"') : '',
            'address' => ($request->workExperience['workExperience1']['address'] != null) ? trim($request->workExperience['workExperience1']['address'], '"') : '',
            'position' => ($request->workExperience['workExperience1']['position'] != null) ? trim($request->workExperience['workExperience1']['position'], '"') : '',
            'inclusive_date' => ($request->workExperience['workExperience1']['inclusive'] != null) ? date('Y-m-d', strtotime(trim($request->workExperience['workExperience1']['inclusive'], '"'))) : date(time()),
            'status' => ($request->workExperience['workExperience1']['status'] != null) ? trim($request->workExperience['workExperience1']['status'], '"') : '',
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => ($request->workExperience['workExperience2']['companyName'] != null) ? trim($request->workExperience['workExperience2']['companyName'], '"') : '',
            'address' => ($request->workExperience['workExperience2']['address'] != null) ? trim($request->workExperience['workExperience2']['address'], '"') : '',
            'position' => ($request->workExperience['workExperience2']['position'] != null) ? trim($request->workExperience['workExperience2']['position'], '"') : '',
            'inclusive_date' => ($request->workExperience['workExperience2']['inclusive'] != null) ? date('Y-m-d', strtotime(trim($request->workExperience['workExperience2']['inclusive'], '"'))) : date(time()),
            'status' => ($request->workExperience['workExperience2']['status'] != null) ? trim($request->workExperience['workExperience2']['status'], '"') : '',
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => ($request->workExperience['workExperience3']['companyName'] != null) ? trim($request->workExperience['workExperience3']['companyName'], '"') : '',
            'address' => ($request->workExperience['workExperience3']['address'] != null) ? trim($request->workExperience['workExperience3']['address'], '"') : '',
            'position' => ($request->workExperience['workExperience3']['position'] != null) ? trim($request->workExperience['workExperience3']['position'], '"') : '',
            'inclusive_date' => ($request->workExperience['workExperience3']['inclusive'] != null) ? date('Y-m-d', strtotime(trim($request->workExperience['workExperience3']['inclusive'], '"'))) : date(time()),
            'status' => ($request->workExperience['workExperience3']['status'] != null) ? trim($request->workExperience['workExperience3']['status'], '"') : '',
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => ($request->workExperience['workExperience4']['companyName'] != null) ? trim($request->workExperience['workExperience4']['companyName'], '"') : '',
            'address' => ($request->workExperience['workExperience4']['address'] != null) ? trim($request->workExperience['workExperience4']['address'], '"') : '',
            'position' => ($request->workExperience['workExperience4']['position'] != null) ? trim($request->workExperience['workExperience4']['position'], '"') : '',
            'inclusive_date' => ($request->workExperience['workExperience4']['inclusive'] != null) ? date('Y-m-d', strtotime(trim($request->workExperience['workExperience4']['inclusive'], '"'))) : date(time()),
            'status' => ($request->workExperience['workExperience4']['status'] != null) ? trim($request->workExperience['workExperience4']['status'], '"') : '',
        ]);
       
        $applicant->applicant_work_experience()->create([
            'company_name' => ($request->workExperience['workExperience5']['companyName'] != null) ? trim($request->workExperience['workExperience5']['companyName'], '"') : '',
            'address' => ($request->workExperience['workExperience5']['address'] != null) ? trim($request->workExperience['workExperience5']['address'], '"') : '',
            'position' => ($request->workExperience['workExperience5']['position'] != null) ? trim($request->workExperience['workExperience5']['position'], '"') : '',
            'inclusive_date' => ($request->workExperience['workExperience5']['inclusive'] != null) ? date('Y-m-d', strtotime(trim($request->workExperience['workExperience5']['inclusive'], '"'))) : date(time()),
            'status' => ($request->workExperience['workExperience5']['status'] != null) ? trim($request->workExperience['workExperience5']['status'], '"') : '',
        ]);

        $applicant->applicant_status()->create([
            'applicant_type' => ($request->employment['employed']['employementStatus'] != null) ? trim($request->employment['employed']['employementStatus'], '"'):'',
            'applicant_status_type' => ($request->employment['employed']['employementStatusType'] != null) ? trim($request->employment['employed']['employementStatusType'], '"') : '',
        ]);

        $applicant->applicant_status()->create([
            'applicant_type' => ($request->employment['unemployed']['unemployementStatus'] != null) ? trim($request->employment['unemployed']['unemployementStatus'], '"') : '',
            'applicant_status_type' => ($request->employment['unemployed']['unemployementStatusType'] != null) ? trim($request->employment['unemployed']['unemployementStatusType'], '"') : '',
        ]);

        return redirect()->route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function hireApplicant(Request $request) {
        $applicant = Applicant::find($request->id);
        $applicant->is_hired = 1;
        $applicant->date_hired = now();
        $applicant->save();
        return Redirect::route('dashboard');
    }
}
