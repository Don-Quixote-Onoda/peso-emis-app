<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantEligibility extends Model
{
    use HasFactory;

    public $table = "applicant_eligibilities";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "eligibility",
        "rating",
        "date_of_examination",
        "applicant_id"
    ];


    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
