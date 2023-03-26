<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantProfessionalLicense extends Model
{
    use HasFactory;

    public $table = "applicant_professional_licenses";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "professional_license",
        "valid_until",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
