<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Applicant;
use Illuminate\Support\Facades\Redirect;
class AdminApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = array();

        $applicants = Applicant::all();

        foreach($applicants as $applicant) {
            array_push($response, array(
                $applicant,
                $applicant->applicant_address,
                $applicant->applicant_educational_background,
                $applicant->applicant_eligibility,
                $applicant->applicant_job_preference,
                $applicant->applicant_job_preference_location,
                $applicant->applicant_language_spoken,
                $applicant->applicant_status,
                $applicant->applicant_work_experience,
                $applicant->applicant_professional_license,
                $applicant->applicant_vocational_course
            ));
        }

        return Inertia::render('Admin/Applicants/Index', ['applicants' => $applicants]);
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
        //
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
        Applicant::find($request->id)->delete();
        return Redirect::route('delete-applicant');
    }
}
