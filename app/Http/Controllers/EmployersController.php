<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class EmployersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Employers/index', [
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
        $e_signature = null;
        if($request->hasFile('e_signature')) {
            $filename = time().rand(3, 9). '.'.$request->file('e_signature')->getClientOriginalExtension();
            $request->file('e_signature')->move('uploads/applicants/', $filename);
            $e_signature = $filename;

        }
        $user = User::create([
            'name' => trim($request->username, '"'),
            'email' => trim($request->email, '"'),
            'password' => Hash::make(trim($request->password, '"')),
            'role' => 0,
            'is_activated' => 0
        ]);

        $employer = Employer::create([
            "establishment_name" => trim($request->stablishmentName, '"'),
            "establishment_accronym" => trim($request->stablishmentAbbreviation, '"'),
            "TIN_number" => trim($request->TIN, '"'),
            "employer_type" => trim($request->employerType, '"'),
            "total_work_force" => trim($request->totalWorkForce, '"'),
            "line_of_business" => trim($request->lineOfBusiness, '"'),
            "e_signature" => $e_signature,
            "is_authorization_accepted" => 1,
            'user_id' => $user->id
        ]);

        $employer->employer_address()->create([
            "address" => trim($request->houseNumber_Street_Village, '"'),
            "barangay" => trim($request->barangayAddress, '"'),
            "city_or_municipality" => trim($request->cityAddress, '"'),
            "province" => trim($request->provinceAddress, '"'),
            "region" => trim($request->regionAddress, '"'),
        ]);

        $employer->employer_establishment_contact_detail()->create([
            "title" => trim($request->title, '"'),
            "fullname" => trim($request->contactPerson, '"'),
            "position" => trim($request->postion, '"'),
            "telephone_number" => trim($request->telephoneNumber, '"'),
            "mobile_number" => trim($request->mobileNumber, '"'),
            "fax_number" => trim($request->faxNumber, '"'),
            "email_address" => trim($request->emailAdress, '"'),
        ]);

        event(new Registered($user));

        Auth::login($user);
        return redirect(RouteServiceProvider::HOME);

        

        // dd("done");

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
    public function destroy(string $id)
    {
        //
    }
}
