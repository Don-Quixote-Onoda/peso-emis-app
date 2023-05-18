<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Applicant;
use Illuminate\Support\Facades\Hash;
use Carbon\CarbonPeriod;
use Carbon\Carbon;

class SummaryReportsController extends Controller
{
    public function index()
    {

        $year = Carbon::now()->year;

        // Function to count the number of applicants by date
        function getApplicantsByDate($date)
        {
            $applicants = Applicant::whereDate('created_at', $date)->get();
            return count($applicants);
        }

        // Function to count the number of applicants by week
        function getApplicantsByWeek($start, $end)
        {
            $applicants = Applicant::whereBetween('created_at', [$start, $end])->get();
            return count($applicants);
        }

        // Function to count the number of applicants by month
        function getApplicantsByMonth($year, $month)
        {
            $daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);
            $start = sprintf('%d-%02d-01', $year, $month);
            $end = sprintf('%d-%02d-%02d', $year, $month, $daysInMonth);
            $applicants = Applicant::whereBetween('created_at', [$start, $end])->get();
            return count($applicants);
        }

        // Initialize the applied_result array
        $applied_result = [];

        // Loop through each month of the year
        for ($month = 1; $month <= 12; $month++) {
            // Get the month name and number of days in the month
            $monthName = date('F', strtotime("$year-$month-01"));
            $daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);

            // Initialize the month array
            $monthArray = [
                'month' => $monthName,
                'weeks' => []
            ];

            // Loop through each week of the month
            $period = CarbonPeriod::create("$year-$month-01", "$year-$month-$daysInMonth");
            $weekNum = 1;
            $weekArray = [
                'week' => "Week $weekNum",
                'days' => []
            ];
            foreach ($period as $date) {
                $day = $date->day;

                // Get the number of applicants for the current day
                $count = getApplicantsByDate($date->format('Y-m-d'));

                // Add the day and its applicants count to the current week array
                $dayArray = [
                    'day' => $date->format('M j'),
                    'applicants' => $count
                ];
                $weekArray['days'][] = $dayArray;

                // If the current day is a Sunday or the last day of the month, add the current week array to the month array
                if ($date->isSunday() || $day == $daysInMonth) {
                    $monthArray['weeks'][] = $weekArray;
                    $weekNum++;

                    // Reset the week array for the next week
                    if ($weekNum <= 4) {
                        $weekArray = [
                            'week' => "Week $weekNum",
                            'days' => []
                        ];
                    }
                }
            }

            // Add the month array to the applied_result array
            $applied_result[] = $monthArray;
        }


        // Function to count the number of hired_result applicants by date_hired
        function getHiredApplicantsByDate($date)
        {
            $applicants = Applicant::whereDate('date_hired', $date)
                ->where('is_hired', 1)
                ->get();
            return count($applicants);
        }

        // Function to count the number of hired_result applicants by week and is_hired
        function getHiredApplicantsByWeek($start, $end)
        {
            $applicants = Applicant::whereBetween('date_hired', [$start, $end])
                ->where('is_hired', 1)
                ->get();
            return count($applicants);
        }

        // Function to count the number of hired_result applicants by month and is_hired
        function getHiredApplicantsByMonth($year, $month)
        {
            $daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);
            $start = sprintf('%d-%02d-01', $year, $month);
            $end = sprintf('%d-%02d-%02d', $year, $month, $daysInMonth);
            $applicants = Applicant::whereBetween('date_hired', [$start, $end])
                ->where('is_hired', 1)
                ->get();
            return count($applicants);
        }

        // Initialize the hired_result array
        $hired_result = [];

        // Loop through each month of the year
        for ($month = 1; $month <= 12; $month++) {
            // Get the month name and number of days in the month
            $monthName = date('F', strtotime("$year-$month-01"));
            $daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);

            // Initialize the month array
            $monthArray = [
                'month' => $monthName,
                'weeks' => []
            ];

            // Loop through each week of the month
            $period = CarbonPeriod::create("$year-$month-01", "$year-$month-$daysInMonth");
            $weekNum = 1;
            $weekArray = [
                'week' => "Week $weekNum",
                'days' => []
            ];
            foreach ($period as $date) {
                $day = $date->day;

                // Get the number of hired_result applicants for the current day
                $count = getHiredApplicantsByDate($date->format('Y-m-d'));

                // Add the day and its hired_result applicants count to the current week array
                $dayArray = [
                    'day' => $date->format('M j'),
                    'hired_applicants' => $count
                ];
                $weekArray['days'][] = $dayArray;

                // If the current day is a Sunday or the last day of the month, add the current week array to the month array
                if ($date->isSunday() || $day == $daysInMonth) {
                    $monthArray['weeks'][] = $weekArray;
                    $weekNum++;

                    // Reset the week array for the next week
                    if ($weekNum <= 4) {
                        $weekArray = [
                            'week' => "Week $weekNum",
                            'days' => []
                        ];
                    }
                }
            }

            // Add the month array to the hired_result array
            $hired_result[] = $monthArray;
        }


        // Output the applied_result array
        return Inertia::render('SummaryReport', [
            'applicants_report' => $applied_result,
            'applicants_hired' => $hired_result
        ]);
    }

    public function getApplicantsTimeRange(Request $request) {
        $applicants = Applicant::with('applicant_status')
        ->selectRaw("*, CONCAT(surname, ', ', firstname, ' ', middlename, ' ', suffix) AS full_name")
    ->where('is_deleted', 0)
    ->whereBetween('created_at', [
        Carbon::parse($request->dateFrom)->startOfDay(),
        Carbon::parse($request->dateTo)->endOfDay()
    ])
    ->orderByDesc('id')
    ->get();
        return $applicants;
    }
}
