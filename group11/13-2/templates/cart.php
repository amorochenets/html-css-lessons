<?
header("Content-Type: text/html;charset=UTF-8");
$title = "Корзина";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title><?=$title?></title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/cart.css'>

	</head>
	<body>
		<div class='b-minicart' id='minicart1'>
			<div class='b-minicart__button'>Корзина
				<div class='b-minicart__quantity'></div>
				<div class='b-minicart__total'></div>
			</div>
			<div class='b-minicart__list'>
			<table class = 'b-goods b-goods_cart'>
				<tr class = 'b-good'>
					<td class = 'b-good__image-td'>
						<img src='' class='b-good__image'>
					</td>
					<td class = 'b-good__info'>
						<h3 class='b-good__name'></h3>
						<div class='b-good__price'></div>
						<form action='#' method='POST' class='b-order-form'>
							<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
							<input type='button' value = '+' class='b-order-form__plus'>
							<input type='button' value = '-' class='b-order-form__minus'>
							<input type='submit' value = 'OK' class='b-order-form__order'>
						</form>
					</td>
					<td class='b-good__delete-td'>
						<a href='#link-to-delete-good' class='b-good__delete'>X</a>
					</td>
				</tr>
				</table>
				<a href='#' class='b-minicart__order'>Заказать</a>
			</div>
		</div>
<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
		<table class = 'b-goods' id='goods1'>
			<tr class = 'b-good b-good_id_82'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_82.jpg' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Ролики DELL 1</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 1</div>
					<div class='b-good__price'>1000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
			<tr class = 'b-good b-good_id_83'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_83.jpg' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Ролики DELL 2</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 2</div>
					<div class='b-good__price'>2000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
			<tr class = 'b-good  b-good_id_84'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_84.jpg' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Ролики DELL 3</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 3</div>
					<div class='b-good__price'>3000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
			<tr class = 'b-good b-good_id_85'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_85.jpg' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Ролики DELL 4</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 4</div>
					<div class='b-good__price'>4000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
		</table>
		<script src="../scripts/jquery-2.1.4.js"></script>
		<script src="../scripts/jquery.cookie.js"></script>
		<script src="../scripts/component.js"></script>
		<script src="../scripts/settings.js"></script>
		<script src="../scripts/init_settings.js"></script>
		<script src="../scripts/cart.js"></script>
		<script>
		var f1 = new Cart('#goods1','#minicart1');
		</script>
	</body>
	
</html>