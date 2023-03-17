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
        Schema::create('applicant_educational_backgrounds', function (Blueprint $table) {
            $table->id();
            $table->integer('type');
            $table->string('school');
            $table->string('course');
            $table->integer('year_graduated');
            $table->string('level');
            $table->integer('year_last_attended');
            $table->string('awards');
            $table->unsignedBigInteger('applicant_id');
            $table->foreign('applicant_id')->references('id')->on('applicants');
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
        Schema::dropIfExists('applicant_educational_backgrounds');
    }
};
