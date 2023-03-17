<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;

class EmployersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Employers/index', [
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

        $employer = Employer::create([
            "establishment_name" => trim($request->stablishmentName, '"'),
            "establishment_accronym" => trim($request->stablishmentAbbreviation, '"'),
            "TIN_number" => trim($request->TIN, '"'),
            "employer_type" => trim($request->employerType, '"'),
            "total_work_force" => trim($request->totalWorkForce, '"'),
            "line_of_business" => trim($request->lineOfBusiness, '"'),
            "e_signature" => 'brightlocal_esignature.png',
            "is_authorization_accepted" => 1
        ]);

        $employer->employer_address()->create([
            "address" => trim($request->houseNumber_Street_Village, '"'),
            "barangay" => trim($request->barangayAddress, '"'),
            "city_or_municipality" => trim($request->cityAddress, '"'),
            "province" => trim($request->provinceAddress, '"'),
        ]);

        $employer->employer_establishment_contact_detail()->create([
            "title" => trim($request->title, '"'),
            "fullname" => trim($request->contactPerson, '"'),
            "position" => trim($request->postion, '"'),
            "telephone_number" => trim($request->telephoneNumber, '"'),
            "mobile_number" => trim($request->mobileNumber, '"'),
            "fax_number" => trim($request->faxNumber, '"'),
            "email_address" => trim($request->emailAdress, '"'),
        ]);

        

        $employer->employer_qualification_requirement()->create([
            "work_of_experience" => trim($request->workExperience, '"'),
            "sex" => trim($request->sex, '"'),
            "religion" => trim($request->religion, '"'),
            "civil_status" => trim($request->civilStatus, '"'),
            "is_accept_disability" => trim($request->isAcceptDisability),
            "disability_type" => $request->disabilitiesAccepted,
            "educational_level" => trim($request->educationalLevel, '"'),
            "course_or_major" => trim($request->courseOrMajor, '"'),
            "license" => trim($request->license, '"'),
            "eligibility" => trim($request->eligibility, '"'),
            "certification" => trim($request->certification, '"'),
            "language_or_dialect" => trim($request->languageOrDialectSpoken, '"'),
            "preferred_residence" => trim($request->preferredResidence, '"'),
            "nature_of_work" => trim($request->natureOfWork, '"'),
            "other_qualification" => "PESO",
        ]);

        $employer->employer_vacancy_detail()->create([
            "position_title" => trim($request->positionTitle, '"'),
            "job_description" => trim($request->jobDescription, '"'),
            "nature_of_work" => trim($request->natureOfWork, '"'),
            "place_of_work" => trim($request->placeOfWork, '"'),
            "salary" => trim($request->salary, '"'),
            "vacancy_count" => trim($request->vacancyCount, '"'),
        ]);

        $employer->employer_posting_detail()->create([
            "posting_date" => date('Y-m-d', strtotime(trim($request->postingDate, '"'))),
            "valid_until" =>date('Y-m-d', strtotime(trim($request->validUntil, '"'))),
        ]);

        dd("done");

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
