<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Applicant;
use Illuminate\Support\Facades\Hash;
use Carbon\CarbonPeriod;
use Carbon\Carbon;


class TestController extends Controller
{
    //

    public function index()
    {
      $employer = Employer::find(1)->user;

      return $employer;
    }

    public function testCreate(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role
        ]);

        return 'success';
    }
}


// // $id = Auth::user()->id;
//         // $user = User::find(5);
//         // // return Inertia::render('JobPosting', [
//         // //     'employers' => $user->employer()
//         // // ]);

//         // $employer = Employer::where('user_id', 5)->get();

//         // return $employer[0]->employer_vacancy_detail;

//         // $response = array();

//         // $applicants = Applicant::all();

//         // foreach($applicants as $applicant) {
//         //     array_push($response, array(
//         //         $applicant,
//         //         $applicant->applicant_address,
//         //         $applicant->applicant_educational_background,
//         //         $applicant->applicant_eligibility,
//         //         $applicant->applicant_job_preference,
//         //         $applicant->applicant_job_preference_location,
//         //         $applicant->applicant_language_spoken,
//         //         $applicant->applicant_status,
//         //         $applicant->applicant_work_experience,
//         //         $applicant->applicant_professional_license,
//         //         $applicant->applicant_vocational_course
//         //     ));
//         // }

//         // return $applicants;

//         // $employer = Employer::find(1);
//         // $employer->employer_vacancy_detail;

//         // return  $employer->employer_vacancy_detail[0];

//         // $jobTitle = 'Test';
//         // $salary = 'Test';

//         // $applicants = Applicant::where('expected_salary', $salary)
//         //     ->whereIn('id', function ($query) use ($jobTitle) {
//         //         $query->select('applicant_id')
//         //             ->from('applicant_job_preferences')
//         //             ->where('occupation', $jobTitle);
//         //     })
//         //     ->get();

//         // Get all applicants
//         $applicants = Applicant::whereMonth('created_at', '=', 4)->whereYear('created_at', '=', 2023)->get();

// // Group applicants by the date they submitted their applications
// $applicantsByDate = $applicants->groupBy(function ($applicant) {
//     return $applicant->created_at->format('Y-m-d');
// });

// // return $applicantsByDate['2023-04-12'];

// // Create an empty array to store the results
// $results = [];

// // Loop through each day of the month
// for ($day = 1; $day <= 31; $day++) {
//     // Format the date as "Y-m-d"
//     $date = sprintf('%d-04-%02d', date('Y'), $day);

//     // Count the number of applicants for that day
//     $count = isset($applicantsByDate[$date]) ? count($applicantsByDate[$date]) : 0;
   
//     // Add the result to the array  
//     $results[] = [
//         'date' => date('M j', strtotime($date)),
//         'applicants' => $count,
//     ];
// }

// $weeksInMonth = CarbonPeriod::create("{$year}-{$month}-01", "{$year}-{$month}-31")->weeks();
//     $weeklyApplicantCounts = [];

//     foreach ($weeksInMonth as $week) {
//         $weekStart = $week->startOfWeek()->format('Y-m-d');
//         $weekEnd = $week->endOfWeek()->format('Y-m-d');

//         $applicantCount = Applicant::whereBetween('created_at', [$weekStart, $weekEnd])->count();

//         $weeklyApplicantCounts[] = [
//             'start_date' => $weekStart,
//             'end_date' => $weekEnd,
//             'applicant_count' => $applicantCount,
//         ];
//     }

//     return $weeklyApplicantCounts;
// // Output the results
// return $results;