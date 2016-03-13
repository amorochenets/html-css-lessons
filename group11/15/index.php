<?
define("SMARTY_PATH", "class/Smarty-3.1.18/libs/");
include(SMARTY_PATH."Smarty.class.php");
$smarty = new Smarty();

$title = "Smarty template sample";
$keywords = "smarty, template, frontend";
$menu = array("about" => "about us","contacts" => "contact", "portfolio" => "Portfolio");

// передаём данные в смарти
$smarty->assign("title", $title);
$smarty->assign("keywords", $keywords);
$smarty->assign("menu", $menu);

// отображение шаблона смарти
$smarty->display("templates/index.tpl");
?>