ymaps.ready(init);
	function init(){ 
	    // Создание карты.    
	    var myMap = new ymaps.Map("map", {
	        // Координаты центра карты.
	        // Порядок по умолчанию: «широта, долгота».
	        // Чтобы не определять координаты центра карты вручную,
	        // воспользуйтесь инструментом Определение координат.
	        center: [55.725885, 37.646117],
	        // Уровень масштабирования. Допустимые значения:
	        // от 0 (весь мир) до 19.
	        zoom: 15,
	        controls: []
	    });

	   myMap.behaviors.disable('scrollZoom');
	   myMap.behaviors.disable('drag');
	   myMap.controls.add('zoomControl');

	   myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	               hintContent: 'Active-money',
	               balloonContent: 'Active-money'
	           }, {
	               // Опции.
	               // Необходимо указать данный тип макета.
	               iconLayout: 'default#image',
	               // Своё изображение иконки метки.
	               iconImageHref: 'img/pin.png',
	               // Размеры метки.
	               iconImageSize: [47, 47],
	               // Смещение левого верхнего угла иконки относительно
	               // её "ножки" (точки привязки).
	               iconImageOffset: [-5, -38]
	           }),
	   myMap.geoObjects
	           .add(myPlacemark)
	}





/*Маски для инпутов*/
jQuery(function($){
   $(".header-main_form__input-2").mask("+7 (999) 999-9999");
});

jQuery(function($){
   $("#quest").mask("+7 (999) 999-9999");
});

/*Отправка сообщений на почу и вывод модалки с благодарностью*/
$('.header-main_form',).submit(function (event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		$('.success').fadeIn();
		$(".header-main_form",).trigger("reset");
	});
	return false;
});

$('.modal',).submit(function (event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		$(".modal",).trigger("reset");
		$('.success').fadeIn();
	});
	return false;
});

$('.questions-form',).submit(function (event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		$('.modal').fadeOut();
		$('.success').fadeIn();
		$(".questions-form",).trigger("reset");
	});
	return false;
});

/*Открытие\закрытие модального окна*/
$(document).ready(function () {
	
	$('.show').on('click', function () {
		$('.overlay').fadeIn();
	});

	$('.close').on('click', function () {
		$('.overlay').fadeOut();
	});

	$('.close').on('click', function () {
		$('.success').fadeOut();
	});
});	

/*Показываем\скрываем сертификат*/
$(document).ready(function () {
	
	$('.advantages-cert_img').on('click', function () {
		$('.cert-overlay').fadeIn();
	});

	$('.cert-overlay').on('click', function () {
		$('.cert-overlay').fadeOut();
	});

});

/*Палавная прокрутка*/
$(document).ready(function(){

$('.header-arrow').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#about-title').offset().top}, 1000);
  e.preventDefault();
});

});

/*Убираем бг у видео при проигрывании*/
$('.about-video').on('playing', function () {
	$('.about-video').css('background-image', 'none');
});

/*Slick-slider*/

$(document).ready(function () {
	$('.slick-slider').slick({
		arrows: true,
		prevArrow: '<div class="slider-arrow slider-arrow-left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow-right"></div>',
	});
});