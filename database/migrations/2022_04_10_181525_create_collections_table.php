<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("collections", function (Blueprint $table) {
            $table->id("collection_id");
            $table->string("name");
            $table->unsignedBigInteger("creator_id");
            $table->text("description");
            $table->timestamps();

            $table
                ->foreign("creator_id")
                ->references("id")
                ->on("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("collections");
    }
};
