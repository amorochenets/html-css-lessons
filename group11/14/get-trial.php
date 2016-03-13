<?php 

print_r($_POST);

$name = $_POST["name"];
$email = $_POST["email"];
$pswd = $_POST["pswd"];

 ?>

<br>
Name: <?=$name?>
<br>
Email: <?=$email?>
<br>
Passwd: <?=$pswd?>