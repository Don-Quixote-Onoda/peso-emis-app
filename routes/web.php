<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\EmployersController;
use App\Http\Controllers\AdminApplicantsController;
use App\Http\Controllers\AdminEmployersController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\JobPostingController;
use App\Models\Employer;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'employers' => Employer::all()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('employers', EmployersController::class);
Route::resource('applicants', ApplicantsController::class);
// Route::resource('/admin-employers', AdminEmployersController::class)->middleware(['auth', 'verified']);
// Route::resource('/admin-applicants', AdminApplicantsController::class)->middleware(['auth', 'verified']);
Route::get('/admin-applicants', [AdminApplicantsController::class, 'index'])->middleware(['auth', 'verified'])->name('admin-applicants');
Route::get('/admin-employers', [AdminEmployersController::class, 'index'])->middleware(['auth', 'verified'])->name('admin-employers');
Route::get('/admin-users', [AdminUserController::class, 'index'])->middleware(['auth', 'verified'])->name('admin-users');
Route::get('/job-posting', [JobPostingController::class, 'index'])->middleware(['auth', 'verified'])->name('job-postings');


require __DIR__.'/auth.php';
