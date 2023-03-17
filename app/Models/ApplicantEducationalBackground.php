<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantEducationalBackground extends Model
{
    use HasFactory;

    public $table = "applicant_educational_backgrounds";
    public $primary_key = "id";
    public $timestamp = true;

    public $fillable = [
        "type",
        "school",
        "course",
        "year_graduated",
        "level",
        "year_last_attended",
        "awards",
        "applicant_id"
    ];


    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
