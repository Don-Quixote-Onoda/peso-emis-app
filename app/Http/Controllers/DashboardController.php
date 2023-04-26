<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use App\Models\Applicant;
class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = array();
        $employers = Employer::all();

        foreach($employers as $employer) {
            array_push($response, array(
                $employer,
                $employer->employer_vacancy_detail
            ));
        }
            return Inertia::render('Dashboard', [
                'employers' => $employers
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function getAllEmployerJobPosting(string $id) {
        $employer = Employer::find($id);
        $response = array();
            array_push($response, $employer->employer_vacancy_detail);
            array_push($response, $employer->employer_posting_detail);
            array_push($response, $employer->employer_qualification_requirement);
        return $employer;
    }

    public function getMatchingApplicants(string $postion_title, string $salary) {

        $applicants = Applicant::where('expected_salary', $salary)
            ->whereIn('id', function ($query) use ($postion_title) {
                $query->select('applicant_id')
                    ->from('applicant_job_preferences')
                    ->where('occupation', $postion_title);
            })
            ->get();

            $response = array();

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

        return $applicants;
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
