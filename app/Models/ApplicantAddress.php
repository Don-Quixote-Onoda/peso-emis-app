<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantAddress extends Model
{
    use HasFactory;

    public $table = 'applicant_addresses';
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "address_type",
        "region",
        "province",
        "municipality_or_city",
        "barangay",
        "village",
        "house_no_or_street",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
