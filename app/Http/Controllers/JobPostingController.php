<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class JobPostingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $id = Auth::user()->id;
        $employer = Employer::where('user_id', $id)->get();
        
        $response = array();
        if(count($employer) > 0)
            array_push($response, $employer[0]->employer_vacancy_detail);
            array_push($response, $employer[0]->employer_posting_detail);
            array_push($response, $employer[0]->employer_qualification_requirement);
        return Inertia::render('EmployerAdmin/Index', [
            'employers' => $employer
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
        $employer = Employer::where('user_id', $request->user_id)->get();
        $employer[0]->employer_qualification_requirement()->create([
            "work_of_experience" => $request->workExperience == null ? "N/A" : $request->workExperience,
            "sex" => $request->sex,
            "religion" => $request->religion,
            "civil_status" => $request->civilStatus,
            "is_accept_disability" => $request->isAcceptDisability,
            "disability_type" => $request->disabilityAccepted == null ? "N/A" : $request->disabilityAccepted,
            "educational_level" => $request->educationalLevel == null ? "N/A" : $request->educationalLevel,
            "course_or_major" => $request->courseOrMajor == null ? "N/A" : $request->courseOrMajor,
            "license" => $request->license == null ? "N/A" : $request->license,
            "eligibility" => $request->eligibility == null ? "N/A" : $request->eligibility,
            "certification" => $request->certification == null ? "N/A" : $request->certification,
            "language_or_dialect" => $request->languageOrDialectSpoken == null ? "N/A" : $request->languageOrDialectSpoken,
            "preferred_residence" =>  $request->preferredResidence == null ? "N/A" : $request->preferredResidence,
            "nature_of_work" => $request->qualificationRequirementNatureOfWork,
            "other_qualification" => $request->otherQualifications == null ? "N/A" : $request->otherQualifications,
        ]);

        $employer[0]->employer_vacancy_detail()->create([
            "position_title" => $request->positionTitle,
            "job_description" => $request->jobDescription,
            "nature_of_work" => $request->natureOfWork,
            "place_of_work" => $request->placeOfWork,
            "salary" => $request->salary,
            "vacancy_count" => $request->vacancyCount,
        ]);

        $employer[0]->employer_posting_detail()->create([
            "posting_date" => date('Y-m-d', strtotime($request->postingDate)),
            "valid_until" =>date('Y-m-d', strtotime($request->validUntil)),
        ]);

        return Redirect::route('job-postings');
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
    public function destroy(Request $request)
    {
        // $employer = Employer::where('user_id', $request->user_id)->get();
        // $employer[0]->employer_qualification_requirement()->delete();
        // $employer[0]->employer_posting_detail()->delete();
        // return Redirect::route('job-postings');
    }
}
