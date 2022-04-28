<?php
function writeToLog($log)
{
    $file = "/home/krish/Documents/web-dev/mystery/php_logger.txt";
    $ip = $_SERVER["REMOTE_ADDR"];
    date_default_timezone_set("Europe/Riga");
    $time = date("m/d/y h:iA", time());

    // $contents = "$ip\t$time\t$log\n";
    $contents = $log . "\n";

    file_put_contents($file, $contents, FILE_APPEND);
}
