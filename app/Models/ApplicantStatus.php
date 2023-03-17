<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantStatus extends Model
{
    use HasFactory;

    public $table = "applicant_statuses";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "applicant_type",
        "applicant_status_type",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
