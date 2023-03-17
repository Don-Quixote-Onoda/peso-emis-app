<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployerEstablishmentContactDetail extends Model
{
    use HasFactory;

    public $table = "employer_establishment_contact_details";
    public $primary_key = "id";
    public $timestamp = true;


    protected $fillable = [
        "title",
        "fullname",
        "position",
        "telephone_number",
        "mobile_number",
        "fax_number",
        "email_address",
        "employer_id"
    ];

    public function employer() {
        return $this->belongsTo(Employer::class);
    }
}
