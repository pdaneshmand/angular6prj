<?php
session_start();
$user = isset($_SESSION['user']) ? $_SESSION['user'] : 'user';
if($user == 'admin') {
    echo '{
        "message": "This is a secret message only for administrator",
        "success": true   
    }';
} else {
    echo '{
        "message": "Who the f are you",
        "success": false
    }';
}
?>