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
        Schema::create('employer_qualification_requirements', function (Blueprint $table) {
            $table->id();
            $table->string('work_of_experience');
            $table->string('sex');
            $table->string('religion');
            $table->string('civil_status');
            $table->string('is_accept_disability');
            $table->string('disability_type');
            $table->string('educational_level');
            $table->string('course_or_major');
            $table->string('license');
            $table->string('eligibility');
            $table->string('certification');
            $table->string('language_or_dialect');
            $table->string('preferred_residence');
            $table->string('other_qualification');
            $table->string('nature_of_work');
            $table->unsignedBigInteger('employer_id');
            $table->foreign('employer_id')->references('id')->on('employers');
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
        Schema::dropIfExists('employer_qualification_requirements');
    }
};
