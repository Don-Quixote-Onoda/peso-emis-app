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
        Schema::create('employer_establishment_contact_details', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('fullname');
            $table->string('position');
            $table->string('telephone_number');
            $table->string('mobile_number');
            $table->string('fax_number');
            $table->string('email_address');
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
        Schema::dropIfExists('employer_establishment_contact_details');
    }
};
