<?php

use App\Http\Controllers\AdminApplicantsController;
use App\Http\Controllers\AdminEmployersController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployersController;
use App\Http\Controllers\EmployerSettingsController;
use App\Http\Controllers\JobPostingController;
use App\Http\Controllers\SummaryReportsController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('employers', EmployersController::class);
Route::resource('applicants', ApplicantsController::class);
Route::resource('job-posting', JobPostingController::class);
Route::post('job-posting-update', [JobPostingController::class, 'update'])->name('update-job-posting');
Route::post('job-posting-delete', [JobPostingController::class, 'destroy'])->name('delete-job-posting');
Route::resource('users', AdminUserController::class);
Route::post('update-employer-establishment-details', [AdminEmployersController::class, 'updateEstablishmentDetail']);
Route::post('applicant-delete', [AdminApplicantsController::class, 'destroy'])->name('delete-applicant');
Route::get('test', [TestController::class, 'index'])->name('test-api');
Route::post('test', [TestController::class, 'testCreate'])->name('test-api-create');
Route::post('users/add', [UsersController::class, 'store'])->name('add-user');
Route::post('users/update', [UsersController::class, 'update'])->name('update-user');
Route::post('users/delete', [UsersController::class, 'destroy'])->name('delete-user');
Route::post('users/activate', [UsersController::class, 'activate'])->name('activate-user');
Route::get('get-all-employer-job_posting/{id}', [DashboardController::class, 'getAllEmployerJobPosting'])->name('get-all-employer-job_posting');
Route::get('get-matching-applicants/{position_title}/{salary}', [DashboardController::class, 'getMatchingApplicants'])->name('get-matching-applicants');
Route::post('hire-applicant', [ApplicantsController::class, 'hireApplicant'])->name('hire-applicant');
Route::post('delete-employer', [AdminEmployersController::class, 'destroy'])->name('delete-employer');
Route::post('delete-employer-jobposting', [AdminEmployersController::class, 'deleteJobPosting'])->name('delete-employer-jobposting');
Route::post('update-establishment-details', [EmployerSettingsController::class, 'updateEstablishmentDetails'])->name('update-establishment-details');
Route::post('update-establishment-contact-details', [EmployerSettingsController::class, 'updateEstablishmentContactDetails'])->name('update-establishment-contact-details');
Route::post('getApplicantsTimeRange', [SummaryReportsController::class, 'getApplicantsTimeRange'])->name('getApplicantsTimeRange');
