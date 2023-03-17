<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantLanguageSpoken extends Model
{
    use HasFactory;

    public $table = 'applicant_language_spokens';
    public $primary_key = 'id';
    public $timestamp = true;

    protected $fillable = [
        "language_spoken",
        "can_read",
        "can_write",
        "can_speak",
        "can_understand",
        "applicant_id"
    ];

    public function applicant() {
        return $this->belongsTo(Applicant::class);
    }
}
