<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Models\EmployerVacancyDetail;
class WelcomeController extends Controller
{
    public function index() {
        $jobposts = array();
        $vacancy = EmployerVacancyDetail::all();
        foreach($vacancy as $jobpost) {
            array_push($jobposts, array(
                $jobpost,
                $jobpost->employer,
                $jobpost->employer->employer_address,
                $jobpost->employer->employer_establishment_contact_detail
            ));
        }

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'jobs' => $vacancy
        ]);
    }
}
