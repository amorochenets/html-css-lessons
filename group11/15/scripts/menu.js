$(document).ready(function(){
				//button
				$('#b-sandwich__btn').click(function() {
					$('#b-sandwich__menu').animate({width: "toggle"}, 500);
					$('#b-sandwich__line').toggleClass('b-sandwich__line_close');
				});
			});