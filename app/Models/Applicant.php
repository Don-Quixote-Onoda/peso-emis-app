<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    public $table = "applicants";
    public $primary_key = 'id';
    public $timestamp = true;  

    protected $fillable = [
        "surname",
        "firstname",
        "middlename",
        "suffix",
        "birthdate",
        "civil_status",
        "height",
        "religion",
        "sex",
        "email_address",
        "landline_number",
        "phone_number",
        "disability",
        "TIN_number",
        "GSIS_SSS_id",
        "pag_ibig_number",
        "philhealth_id",
        "is_actively_looking_for_work",
        "is_willing_to_work_immidiately",
        "find_job_duration",
        "when_to_start_working",
        "is_4Ps",
        "household_id_4ps",
        "expected_salary",
        "passport_number",
        "expiry_date",
        "skills_without_formal_training",
        "e_signature",
        "is_authorization_accepted",
        "is_hired",
        "date_hired",
        "is_deleted"
    ];



    public function applicant_address() {
        return $this->hasMany(ApplicantAddress::class);
    }

    public function applicant_educational_background() {
        return $this->hasMany(ApplicantEducationalBackground::class);
    }

    public function applicant_eligibility() {
        return $this->hasMany(ApplicantEligibility::class);
    }

    public function applicant_job_preference() {
        return $this->hasMany(ApplicantJobPreference::class);
    }

    public function applicant_job_preference_location() {
        return $this->hasMany(ApplicantJobPreferenceLocation::class);
    }

    public function applicant_language_spoken() {
        return $this->hasMany(ApplicantLanguageSpoken::class);
    }

    public function applicant_status() {
        return $this->hasOne(ApplicantStatus::class);
    }

    public function applicant_work_experience() {
        return $this->hasMany(ApplicantWorkExperience::class);
    }

    public function applicant_professional_license() {
        return $this->hasMany(ApplicantProfessionalLicense::class);
    }

    public function applicant_vocational_course() {
        return $this->hasMany(ApplicantVocationalCourse::class);
    }

}
