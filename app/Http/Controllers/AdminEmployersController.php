<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employer;
use Illuminate\Support\Facades\Redirect;
use App\Models\EmployerVacancyDetail;
use App\Models\EmployerQualificationRequirement;
use App\Models\EmployerPostingDetail;

class AdminEmployersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = array();
        $employers = Employer::where('is_deleted', 0)->get();
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
    public function destroy(Request $request)
    {
        $employer = Employer::find($request->id);
        $employer->is_deleted = 1;
        $employer->save();
        return Redirect::route('admin-employers');
    }

    public function updateEstablishmentDetail(Request $request) {
        $employer = Employer::find($request->id);
        $employer->update([
            "establishment_name" =>$request->establishment_name,
            "establishment_accronym" =>$request->establishment_accronym,
            "TIN_number" =>$request->TIN_number,
            "employer_type" =>$request->employer_type,
            "total_work_force" =>$request->total_work_force,
            "line_of_business" =>$request->line_of_business,
            "e_signature" => 'brightlocal_esignature.png',
            "is_authorization_accepted" => 1
        ]);

        return Redirect::route('admin-employers');
    }

    public function deleteJobPosting(Request $request) {
        $employer_vacancy_detail = EmployerVacancyDetail::find($request->id);
        $employer_qualification_requirement = EmployerQualificationRequirement::find($request->id);
        $employer_posting_detail = EmployerPostingDetail::find($request->id);
        $current_status = $employer_vacancy_detail->is_active == 0 ? 1 : 0;

        $employer_vacancy_detail->is_active = $current_status;

        $employer_vacancy_detail->save();

        // $employer_qualification_requirement->delete();
        // $employer_posting_detail->delete();
        return Redirect::route('admin-employers');
    }
}
