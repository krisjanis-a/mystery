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
        Schema::create("artist_song", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("artist_id");
            $table->unsignedBigInteger("song_id");
            $table->timestamps();

            $table
                ->foreign("artist_id")
                ->references("artist_id")
                ->on("artists");
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
        Schema::dropIfExists("artist_song");
    }
};
