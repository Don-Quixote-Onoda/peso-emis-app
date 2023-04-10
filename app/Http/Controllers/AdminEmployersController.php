<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
class AdminEmployersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = array();
        $employers = Employer::all();
        foreach($employers as $employer) {
            array_push($response, array(
                $employer,
                $employer->employer_address,
                $employer->employer_establishment_contact_detail,
                $employer->employer_posting_detail,
                $employer->employer_qualification_requirement,
                $employer->employer_vacancy_detail,
            ));
        }
        return Inertia::render('Admin/Employers/Index', [
            'employers' => $employers
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
