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
        Schema::create('employer_vacancy_details', function (Blueprint $table) {
            $table->id();
            $table->string('position_title');
            $table->string('nature_of_work');
            $table->string('job_description');
            $table->string('place_of_work');
            $table->string('salary');
            $table->string('vacancy_count');
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
        Schema::dropIfExists('employer_vacancy_details');
    }
};
