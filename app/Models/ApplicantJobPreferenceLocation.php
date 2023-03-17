<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantJobPreferenceLocation extends Model
{
    use HasFactory;

    public $table = "applicant_job_preference_locations";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "type",
        "country_name",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
