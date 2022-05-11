<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CollectionSong extends Pivot
{
    use HasFactory;

    // protected $table = "collection_song";

    protected $fillable = ["collection_id", "song_id", "song_position"];

    public function position()
    {
        return $this->get();
    }
}
