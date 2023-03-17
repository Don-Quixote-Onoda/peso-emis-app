<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantWorkExperience extends Model
{
    use HasFactory;

    public $table = "applicant_work_experiences";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "company_name",
        "address",
        "position",
        "inclusive_date",
        "status",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
