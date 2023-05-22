<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\EmployerVacancyDetail;
use App\Models\EmployerQualificationRequirement;
use App\Models\EmployerPostingDetail;

class EmployerSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $id = Auth::user()->id;
        $employer = Employer::where('user_id', $id)->get();
        
        $response = array();
        if(count($employer) > 0)
            array_push($response, $employer[0]->employer_vacancy_detail);
            array_push($response, $employer[0]->employer_posting_detail);
            array_push($response, $employer[0]->employer_qualification_requirement);
            array_push($response, $employer[0]->employer_establishment_contact_detail);
            array_push($response, $employer[0]->employer_address);
        return Inertia::render('EmployerAdmin/EmployerSettings/Index', [
            'employers' => $employer
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function updateEstablishmentDetails(Request $request) {
        $employer = Employer::find($request->id);
        $employer->establishment_accronym = $request->establishment_accronym;
        $employer->establishment_name = $request->establishment_name;
        $employer->is_authorization_accepted = $request->is_authorization_accepted;
        $employer->line_of_business = $request->line_of_business;
        $employer->total_work_force = $request->total_work_force;
        $employer->TIN_number = $request->TIN_number;
        $employer->e_signature = $request->e_signature;
        $employer->employer_type = $request->employer_type;
        $employer->save();
        $employer->employer_address->region = $request->region;
        $employer->employer_address->province = $request->province;
        $employer->employer_address->city_or_municipality = $request->city_or_municipality;
        $employer->employer_address->barangay = $request->barangay;
        $employer->employer_address->address = $request->address;
        $employer->employer_address->save();

        return Redirect::route('dashboard');
    }

    public function updateEstablishmentContactDetails(Request $request) {
        $employer = Employer::find($request->id);
        $employer->employer_establishment_contact_detail->email_address = $request->email_address;
        $employer->employer_establishment_contact_detail->fax_number = $request->fax_number;
        $employer->employer_establishment_contact_detail->fullname = $request->fullname;
        $employer->employer_establishment_contact_detail->mobile_number = $request->mobile_number;
        $employer->employer_establishment_contact_detail->position = $request->position;
        $employer->employer_establishment_contact_detail->telephone_number = $request->telephone_number;
        $employer->employer_establishment_contact_detail->title = $request->title;
        $employer->employer_establishment_contact_detail->save();
        return Redirect::route('dashboard');
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
