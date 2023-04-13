<?php

use App\Http\Controllers\AdminEmployersController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ApplicantsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployersController;
use App\Http\Controllers\JobPostingController;
use App\Http\Controllers\TestController;

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

Route::get('test', [TestController::class, 'index']);