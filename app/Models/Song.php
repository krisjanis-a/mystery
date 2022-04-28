<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $name;
    protected $spotifyId;
    protected $artist;
    protected $album;
    protected $duration;
    protected $year;
    protected $genre;

    public function setName($name)
    {
        return $this->name = $name;
    }
}
