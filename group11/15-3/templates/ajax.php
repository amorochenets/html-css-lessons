<?
//include("calc.php");

header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
	</head>
	<body>

		<form action="ajax.php" method="POST" 		class='b-calc' id='calc1'>
			<input type='text' name='a' 	class='b-calc__a' value='<?= $a?>'> + 
			<input type='text' name='b' 	class='b-calc__b' value='<?= $b?>'>
			<input type='submit' value='=' 	class='b-calc__count'>
			<span 							class='b-calc__result'><?= $result?></span>
		</form>
	
	
		
	</body>
</html>