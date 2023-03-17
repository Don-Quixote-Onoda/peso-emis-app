<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployerPostingDetail extends Model
{
    use HasFactory;

    public $table = "employer_posting_details";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        "posting_date",
        "valid_until",
        "employer_id"
    ];

    public function employer() {
        return $this->belongsTo(Employer::class);
    }
}
