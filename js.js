var $mostrarnav = $('.mostrarnav');
var $nav = $('nav');

$mostrarnav.on('click', function () {
	$nav.toggleClass('mostrar');
});