<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use HasFactory;

    protected $primaryKey = "collection_id";

    protected $fillable = ["name", "creator_id", "description"];

    public function songs()
    {
        return $this->belongsToMany(
            Song::class,
            "collection_song",
            "song_id",
            "collection_id"
        )
            ->withTimestamps()
            ->withPivot("song_position");
    }
}
