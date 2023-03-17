<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantJobPreference extends Model
{
    use HasFactory;

    public $table = "applicant_job_preferences";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "applicant_id",
        "occupation"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
