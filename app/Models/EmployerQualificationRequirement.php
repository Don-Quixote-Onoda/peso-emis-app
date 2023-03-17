<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployerQualificationRequirement extends Model
{
    use HasFactory;

    public $table = "employer_qualification_requirements";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "work_of_experience",
        "sex",
        "religion",
        "civil_status",
        "is_accept_disability",
        "disability_type",
        "educational_level",
        "course_or_major",
        "license",
        "eligibility",
        "certification",
        "language_or_dialect",
        "preferred_residence",
        "other_qualification",
        "nature_of_work",
        "employer_id"
    ];

    public function employer() {
        return $this->belongsTo(Employer::class);
    }
}
