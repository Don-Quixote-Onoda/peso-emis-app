<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployerAddress extends Model
{
    use HasFactory;

    public $table = "employer_addresses";
    public $primary_key = "id";
    public $timestamp = true;


    protected $fillable = [
        "address",
        "barangay",
        "city_or_municipality",
        "province",
        "employer_id"
    ];


    public function employer() {
        return $this->belongsTo(Employer::class);
    }
}
