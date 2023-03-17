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
        Schema::create('employers', function (Blueprint $table) {
            $table->id();
            $table->string('establishment_name');
            $table->string('establishment_accronym');
            $table->string('TIN_number');
            $table->string('employer_type');
            $table->string('total_work_force');
            $table->string('line_of_business');
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
        Schema::dropIfExists('employers');
    }
};
