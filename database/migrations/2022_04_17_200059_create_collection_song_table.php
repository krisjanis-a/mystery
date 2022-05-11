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
        Schema::create("collection_song", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("collection_id")->default(null);
            $table->unsignedBigInteger("song_id")->default(null);
            $table->integer("song_position")->default(null);
            $table->timestamps();

            $table
                ->foreign("collection_id")
                ->references("collection_id")
                ->on("collections");
            $table
                ->foreign("song_id")
                ->references("song_id")
                ->on("songs");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("collection_song");
    }
};
