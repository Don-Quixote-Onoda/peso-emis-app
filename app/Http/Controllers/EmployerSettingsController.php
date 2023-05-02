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
