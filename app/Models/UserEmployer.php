<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEmployer extends Model
{
    use HasFactory;

    public $table = "users";
    public $primary_key = "id";
    public $timestamp = true;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    public function employer() {
        return $this->hasOne(Employer::class);
    }
}
