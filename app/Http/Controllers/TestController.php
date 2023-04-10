<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Applicant;

class TestController extends Controller
{
    //

    public function index() {
        // // $id = Auth::user()->id;
        // $user = User::find(5);
        // // return Inertia::render('JobPosting', [
        // //     'employers' => $user->employer()
        // // ]);

        // $employer = Employer::where('user_id', 5)->get();

        // return $employer[0]->employer_vacancy_detail;

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

        return $applicants;
    }
}
