<?php /* Smarty version Smarty-3.1.18, created on 2016-03-13 10:46:22
         compiled from "templates/index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:69104931656e52df70a2e84-25578223%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '90093ad09988b466f409a1871733c5589014713e' => 
    array (
      0 => 'templates/index.tpl',
      1 => 1457862381,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '69104931656e52df70a2e84-25578223',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_56e52df711aef9_33687688',
  'variables' => 
  array (
    'title' => 0,
    'keywords' => 0,
    'menu' => 0,
    'filename' => 0,
    'text' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_56e52df711aef9_33687688')) {function content_56e52df711aef9_33687688($_smarty_tpl) {?>

<!DOCTYPE html>
<html>
   <head>
      <title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>
	  <meta charset="utf-8">
	  <meta name="keywords" content="<?php echo $_smarty_tpl->tpl_vars['keywords']->value;?>
">
	  <link rel="stylesheet" href="stylesheets/main.css">
	  
	<!--[if lt IE 9]>
		<link rel="stylesheet" href="stylesheets/ie.css">
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

   </head>
   <body>
		<div class="b-container">
			<div class="b-container__header">
				<header class="b-header">
					<div class="b-container__fixBlockWidth">
						<div class="b-header__logo">
							<div class="b-logo">
								<a href="#" class="b-logo__link"><img src="images/header/logo.png" alt="" class="b-logo__img"></a>
							</div>	
						</div>
						<div class="b-header__nav">
							<nav class="b-nav">
								<div class="b-nav__auth">
									<ul class="b-auth">
										<li class="b-auth__item"><a href="#" class="b-auth__link">log in</a></li>
										<li class="b-auth__item"><a href="#" class="b-auth__link">sign up</a></li>
									</ul>
								</div>
								<div class="b-nav__sandwich">
									<div class="b-sandwich" id="b-sandwich1">
										<a href="#" class="b-sandwich__btn" id="b-sandwich__btn">
											<span class="b-sandwich__line" id="b-sandwich__line"></span>
										</a>
										<div class="b-sandwich__menu" id="b-sandwich__menu">
											<ul class="b-menu">
												<?php  $_smarty_tpl->tpl_vars['text'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['text']->_loop = false;
 $_smarty_tpl->tpl_vars['filemane'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['menu']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['text']->key => $_smarty_tpl->tpl_vars['text']->value) {
$_smarty_tpl->tpl_vars['text']->_loop = true;
 $_smarty_tpl->tpl_vars['filemane']->value = $_smarty_tpl->tpl_vars['text']->key;
?>
													<li class="b-menu__item"><a href="<?php echo $_smarty_tpl->tpl_vars['filename']->value;?>
.html" class="b-menu__link"><?php echo $_smarty_tpl->tpl_vars['text']->value;?>
</a></li>
												<?php } ?>
											
											</ul>
										</div>
									</div>
								</div>
							</nav>
						</div>
						<div class="b-header__findRecipes">
							<div class="b-findRecipes">
								<div class="b-findRecipes__headingComment">Find your Favorite</div>
								<h1 class="b-findRecipes__heading">recipes</h1>
								<a href="#" class="b-findRecipes__ghostBtn">get started</a>
								<div class="b-findRecipes__comments">OR SEND US YOUR OWN RECIPES AND <a href="#" class="b-findRecipes__link">GET REWARDED!</a></div>
							</div>
						</div>
					</div>
				</header>
			</div>
			<div class="b-container__articles">
				<div class="b-articles">
					<div class="b-container__fixBlockWidth">
						<div class="b-articles__articlePreview b-articles__articlePreview_margin-left_0">
							<a href="#" class="b-articlePreview">
								<div class="b-articlePreview__img b-articlePreview__img_background_inspiredImg"></div>
								<h2 class="b-container__title b-container__title_underline_center">get inspired</h2>
								<div class="b-articlePreview__content">Lorem ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma.Aliquam erat volutpat.</div>
							</a>
						</div><div class="b-articles__articlePreview">
							<a href="#" class="b-articlePreview">
								<div class="b-articlePreview__img b-articlePreview__img_background_rewardedImg"></div>
								<h2 class="b-container__title  b-container__title_underline_center">get rewarded</h2>
								<div class="b-articlePreview__content">Lorem ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma.Aliquam erat volutpat.</div>
							</a>
						</div><div class="b-articles__articlePreview">
							<a href="#" class="b-articlePreview">
								<div class="b-articlePreview__img b-articlePreview__img_background_socialImg"></div>
								<h2 class="b-container__title b-container__title_underline_center">get social</h2>
								<div class="b-articlePreview__content">Lorem ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma.Aliquam erat volutpat.</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="b-container__intro">
				<div class="b-container__fixBlockWidth">
					<div class="b-intro clearfix">
						<h2 class="b-container__title b-container__title_underline_left">INTRODUCING THE FUDI APP</h2>
						<?php echo $_smarty_tpl->getSubTemplate ("templates/content.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

					</div>
				</div>
			</div>
			<div class="b-container__slider">
				<div class="b-slider" id="b-slider1">
					<div class="b-container__fixBlockWidth">
						<div class="b-slider__slide b-slider__slide_first b-slider__slide_current">
							<div class="b-slide">
								<img src="images/content/user1.png" class="b-slide__img" alt="">
								<div class="b-slide__text">"I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!"</div>
								<div class="b-author">- Michael Dawson, San Francisco, CA -</div>
							</div>
						</div>
						<div class="b-slider__slide b-slider__slide_off">
							<div class="b-slide">
								<img src="images/content/user1.png" class="b-slide__img" alt="">
								<div class="b-slide__text">"I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!"</div>
								<div class="b-author">- Michael Dawson, San Francisco, CA -</div>
							</div>
						</div>
						<div class="b-slider__slide b-slider__slide_off">
							<div class="b-slide">
								<img src="images/content/user1.png" class="b-slide__img" alt="">
								<div class="b-slide__text">"I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!"</div>
								<div class="b-author">- Michael Dawson, San Francisco, CA -</div>
							</div>
						</div>
						<div class="b-slider__controls">
							<div class="b-controls">
								<div class="b-controls__btn b-controls__btn_current"></div>
								<div class="b-controls__btn"></div>
								<div class="b-controls__btn"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="b-container__cuisinesCategories">
				<div class="b-cuisinesCategories">
					<div class="b-cuisinesCategories__title">
						<h2 class="b-container__title b-container__title_underline_center">BROWSE BY CUISINES</h2>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_italian">
							<div class="b-cuisine__recipesQty">327 Recipes</div>
							<h3 class="b-cuisine__heading">italian</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_indian">
							<div class="b-cuisine__recipesQty">856 Recipes</div>
							<h3 class="b-cuisine__heading">indian</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_french">
							<div class="b-cuisine__recipesQty">27 Recipes</div>
							<h3 class="b-cuisine__heading">french</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_steakhouse">
							<div class="b-cuisine__recipesQty">174 Recipes</div>
							<h3 class="b-cuisine__heading">steakhouse</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_seafood">
							<div class="b-cuisine__recipesQty">731 Recipes</div>
							<h3 class="b-cuisine__heading">seafood</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_sushi">
							<div class="b-cuisine__recipesQty">237 Recipes</div>
							<h3 class="b-cuisine__heading">sushi</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_mexican">
							<div class="b-cuisine__recipesQty">529 Recipes</div>
							<h3 class="b-cuisine__heading">mexican</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_chinese">
							<div class="b-cuisine__recipesQty">145 Recipes</div>
							<h3 class="b-cuisine__heading">chinese</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_pizza">
							<div class="b-cuisine__recipesQty">327 Recipes</div>
							<h3 class="b-cuisine__heading">pizza</h3>
						</a>
					</div>
					<div class="b-cuisinesCategories__cuisine">
						<a href="#" class="b-cuisine b-cuisine_background_american">
							<div class="b-cuisine__recipesQty">1,437 Recipes</div>
							<h3 class="b-cuisine__heading">american</h3>
						</a>
					</div>
				</div>
			</div>	
			<div class="b-container__statistics">
				<div class="b-statistics">
					<div class="b-container__fixBlockWidth">
						<div class="b-statistics__statisticsType">
							<div class="b-statisticsType">
								<div class="b-statisticsType__qty">23,567</div>
								<div class="b-statisticsType__description">Recipes Available</div>
							</div>
						</div>
						<div class="b-statistics__statisticsType">
							<div class="b-statisticsType">
								<div class="b-statisticsType__qty">431,729</div>
								<div class="b-statisticsType__description">Active Users</div>
							</div>
						</div>
						<div class="b-statistics__statisticsType">
							<div class="b-statisticsType">
								<div class="b-statisticsType__qty">892,173</div>
								<div class="b-statisticsType__description">Positive Reviews</div>
							</div>
						</div>
						<div class="b-statistics__statisticsType">
							<div class="b-statisticsType">
								<div class="b-statisticsType__qty">56,581</div>
								<div class="b-statisticsType__description">Photos & Videos</div>
							</div>
						</div>
						<div class="b-statistics__statisticsType">
							<div class="b-statisticsType">
								<div class="b-statisticsType__qty">3,182</div>
								<div class="b-statisticsType__description">Spices and Herbs</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="b-container__footer">
				<footer class="b-footer">
					<div class="b-container__fixBlockWidth">
						<div class="b-footer__copyright">&copy; 2014 Fudi. All Rights Reserved.</div>
					</div>
				</footer>
			</div>	
		</div>

		<script type='text/javascript' src="scripts/jquery-2.1.4.min.js"></script>
		<script type='text/javascript' src="scripts/menu.js"></script>
		
   </body>
</html><?php }} ?>
