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
    public function index() {

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
        
        // Initialize the result array
        $result = [];
        
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
        
            // Add the month array to the result array
            $result[] = $monthArray;
        }
        
        // Output the result array
        return Inertia::render('SummaryReport', [
            'applicants_report' => $result
        ]);
    }
}
