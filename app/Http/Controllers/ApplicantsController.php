<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Applicant;

class ApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applicants = Applicant::all();
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
        $applicant = Applicant::create([
            'surname' => trim($request->personalDetails['surname'], '"'),
            'firstname' => trim($request->personalDetails['firstname'], '"'),
            'middlename' => trim($request->personalDetails['middlename'], '"'),
            'suffix' => trim($request->personalDetails['suffix'], '"'),
            'birthdate' => date('Y-m-d', strtotime(trim($request->personalDetails['birthdate'], '"'))),
            'civil_status' => trim($request->personalDetails['civilStatus'], '"'),
            'height' => trim($request->personalDetails['height'], '"'),
            'religion' => trim($request->personalDetails['religion'], '"'),
            'sex' => trim($request->personalDetails['sex'], '"'),
            'email_address' => trim($request->personalDetails['emailAddress'], '"'),
            'landline_number' => trim($request->personalDetails['landlineNumber'], '"'),
            'phone_number' => trim($request->personalDetails['phoneNumber'], '"'),
            'disability' => trim($request->personalDetails['disability'], '"'),
            'TIN_number' => trim($request->personalDetails['TINNumber'], '"'),
            'GSIS_SSS_id' => trim($request->personalDetails['GSISNumber'], '"'),
            'pag_ibig_number' => trim($request->personalDetails['pagIbigNumber'], '"'),
            'philhealth_id' => trim($request->personalDetails['philhealthNumber'], '"'),
            'is_actively_looking_for_work' =>  trim($request->personalDetails['activelyLookingForWork'], '"') == "Yes" ? 1 : 0,
            'is_willing_to_work_immidiately' => trim($request->personalDetails['willingToWorkImmediately'], '"') == "Yes" ? 1 : 0,
            'find_job_duration' => trim($request->personalDetails['howLongLookingForWork'], '"'),
            'when_to_start_working' => date('Y-m-d', strtotime(trim($request->personalDetails['noWhenToWork'], '"'))),
            'is_4Ps' => trim($request->personalDetails['is4psBeneficiary'], '"') == "Yes" ? 1 : 0,
            'household_id_4ps' => trim($request->personalDetails['householdNumber'], '"'),
            'expected_salary' => trim($request->personalDetails['expectedSalary'], '"'),
            'passport_number' => trim($request->personalDetails['passportNumber'], '"'),
            'expiry_date' => date('Y-m-d', strtotime(trim($request->personalDetails['expiryDate'], '"'))),
            'skills_without_formal_training' => trim($request->personalDetails['OtherSkills'], '"'),
            'e_signature' => 'johndoe_signature.png',
            'is_authorization_accepted' => trim($request->personalDetails['authorizationAccepted'], '"') == "Yes" ? 1 : 0,
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
            'school' => trim($request->educationalBackground['elementary']['name'], '"'),
            'course' => trim($request->educationalBackground['elementary']['course'], '"'),
            'year_graduated' => date('Y', strtotime(trim($request->educationalBackground['elementary']['yearGraduated'], '"'))),
            'level' => trim($request->educationalBackground['elementary']['underGraduate'], '"'),
            'year_last_attended' => date('Y', strtotime(trim($request->educationalBackground['elementary']['yearLastAttended'], '"'))),
            'awards' => trim($request->educationalBackground['elementary']['awardsRecieved'], '"'),
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 1,
            'school' => trim($request->educationalBackground['secondary']['name'], '"'),
            'course' => trim($request->educationalBackground['secondary']['course'], '"'),
            'year_graduated' => date('Y', strtotime(trim($request->educationalBackground['secondary']['yearGraduated'], '"'))),
            'level' => trim($request->educationalBackground['secondary']['underGraduate'], '"'),
            'year_last_attended' => date('Y', strtotime(trim($request->educationalBackground['secondary']['yearLastAttended'], '"'))),
            'awards' => trim($request->educationalBackground['secondary']['awardsRecieved'], '"'),
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 2,
            'school' => trim($request->educationalBackground['tertiary']['name'], '"'),
            'course' => trim($request->educationalBackground['tertiary']['course'], '"'),
            'year_graduated' => date('Y', strtotime(trim($request->educationalBackground['tertiary']['yearGraduated'], '"'))),
            'level' => trim($request->educationalBackground['tertiary']['underGraduate'], '"'),
            'year_last_attended' => date('Y', strtotime(trim($request->educationalBackground['tertiary']['yearLastAttended'], '"'))),
            'awards' => trim($request->educationalBackground['tertiary']['awardsRecieved'], '"'),
        ]);

        $applicant->applicant_educational_background()->create([
            'type' => 3,
            'school' => trim($request->educationalBackground['graduateStudies']['name'], '"'),
            'course' => trim($request->educationalBackground['graduateStudies']['course'], '"'),
            'year_graduated' => date('Y', strtotime(trim($request->educationalBackground['graduateStudies']['yearGraduated'], '"'))),
            'level' => trim($request->educationalBackground['graduateStudies']['underGraduate'], '"'),
            'year_last_attended' => date('Y', strtotime(trim($request->educationalBackground['graduateStudies']['yearLastAttended'], '"'))),
            'awards' => trim($request->educationalBackground['graduateStudies']['awardsRecieved'], '"'),
        ]);

        $applicant->applicant_vocational_course()->create([
            'training_or_courses' => trim($request->trainingVocationalCourse['trainingVocationalCourse1']['training_or_courses'], '"'),
            'duration' => trim($request->trainingVocationalCourse['trainingVocationalCourse1']['duration'], '"'),
            'instituition' => trim($request->trainingVocationalCourse['trainingVocationalCourse1']['instituition'], '"'),
            'certificates' => trim($request->trainingVocationalCourse['trainingVocationalCourse1']['certificates'], '"'),
        ]);

        $applicant->applicant_vocational_course()->create([
            'training_or_courses' => trim($request->trainingVocationalCourse['trainingVocationalCourse2']['training_or_courses'], '"'),
            'duration' => trim($request->trainingVocationalCourse['trainingVocationalCourse2']['duration'], '"'),
            'instituition' => trim($request->trainingVocationalCourse['trainingVocationalCourse2']['instituition'], '"'),
            'certificates' => trim($request->trainingVocationalCourse['trainingVocationalCourse2']['certificates'], '"'),
        ]);

        $applicant->applicant_vocational_course()->create([
            'training_or_courses' => trim($request->trainingVocationalCourse['trainingVocationalCourse3']['training_or_courses'], '"'),
            'duration' => trim($request->trainingVocationalCourse['trainingVocationalCourse3']['duration'], '"'),
            'instituition' => trim($request->trainingVocationalCourse['trainingVocationalCourse3']['instituition'], '"'),
            'certificates' => trim($request->trainingVocationalCourse['trainingVocationalCourse3']['certificates'], '"'),
        ]);

        $applicant->applicant_eligibility()->create([
            'eligibility' => trim($request->eligibility['eligibility1']['eligibility'], '"'),
            'rating' => trim($request->eligibility['eligibility1']['rating'], '"'),
            'date_of_examination' => date('Y-m-d', strtotime(trim($request->eligibility['eligibility1']['date_of_examination'], '"'))),
        ]);


        $applicant->applicant_eligibility()->create([
            'eligibility' => trim($request->eligibility['eligibility2']['eligibility'], '"'),
            'rating' => trim($request->eligibility['eligibility2']['rating'], '"'),
            'date_of_examination' => date('Y-m-d', strtotime(trim($request->eligibility['eligibility2']['date_of_examination'], '"'))),
        ]);

        $applicant->applicant_professional_license()->create([
            'professional_license' => trim($request->professionalLicense['professional_license1']['professionalLicense'], '"'),
            'valid_until' => date('Y-m-d', strtotime(trim($request->professionalLicense['professional_license1']['valid_until'], '"'))),
        ]);

        $applicant->applicant_professional_license()->create([
            'professional_license' => trim($request->professionalLicense['professional_license2']['professionalLicense'], '"'),
            'valid_until' => date('Y-m-d', strtotime(trim($request->professionalLicense['professional_license2']['valid_until'], '"'))),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => trim($request->preferredWorkLocation['local']['preferredWorkLocationLocal1'], '"'),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => trim($request->preferredWorkLocation['local']['preferredWorkLocationLocal2'], '"'),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 0,
            'location' => trim($request->preferredWorkLocation['local']['preferredWorkLocationLocal3'], '"'),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 1,
            'location' => trim($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas1'], '"'),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 1,
            'location' => trim($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas2'], '"'),
        ]);

        $applicant->applicant_job_preference_location()->create([
            'type' => 1,
            'location' => trim($request->preferredWorkLocation['overseas']['preferredWorkLocationOverseas3'], '"'),
        ]);
        
        $applicant->applicant_job_preference()->create([
            'occupation' => trim($request->jobPreferenceLocation['preferredOccupation1'], '"'),
        ]);

        $applicant->applicant_job_preference()->create([
            'occupation' => trim($request->jobPreferenceLocation['preferredOccupation2'], '"'),
        ]);

        $applicant->applicant_job_preference()->create([
            'occupation' => trim($request->jobPreferenceLocation['preferredOccupation3'], '"'),
        ]);

        $applicant->applicant_job_preference()->create([
            'occupation' => trim($request->jobPreferenceLocation['preferredOccupation4'], '"'),
        ]);

        $applicant->applicant_language_spoken()->create([
            'language_spoken' => trim($request->language['others']['name'], '"'),
            'can_read' => trim($request->language['others']['canRead'], '"') == true ? 1 : 0,
            'can_write' => trim($request->language['others']['canWrite'], '"') == true ? 1 : 0,
            'can_speak' => trim($request->language['others']['canSpeak'], '"') == true ? 1 : 0,
            'can_understand' => trim($request->language['others']['canUnderstand'], '"') == true ? 1 : 0,
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
            'can_read' => trim($request->language['filipino']['canRead'], '"') == true ? 1 : 0,
            'can_write' => trim($request->language['filipino']['canWrite'], '"') == true ? 1 : 0,
            'can_speak' => trim($request->language['filipino']['canSpeak'], '"') == true ? 1 : 0,
            'can_understand' => trim($request->language['filipino']['canUnderstand'], '"') == true ? 1 : 0,
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => trim($request->workExperience['workExperience1']['companyName'], '"'),
            'address' => trim($request->workExperience['workExperience1']['address'], '"'),
            'position' => trim($request->workExperience['workExperience1']['position'], '"'),
            'inclusive_date' => date('Y-m-d', strtotime(trim($request->workExperience['workExperience1']['inclusive'], '"'))),
            'status' => trim($request->workExperience['workExperience1']['status'], '"'),
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => trim($request->workExperience['workExperience2']['companyName'], '"'),
            'address' => trim($request->workExperience['workExperience2']['address'], '"'),
            'position' => trim($request->workExperience['workExperience2']['position'], '"'),
            'inclusive_date' => date('Y-m-d', strtotime(trim($request->workExperience['workExperience2']['inclusive'], '"'))),
            'status' => trim($request->workExperience['workExperience2']['status'], '"'),
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => trim($request->workExperience['workExperience3']['companyName'], '"'),
            'address' => trim($request->workExperience['workExperience3']['address'], '"'),
            'position' => trim($request->workExperience['workExperience3']['position'], '"'),
            'inclusive_date' => date('Y-m-d', strtotime(trim($request->workExperience['workExperience3']['inclusive'], '"'))),
            'status' => trim($request->workExperience['workExperience3']['status'], '"'),
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => trim($request->workExperience['workExperience4']['companyName'], '"'),
            'address' => trim($request->workExperience['workExperience4']['address'], '"'),
            'position' => trim($request->workExperience['workExperience4']['position'], '"'),
            'inclusive_date' => date('Y-m-d', strtotime(trim($request->workExperience['workExperience4']['inclusive'], '"'))),
            'status' => trim($request->workExperience['workExperience4']['status'], '"'),
        ]);

        $applicant->applicant_work_experience()->create([
            'company_name' => trim($request->workExperience['workExperience5']['companyName'], '"'),
            'address' => trim($request->workExperience['workExperience5']['address'], '"'),
            'position' => trim($request->workExperience['workExperience5']['position'], '"'),
            'inclusive_date' => date('Y-m-d', strtotime(trim($request->workExperience['workExperience5']['inclusive'], '"'))),
            'status' => trim($request->workExperience['workExperience5']['status'], '"'),
        ]);

        $applicant->applicant_status()->create([
            'applicant_type' => trim($request->employment['employed']['employementStatus'], '"'),
            'applicant_status_type' => trim($request->employment['employed']['employementStatusType'], '"'),
        ]);

        $applicant->applicant_status()->create([
            'applicant_type' => trim($request->employment['unemployed']['unemployementStatus'], '"'),
            'applicant_status_type' => trim($request->employment['unemployed']['unemployementStatusType'], '"'),
        ]);

        // dd($request->educationalBackground['graduateStudies']['awardsRecieved']);
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
}
