<?
	print 'PHP Lesson';
	$univer_title = 'Univer Pulse';
	$subject = "$univer_title Backend intro";
	$teacher = 'Sasha';
	$hours = 4;
	$price = 800.60;
	$students = array("Sasha","Masha","Dasha","Vasya");
	$subjects = array('верстка' => 3000, 'програмимрование' => 3100);
	$students_str = '';
	$subjects_str = '';

	// $pic = img(/User/amorochenec/Pictures/Screen Shot 2016-03-05 at 10.19.50 AM.png);

	print '<pre>';
	print_r($students);
	print '</pre>';


$order_sum = 700;

if ($order_sum >= 500 && $order_sum <= 1000) {
	print "Discoutn delivery";
} elseif ($order_sum > 1000) {
		print "Free Delivery";
}


//циклы

for ($i=0; $i<count($students); $i++) { 
	if ($students_str) {
		$students_str .= ', ';
	}
	$students_str .= $students[$i];
}




?>

<h1><?=$subject?></h1><br>
Hours quantity: <?=$hours?><br>
Price: <?=$price?><br>
Teacher: <?=$teacher?><br>
Students: <?=$students_str?>

<?

foreach ($subjects as $title => $price) {
	$subjects_str .= "<br>$title - $price грн.";
}

?>
<br>Курсы:<?=$subjects_str?>
