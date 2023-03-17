<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('surname');
            $table->string('firstname');
            $table->string('middlename');
            $table->string('suffix');
            $table->date('birthdate');
            $table->string('civil_status');
            $table->string('height');
            $table->string('religion');
            $table->string('sex');
            $table->string('email_address');
            $table->string('landline_number');
            $table->string('phone_number');
            $table->string('disability');
            $table->string('TIN_number');
            $table->string('pag_ibig_number');
            $table->string('GSIS_SSS_id');
            $table->string('philhealth_id');
            $table->integer('is_actively_looking_for_work');
            $table->integer('is_willing_to_work_immidiately');
            $table->string('find_job_duration');
            $table->date('when_to_start_working');
            $table->integer('is_4Ps');
            $table->string('household_id_4ps');
            $table->integer('expected_salary');
            $table->string('passport_number');
            $table->date('expiry_date');
            $table->string('skills_without_formal_training');
            $table->string('e_signature');
            $table->integer('is_authorization_accepted');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicants');
    }
};
