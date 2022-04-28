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
        Schema::create("artists", function (Blueprint $table) {
            $table->id("artist_id");
            $table->string("name");
            $table->integer("spotify_id");
            $table->string("spotify_url");
            $table->string("spotify_api_href");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("artists");
    }
};
