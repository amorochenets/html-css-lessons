<?php 
	
header('Cache-control: no-cache');

$file = file_get_contents($_POST['site']);

print $file;
 ?>