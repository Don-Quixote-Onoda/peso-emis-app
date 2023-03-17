<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employer extends Model
{
    use HasFactory;

    public $table = "employers";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "establishment_name",
        "establishment_accronym",
        "TIN_number",
        "employer_type",
        "total_work_force",
        "e_signature",
        "is_authorization_accepted",
        "line_of_business"
    ];

    public function employer_address() {
        return $this->hasOne(EmployerAddress::class);
    }

    public function employer_establishment_contact_detail() {
        return $this->hasOne(EmployerEstablishmentContactDetail::class);
    }

    public function employer_posting_detail() {
        return $this->hasOne(EmployerPostingDetail::class);
    }

    public function employer_qualification_requirement() {
        return $this->hasOne(EmployerQualificationRequirement::class);
    }

    public function employer_vacancy_detail() {
        return $this->hasOne(EmployerVacancyDetail::class);
    }
}
