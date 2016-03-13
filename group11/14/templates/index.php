<?
$title = "receipt";
//имя файла (страница) => текст ссылки
$menu_data = array("about" => "about us","contacts" => "contact", "portfolio" => "Portfolio");

function create_menu($aMenu, $sCurrent_filename, $sUl_class, $sLi_class, $sA_class) {
	
	$menu = "<ul class='$sUl_class'>";
	foreach ($aMenu as $filename => $text) {
		$menu .= "<li class='$sLi_class'><a href='index.php?file=$filename' class='$sA_class'>$text</a></li>";
	}
	$menu .= "</ul>"; 
	return $menu;
}


include("index2.html");
?>