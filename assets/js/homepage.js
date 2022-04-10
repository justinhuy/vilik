











var scroll_friction = 1 / 15;


var _about = document.getElementById("about");
var _artwork = _about.getElementsByClassName("artwork")[0];
var _artworkValue = 0;
var _artworkAccm = 0;

var _tree = document.getElementById("tree");


var _intro = document.getElementById("intro");
var _bridge = document.getElementById("bridge");
var _introValue = 0;
var _introAccm = 0;

/*---------------------------*/

$(window).on('scroll', function(e) {
	var scrollPosition = $(this).scrollTop();
	
	_artworkValue = getVal(_artwork, scrollPosition);
	
	_introValue = getVal(_intro, scrollPosition);
	
});



function getVal(el, scrollPos) {
	var _distance = scrollPos - $(el).offset().top;	
	if (_distance > 200) {
		_distance = 200;
	} 
	else if (_distance < -200) {
		_distance = -200;
	}
	
	return (20 * _distance) / 100;		
}







function animationCall() {
	
	_artworkAccm = _artworkAccm + (_artworkValue - _artworkAccm) * scroll_friction/2;				
	animateTree(_tree, _artworkAccm);	
	
	_introAccm = _introAccm + (_introValue - _introAccm) * scroll_friction;	
	animateY(_bridge, _introAccm);
	
	window.requestAnimationFrame(animationCall);
}


animationCall();







function animateY (el, _artworkAccm) {	
	var vy = _artworkAccm*4;	
	if (vy < 0) {
		vy = 0;
	}
	translate = 'translateY(' + vy +'px)';
	
	$(el).css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});		
}



function animateTree (el, _artworkAccm) {
	var vy = _artworkAccm*1;	
	var _deg = vy/2;
	if (_deg < 0) {
		_deg = 0;	
	}	
	
	_string = 'rotate(' + _deg +'deg)';
	
	
	$(el).css({
		'-webit-transform': _string,		
		'-moz-transform': _string,
		'transform': _string
	});	
}






















var oldScrollY = 0;
var newScrollY = 0;
var _distance;


var firstMouseX = 0;
var oldMouseX = 0;
var newMouseX = 0;



































/*---------------------------------------------------*/


/*
gsap.registerPlugin(ScrollTrigger);
let speed = 100;


let scene1 = gsap.timeline();
ScrollTrigger.create({
	animation: scene1,
	trigger: ".scrollElement",
	start: "top top",
	end: "45% 100%",
	scrub: 3,
});


scene1.to("#intro #bridge", { y: 3 * speed, ease: "power1.in" }, 0)

scene1.to("#intro .buildings-2", { y: -1 * speed, ease: "power1.in" }, 0)
scene1.to("#intro .buildings-3", { y: -1.5 * speed, ease: "power1.in" }, 0)
*/




/* Window Sky  */
/*

let window_sky = gsap.timeline();
ScrollTrigger.create({
	animation: window_sky,
	trigger: ".scrollElement",
	start: "top top",
	end: "70% 100%",
	scrub: 3,
});


window_sky.to("#window_1_sky", { attr: { cy: "300" } }, 0.00)


window_sky.to("#window_1_sky stop:nth-child(1)", { attr: { "stop-color": "#311C88" } }, 0.00)
window_sky.to("#window_1_sky stop:nth-child(1)", { attr: { offset: "0.1" } }, 0.00)
window_sky.to("#window_1_sky stop:nth-child(2)", { attr: { "stop-color": "#200840" } }, 0.00)




*/












var oldScrollY = 0;
var newScrollY = 0;
var _distance;


/* Decor 2 Declacration */

var _OriginY = _artwork.offsetTop;
var _OldPositionY = _artwork.offsetTop;
var _NewPositionY; 


var rect = _about.getBoundingClientRect();



window.addEventListener("scroll", (event) => {
	
	let scroll = this.scrollY;
	
	
	
	
	
	if (this.scrollY >= rect.top) {	
	/*
		_tree.setAttribute("class", "waved");
		_tree.style.animationPlayState = "running";
	*/
	}	
	else {
		/*_tree.style.animationPlayState = "paused";*/
	}
	
	
});




























window.addEventListener("resize", onResizeFunction);

window.addEventListener("load", onLoadFunction);

function onLoadFunction(e){
	onResizeFunction();
	window.addEventListener("resize", onResizeFunction);
}


function onResizeFunction (e){	
	var _width = window.innerWidth;	
	if (_width >= 992) {
		
	} 
	else {
		
	}
}









window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}






















