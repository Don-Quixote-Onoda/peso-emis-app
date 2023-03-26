<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantVocationalCourse extends Model
{
    use HasFactory;

    public $table = "applicant_vocational_courses";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "training_or_courses",
        "duration",
        "instituition",
        "certificates",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
