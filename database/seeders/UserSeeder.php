<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "username" => "krish",
            "email" => "krishjanis96@gmail.com",
            "password" =>
                "$2y$10$4ekuGXe7ANeEqOUnvD0yoevngUFtMNlonO/j209ur2gEGIQX3hDZe",
            "name" => "Krisjanis",
            "surname" => "Auzins",
            "lastfm_username" => "krisjanis_a",
            "lastfm_session_key" => "xP2ZnoEZrHEWzjgdl3ypyu3tENd6xdGe",
            "spotify_access_token" =>
                "BQBlnqCnZz4n3RKHmukrGc7U0kMqx5Q2c1kk1KjYz0EvZP8F4HBVW5zjMhgwe3RHj6n5fTbrokkzRJuc66fzXoAp5Z07fMpRGBQ0pOzIsKQg8au6bDNyUzoH9NI1vELQ7-q7QxDNyxa389TxVPo",
            "spotify_refresh_token" =>
                "AQA8bKnBaPmGBSXKY09krj_DhO3y2iTG98KgCtB41UgtAN_3FuYnNo2Hb5jdj-aKqmYOjS61KSHWjnO4zlGrEgpXKN6jtBQszKk1QuhOdHGI0NuhUEzE6PlrC5t9OS-zO_0",
            "spotify_scope" => "playlist-read-private",
        ]);
    }
}
