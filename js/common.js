$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


//кнопка sandwich
$(".sandwich_mobile").click(function() {
	if ($(".menu-mobile").is(":hidden")) {
		$(".menu-mobile").slideDown(200);
		$(this).addClass("active");
		$("body").addClass("body_noscroll");
		$(".header").addClass("active");
	} else {
		$(".menu-mobile").slideUp(200);
		$(this).removeClass("active");
		$("body").removeClass("body_noscroll");
		$(".header").removeClass("active");
	}
});


$(".menu__catalog > a").click(function(e) {
	e.preventDefault();
});
$(".menu__catalog > a").click(function() {
	if ($(".menu__dropdown").is(":hidden")) {
		$(".menu__dropdown").slideDown(200);
		$(this).parent().addClass("active");
		$(".menu__overlay").fadeIn(200);
	} else {
		$(".menu__dropdown").slideUp(200);
		$(this).parent().removeClass("active");
		$(".menu__overlay").fadeOut(200);
	}
});
$(".menu__overlay, .menu__close").click(function() {
	$(".menu__dropdown").slideUp(200);
	$(".menu > li").removeClass("active");
	$(".menu__overlay").fadeOut(200);
});


$(".navigation__haschild > a").click(function(e) {
	e.preventDefault();
	$(this).parent().siblings().find("ul").slideUp(200);
	$(this).parent().siblings().removeClass("active");
	$(this).siblings("ul").slideToggle(200);
	$(this).parent().toggleClass("active");
});

$(".menu__haschild > a").click(function(e) {
	e.preventDefault();
	$(this).parent().siblings().find("ul").slideUp(200);
	$(this).parent().siblings().removeClass("active");
	$(this).siblings("ul").slideToggle(200);
	$(this).parent().toggleClass("active");
});

$(".item-dropdown_location .item-dropdown__value").click(function(e) {
	e.preventDefault();
	$(".item-dropdown_location .item-dropdown__modal").fadeIn(200);
});

$(".close-location-modal").click(function(e) {
	e.preventDefault();
	$(".item-dropdown_location .item-dropdown__modal").fadeOut(200);
});


$(document).mouseup(function (e) {
    var modalLocation = $(".item-dropdown__modal");
    if (modalLocation.has(e.target).length === 0){
		modalLocation.fadeOut(200);
    }
  });

$(".btn-location-popup").click(function(e) {
	e.preventDefault();
	$(".item-dropdown_location .item-dropdown__popup").fadeIn(200);
	$(".item-dropdown_location .item-dropdown__overlay").fadeIn(200);
	$("body").addClass("body_noscroll");
	$(".item-dropdown_location .item-dropdown__modal").fadeOut(200);
});

$(".item-dropdown__overlay, .item-dropdown__close").click(function(e) {
	e.preventDefault();
	$(".item-dropdown__popup").fadeOut(200);
	$(".item-dropdown__overlay").fadeOut(200);
	$(".item-dropdown__modal").fadeOut(200);
	$("body").removeClass("body_noscroll");
});

	if ($('#time-picker').length > 0) {
		const elem = document.getElementById('time-picker');
		const picker = new Datepicker(elem, {
			format: 'dd/mm/yyyy',
			language: 'ru',
			autohide: true,
		}); 
		
	}

	$(".dropdown-about__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".dropdown-about").removeClass("active");
		$(this).parent().siblings(".dropdown-about").find(".dropdown-about__content").slideUp(200);
	  });

	  $(".unit-dropdown__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".unit-dropdown").removeClass("active");
		$(this).parent().siblings(".unit-dropdown").find(".unit-dropdown__content").slideUp(200);
	  });

	//слайдер

	$('.billbord__slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		fade: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,	  
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
	});

	$('.slider-marquee').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 16000,
        autoplay: true,
		variableWidth: true,
        autoplaySpeed: 0, 
        cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16669 20C4.16669 12.5361 4.16669 8.80414 6.48542 6.4854C8.80416 4.16666 12.5361 4.16666 20 4.16666C27.4639 4.16666 31.1959 4.16666 33.5146 6.4854C35.8334 8.80414 35.8334 12.5361 35.8334 20C35.8334 27.4639 35.8334 31.1959 33.5146 33.5146C31.1959 35.8333 27.4639 35.8333 20 35.8333C12.5361 35.8333 8.80416 35.8333 6.48542 33.5146C4.16669 31.1959 4.16669 27.4639 4.16669 20Z" stroke="#02080A" stroke-width="1.5"/><path d="M23.3334 28.3333L17.2875 21.0412C16.8736 20.5419 16.6667 20.2923 16.6667 20C16.6667 19.7077 16.8736 19.4581 17.2875 18.9588L23.3334 11.6667" stroke="#02080A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16669 20C4.16669 12.5361 4.16669 8.80414 6.48542 6.4854C8.80416 4.16666 12.5361 4.16666 20 4.16666C27.4639 4.16666 31.1959 4.16666 33.5146 6.4854C35.8334 8.80414 35.8334 12.5361 35.8334 20C35.8334 27.4639 35.8334 31.1959 33.5146 33.5146C31.1959 35.8333 27.4639 35.8333 20 35.8333C12.5361 35.8333 8.80416 35.8333 6.48542 33.5146C4.16669 31.1959 4.16669 27.4639 4.16669 20Z" stroke="#02080A" stroke-width="1.5"/><path d="M16.6667 28.3333L22.7125 21.0412C23.1264 20.5419 23.3334 20.2923 23.3334 20C23.3334 19.7077 23.1264 19.4581 22.7125 18.9588L16.6667 11.6667" stroke="#02080A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><div/>',
	});
	

	$('.slider-catalog').each(function(index, element) {
		
	
		// Инициализируем слайдер
		$(element).slick({
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
				]
			});

		// Добавляем HTML-элементы для нумерации и прогресс-бара
		$(element).append(`
			<div class="slider-info">
				<span class="slider-counter">01/10</span>
				<div class="slider-progress">
					<div class="slider-progress-bar"></div>
				</div>
			</div>
		`);
	
		// Обновление нумерации и прогресс-бара при смене слайда
		$(element).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var currentIndex = nextSlide + 1;
			var slideCount = slick.slideCount;
	
			// Обновляем нумерацию
			$(element).find('.slider-counter').text(('0' + currentIndex).slice(-2));
	
			// Обновляем прогресс-бар
			var progressPercent = (currentIndex / slideCount) * 100;
			$(element).find('.slider-progress-bar').css('width', progressPercent + '%');
		});
	
		// Инициализация прогресс-бара и нумерации для первого слайда
		$(element).trigger('beforeChange', [$(element).slick('getSlick'), 0, 0]);
	});

	$('.slider-steps').each(function(index, element) {
		
	
		// Инициализируем слайдер
		$(element).slick({
			arrows: false,
			dots: false,
			infinite: true,
			fade: true,
			touchThreshold: 1000,
			slidesToShow: 1,
			asNavFor: '.slider-info-steps',
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows: true,
					}
				}
				]
			});

		// Добавляем HTML-элементы для нумерации и прогресс-бара
		$(element).append(`
			<div class="slider-info">
				<span class="slider-counter">01/10</span>
				<div class="slider-progress">
					<div class="slider-progress-bar"></div>
				</div>
			</div>
		`);
	
		// Обновление нумерации и прогресс-бара при смене слайда
		$(element).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var currentIndex = nextSlide + 1;
			var slideCount = slick.slideCount;
	
			// Обновляем нумерацию
			$(element).find('.slider-counter').text(('0' + currentIndex).slice(-2));
	
			// Обновляем прогресс-бар
			var progressPercent = (currentIndex / slideCount) * 100;
			$(element).find('.slider-progress-bar').css('width', progressPercent + '%');
		});
	
		// Инициализация прогресс-бара и нумерации для первого слайда
		$(element).trigger('beforeChange', [$(element).slick('getSlick'), 0, 0]);
	});

	$('.slider-info-steps').slick({
		arrows: true,
		dots: false,
		infinite: true,
		fade: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-steps',
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
	});

	$('.slider-recommendations').each(function(index, element) {
		
	
		// Инициализируем слайдер
		$(element).slick({
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
				]
			});

		// Добавляем HTML-элементы для нумерации и прогресс-бара
		$(element).append(`
			<div class="slider-info">
				<span class="slider-counter">01/10</span>
				<div class="slider-progress">
					<div class="slider-progress-bar"></div>
				</div>
			</div>
		`);
	
		// Обновление нумерации и прогресс-бара при смене слайда
		$(element).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var currentIndex = nextSlide + 1;
			var slideCount = slick.slideCount;
	
			// Обновляем нумерацию
			$(element).find('.slider-counter').text(('0' + currentIndex).slice(-2));
	
			// Обновляем прогресс-бар
			var progressPercent = (currentIndex / slideCount) * 100;
			$(element).find('.slider-progress-bar').css('width', progressPercent + '%');
		});
	
		// Инициализация прогресс-бара и нумерации для первого слайда
		$(element).trigger('beforeChange', [$(element).slick('getSlick'), 0, 0]);
	});

	$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		touchThreshold: 1000,
		asNavFor: '.slider-for',
		slidesToShow: 6,
		slidesToScroll: 1, 
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
	});

	$('.slider-for').slick({
		arrows: true,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		touchThreshold: 1000,
		asNavFor: '.slider-nav',
		slidesToShow: 1,
		slidesToScroll: 1, 
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
	});

	$('.slider-list').each(function(index, element) {
	
		// Инициализируем слайдер
		$(element).slick({
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-long-arrow-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-long-arrow-right"></i><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
				]
			});

		// Добавляем HTML-элементы для нумерации и прогресс-бара
		$(element).append(`
			<div class="slider-info">
				<span class="slider-counter">01/10</span>
				<div class="slider-progress">
					<div class="slider-progress-bar"></div>
				</div>
			</div>
		`);
	
		// Обновление нумерации и прогресс-бара при смене слайда
		$(element).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var currentIndex = nextSlide + 1;
			var slideCount = slick.slideCount;
	
			// Обновляем нумерацию
			$(element).find('.slider-counter').text(('0' + currentIndex).slice(-2));
	
			// Обновляем прогресс-бар
			var progressPercent = (currentIndex / slideCount) * 100;
			$(element).find('.slider-progress-bar').css('width', progressPercent + '%');
		});
	
		// Инициализация прогресс-бара и нумерации для первого слайда
		$(element).trigger('beforeChange', [$(element).slick('getSlick'), 0, 0]);
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

