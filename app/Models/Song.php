<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $primaryKey = "song_id";

    protected $fillable = [
        "name",
        "spotify_id",
        "artist",
        "album",
        "duration",
        "year",
        "genre",
    ];

    public function collections()
    {
        return $this->belongsToMany(
            Collection::class,
            "collection_song",
            "collection_id",
            "song_id"
        )
            ->withTimestamps()
            ->withPivot("song_position");
    }
}
