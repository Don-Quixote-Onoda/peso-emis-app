<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployerVacancyDetail extends Model
{
    use HasFactory;

    public $table = "employer_vacancy_details";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "position_title",
        "nature_of_work",
        "place_of_work",
        "job_description",
        "salary",
        "vacancy_count",
        "employer_id"
    ];

    public function employer() {
        return $this->belongsTo(Employer::class);
    }
}
