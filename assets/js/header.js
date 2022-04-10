




var mhd = document.getElementById("main-header");
var toggle = document.getElementById("mobile-toggle");
var canvas = document.getElementById("mobile-menu");
var dm = document.getElementById("desktop-menu");

var flag = 1;

canvas.innerHTML = dm.innerHTML;

function myFunction () {
	if (flag == 1) {
		jQuery(canvas).slideDown(400);	
		mhd.classList.add("mobile-main-header");
		flag = 0;	
	}
	else {
		jQuery(canvas).slideUp(400);
		mhd.classList.remove("mobile-main-header");
		flag = 1;	
	}
}

toggle.addEventListener('click', myFunction, false);









jQuery(document).ready(function($) {
	$("#mobile-toggle").addClass("cross_hamburger_menu");
	$('.cross_hamburger_menu').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('cross_hamburger_menu--toggled');
	});

	$('.toggle_all').on('click', function(e) {
		e.preventDefault();
		$('.cross_hamburger_menu').toggleClass('cross_hamburger_menu--toggled');
	});
});



