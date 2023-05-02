$(document).ready(function() { 
	
	/****  Lazy load  ****/
	$(function() {
		$("img.lazy").show().lazyload({effect:'fadeIn', threshold:20,  failure_limit : 14});
	});
	
	$(".newsmorephoto a[rel^='lightbox-'], .content a[rel^='lightbox-']").attr('data-fancybox-group', 'gal1').attr('class', 'fancybox');
	
	/****  Fancybox  ****/	
	$(".fancybox").fancybox({	
		padding : 0,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		helpers		: {
			title	: { type : 'over' }
		}
		
	});	
	
	$('.fancybox-media').fancybox({
		    width       : 800,
		    height      : 450,
		    aspectRatio : true,
		padding : 0,
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

	
	/**** Menu Scroll   ****/
	$(window).on("scroll", function() {
			if ($(window).width() > 750) {	
				var fromTop = $(window).scrollTop();
				$("body").toggleClass("stick", (fromTop > 0));
			}

	});
	
	
	$(window).on('resize', function(){
		if ( $("body").is( "#Home" ) ) {
			if ($(window).width() < 750) {	
				var fromTop = $(window).scrollTop();
				$("body").removeClass("stick");
			} else {	
				var fromTop = $(window).scrollTop();
				$("body").toggleClass("stick", (fromTop > 0));
			}
		} else if ( $("body").is( "#Inner" ) ) {
			if ($(window).width() < 750) {	
				var fromTop = $(window).scrollTop();
				$("body").removeClass("stick");
			}  else {	
				var fromTop = $(window).scrollTop();
				$("body").toggleClass("stick", (fromTop > 0));
			}
		}
	});
	
	
	/**** scroll to top action ***/		
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	
	
	/**** Bootstrap Carousel ***/	
	$('#myCarousel, #news-right-carusel').carousel({
	interval: 10000
	});
	
	$('#myCarousel').on('slid.bs.carousel', function() {
		var str = $('#myCarousel h3').text();
		str = $('#myCarousel .item.active').data('caruselCategory');
		$('#myCarousel h3').text(str);
	});	
	
	$('#myCarousel').on('slide.bs.carousel', function() {
		
		var nextImage0 = $('#myCarousel .item.active').next('.item').find('img').eq(0);
		var nextImage1 = $('#myCarousel .item.active').next('.item').find('img').eq(1);
		var nextImage2 = $('#myCarousel .item.active').next('.item').find('img').eq(2);
		
		nextImage0.attr('src', nextImage0.data('original'));	
		nextImage1.attr('src', nextImage1.data('original'));	
		nextImage2.attr('src', nextImage2.data('original'));
		
	});
	
	$('#myCarousel a[data-slide="prev"]').click(function() {
		var nextImage3 = $('#myCarousel .item').last('.item').find('img').eq(0);
		var nextImage4 = $('#myCarousel .item').last('.item').find('img').eq(1);
		var nextImage5 = $('#myCarousel .item').last('.item').find('img').eq(2);
		
		nextImage3.attr('src', nextImage3.data('original'));	
		nextImage4.attr('src', nextImage4.data('original'));	
		nextImage5.attr('src', nextImage5.data('original'));		
	});
		

	$('[id^=carousel-selector-]').click( function(){
	  $('[id^=carousel-selector-]').removeClass('selected');
	  $(this).addClass('selected');
	});

	$('#news-right-carusel').on('slid.bs.carousel', function (e) {	
	  var id = $('.carousel-item.active').data('slide-number');
	  id = parseInt(id);
	  $('[id^=carousel-selector-]').removeClass('selected');
	  $('[id=carousel-selector-'+id+']').addClass('selected');

	});	


	var path = $(location).attr('pathname');
 	var hash = window.location.hash;
	if (hash) {
		$('#stabs a[href="'+path+''+hash+'"]').tab('show');
		$('html, body').animate({scrollTop:0}, 'slow');
		};

	
	$('#stabs a').click(function (e) {
		$(this).tab('show');
		var scrollmem = $('body').scrollTop();
		window.location.hash = this.hash;
		$('html,body').scrollTop(scrollmem);
	});

	
	$('.childstabs a').click(function (e) {
	  	e.preventDefault();
		e.stopImmediatePropagation();
	  	$(this).tab('show');
	});


	$('.gototab').click(function() {
		var tabhref = $(this).attr('href');
	  $('#stabs a[href="'+tabhref+'"]').tab('show');
	});	
	

	$('.panel-group.accordion').on('shown.bs.collapse', function () {		
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
			if ($(window).width() < 750) {
				$('html,body').animate({
					scrollTop: $('.panel-collapse.in').siblings('a').offset().top -5
				}, 500); 
			} else {
				$('html,body').animate({
					 scrollTop: $('.panel-collapse.in').siblings('a').offset().top -74
				}, 500);
			}
        }		
	});		
	
	//Bootstrap 5
	$('#accordionExample').on('shown.bs.collapse', function () {		
        var offset = $('.accordion-item > .accordion-collapse.show').offset();
        if(offset) {
			if ($(window).width() < 750) {
				$('html,body').animate({
					scrollTop: $('.accordion-collapse.show').siblings('h2').offset().top -5
				}, 500); 
			} else {
				$('html,body').animate({
					 scrollTop: $('.accordion-collapse.show').siblings('h2').offset().top -74
				}, 500);
			}
        }		
	});	

	$(function() {
	  var elementId =  window.location.hash;
	  if(window.location.hash != ''){
	  $("#inner-accordion .in").removeClass("in");
	  $(elementId).addClass("in");
	  $(elementId).parent().find('a').removeClass("collapsed");
	   var offset = $('.panel.panel-default > .panel-collapse.in').offset();
	        if(offset) {
				if ($(window).width() < 750) {
					$('html,body').animate({
						scrollTop: $('.panel-collapse.in').siblings('a').offset().top -5
					}, 500); 
				} else {
					$('html,body').animate({
						 scrollTop: $('.panel-collapse.in').siblings('a').offset().top -74
					}, 500);
				}
	        }	
	}
	});

	//Bootstrap 5
	$(function() {
	  var elementId =  window.location.hash;
	  if(window.location.hash != ''){
	  $("#accordionExample .show").removeClass("show");
	  $(elementId).addClass("show");
	  //$(elementId).parent().find('h2').removeClass("collapsed");
	   var offset = $('.accordion-item > .accordion-collapse.show').offset();
	        if(offset) {
				if ($(window).width() < 750) {
					$('html,body').animate({
						scrollTop: $('.accordion-collapse.show').siblings('h2').offset().top -5
					}, 500); 
				} else {
					$('html,body').animate({
						 scrollTop: $('.accordion-collapse.show').siblings('h2').offset().top -74
					}, 500);
				}
	        }	
	}
	});

	

		//Hash collapse click to back
	$(function () {
		var path = $(location).attr('pathname');
	 	var hash = window.location.hash;
		if (hash) {
			$('#inner-accordion a[href="'+path+''+hash+'"]').collapse('show');
			};
			$('#inner-accordion a').click(function (e) {
			window.location.hash = this.hash;
		});
	});	
	
	//Bootstrap 5
	/*$(function () {
		var path = $(location).attr('pathname');
	 	var hash = window.location.hash;
		if (hash) {
			$('#accordionExample button[data-bs-target="'+path+''+hash+'"]').collapse('show');
			};
			$('#accordionExample button').click(function (e) {
			window.location.hash = this.hash;
		});
	});	*/
	if (location.hash !== null && location.hash !== "") {
            $(location.hash + ".collapse").collapse("show");
        }
	
	/*
	* 
	* jQuery UI
	* Science Labs Carusel
	*
	*/	
	$(function(){
		// Accordion
		$("#acc1, #acc2, #acc3, #acc4, #acc5, #acc6, #acc7").accordion({
			collapsible: true,
			active: false,
			header: "h3",
			navigation: true,
			heightStyle: "content", 
			activate: function (event, ui) {
				var scrollTop = $(".accordion").scrollTop();
				if(!ui.newHeader.length) return;
				var top = $(ui.newHeader).offset().top;
				
				if ($(window).width() < 750) {	
					$("html,body").animate({
						scrollTop: scrollTop + top - 5
					}, "fast");
				} else {	
					$("html,body").animate({
						scrollTop: scrollTop + top - 80
					}, "fast");
				}	
				

			}			
		});
	});

	

	/**** Main Slider -=Start=-***/
    var time = 7; // time in seconds

    var $progressBar,
          $bar, 
          $elem, 
          isPause, 
          tick,
          percentTime;

        //Init the carousel
        $("#owl-demo").owlCarousel({
          slideSpeed :300,
          paginationSpeed : 300,
          singleItem : true,	  
          afterInit : progressBar,
          afterMove : moved,
          startDragging : pauseOnDragging,
		  addClassActive:true,
		  lazyLoad : true,
		  responsive: true,
		  //autoHeight : true,
		  transitionStyle : "fade"

        });
		
	// Custom Navigation Events
	$(".owl-next").click(function(){
		$("#owl-demo").trigger('owl.next');
	})
	  
	$(".owl-prev").click(function(){
		$("#owl-demo").trigger('owl.prev');
	})		

	//Init progressBar where elem is $("#owl-demo")
	function progressBar(elem){
		var color = $(' .active .item .block div').attr("class");
		$('#bar').removeClass().addClass(color);
		$('#owl-demo .owl-pagination .owl-page span').removeClass().addClass(color);
		  
		 $elem = elem;
		 //build progress bar elements
		 buildProgressBar();
		 //start counting
		 start();
	}

	//create div#progressBar and div#bar then prepend to $("#owl-demo")
	function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar);
		$elem.append($progressBar);
	}

	function start() {
	  //reset timer
	  percentTime = 0;
	  isPause = false;
	  //run interval every 0.01 second
	  tick = setInterval(interval, 10);
	};

	function interval() {
	  if(isPause === false){
		percentTime += 1 / time;
		$bar.css({
		   width: percentTime+"%"
		 });
		//if percentTime is equal or greater than 100
		if(percentTime >= 100){
		  //slide to next item 
		  $elem.trigger('owl.next')
		}
	  }
	}

	//pause while dragging 
	function pauseOnDragging(){
	  isPause = true;
	}

	//moved callback
	function moved(){
	
	  var color = $(' .active .item .block div').attr("class");
	  $('#bar').removeClass().addClass(color);
	  $('#owl-demo .owl-pagination .owl-page span').removeClass().addClass(color);
	  //alert(color);
	  
	  //clear interval
	  clearTimeout(tick);
	  //start again
	  start();
	}

	//uncomment this to make pause on mouseover 
	// $elem.on('mouseover',function(){
	//   isPause = true;
	// })
	// $elem.on('mouseout',function(){
	//   isPause = false;
	// })
	/**** Main Slider -=End=-***/

	
	
	/**** Latest News Rotator -=Start=-***/
  $("#latest-news-carusel").owlCarousel({
	
	  autoPlay: true,
	  slideSpeed : 300,
	  //paginationSpeed : 400,
	  singleItem:true,
	  pagination:false,
	  transitionStyle : "fade" 
 
	  // "singleItem:true" is a shortcut for:
	  // items : 1, 
	  // itemsDesktop : false,
	  // itemsDesktopSmall : false,
	  // itemsTablet: false,
	  // itemsMobile : false
 
	});
	/**** Latest News Rotator -=End=-***/

	/**** Events Rotator -=Start=-***/
	$("#events-carusel").owlCarousel({
		autoPlay: true,
		slideSpeed : 300,
		//paginationSpeed : 400,
		singleItem:true,
		pagination:false,
		transitionStyle : "fade"
	});
	/**** Events Rotator -=End=-***/	
	new UISearch( document.getElementById( 'sb-search' ) );
	
	

});

			
/*Search start*/	
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';
	
	// EventListener | @jon_neal | //github.com/jonathantneal/EventListener
	!window.addEventListener && window.Element && (function () {
	   function addToPrototype(name, method) {
		  Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
	   }
	 
	   var registry = [];
	 
	   addToPrototype("addEventListener", function (type, listener) {
		  var target = this;
	 
		  registry.unshift({
			 __listener: function (event) {
				event.currentTarget = target;
				event.pageX = event.clientX + document.documentElement.scrollLeft;
				event.pageY = event.clientY + document.documentElement.scrollTop;
				event.preventDefault = function () { event.returnValue = false };
				event.relatedTarget = event.fromElement || null;
				event.stopPropagation = function () { event.cancelBubble = true };
				event.relatedTarget = event.fromElement || null;
				event.target = event.srcElement || target;
				event.timeStamp = +new Date;
	 
				listener.call(target, event);
			 },
			 listener: listener,
			 target: target,
			 type: type
		  });
	 
		  this.attachEvent("on" + type, registry[0].__listener);
	   });
	 
	   addToPrototype("removeEventListener", function (type, listener) {
		  for (var index = 0, length = registry.length; index < length; ++index) {
			 if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
			 }
		  }
	   });
	 
	   addToPrototype("dispatchEvent", function (eventObject) {
		  try {
			 return this.fireEvent("on" + eventObject.type, eventObject);
		  } catch (error) {
			 for (var index = 0, length = registry.length; index < length; ++index) {
				if (registry[index].target == this && registry[index].type == eventObject.type) {
				   registry[index].call(this, eventObject);
				}
			 }
		  }
	   });
	})();

	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	
	// http://www.jonathantneal.com/blog/polyfills-and-prototypes/
	!String.prototype.trim && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	});

	function UISearch( el, options ) {	
		this.el = el;
		this.inputEl = el.querySelector( 'form > input.sb-search-input' );
		this._initEvents();
	}

	UISearch.prototype = {
		_initEvents : function() {
			var self = this,
				initSearchFn = function( ev ) {
					ev.stopPropagation();
					// trim its value
					self.inputEl.value = self.inputEl.value.trim();
					
					if( !classie.has( self.el, 'sb-search-open' ) ) { // open it
						ev.preventDefault();
						self.open();
					}
					else if( classie.has( self.el, 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
						ev.preventDefault();
						self.close();
					}
				}

			this.el.addEventListener( 'click', initSearchFn );
			this.el.addEventListener( 'touchstart', initSearchFn );
			this.inputEl.addEventListener( 'click', function( ev ) { ev.stopPropagation(); });
			this.inputEl.addEventListener( 'touchstart', function( ev ) { ev.stopPropagation(); } );
		},
		open : function() {
			var self = this;
			classie.add( this.el, 'sb-search-open' );
			// focus the input
			if( !mobilecheck() ) {
				this.inputEl.focus();
			}
			// close the search input if body is clicked
			var bodyFn = function( ev ) {
				self.close();
				this.removeEventListener( 'click', bodyFn );
				this.removeEventListener( 'touchstart', bodyFn );
			};
			document.addEventListener( 'click', bodyFn );
			document.addEventListener( 'touchstart', bodyFn );
		},
		close : function() {
			this.inputEl.blur();
			classie.remove( this.el, 'sb-search-open' );
		}
	}

	// add to global namespace
	window.UISearch = UISearch;

} )( window );
/*Search end*/

// GLOBAL
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*
* Symbolset
* www.symbolset.com
* Copyright В© 2012 Oak Studios LLC
* 
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.)/.test(navigator.userAgent)) {

  var ss_set={'github octocat':'\uF671','googleplus':'\uF613','foursquare':'\uF690','thumbs up':'\uD83D\uDC4D','wordpress':'\uF621','posterous':'\uF623','pinterest':'\uF650','instagram':'\uF641','linkedin':'\uF612','thumbsup':'\uD83D\uDC4D','dribbble':'\uF660','facebook':'\uF610','envelope':'\u2709','rss feed':'\uDB8C\uDC20','behance':'\uF661','twitter':'\uF611','octocat':'\uF671','youtube':'\uF630','google+':'\uF613','spotify':'\uF6B1','approve':'\uD83D\uDC4D','last fm':'\uF6B2','blogger':'\uF622','paypal':'\uF680','flickr':'\uF640','github':'\uF670','tumblr':'\uF620','lastfm':'\uF6B2','email':'\u2709','vimeo':'\uF631','skype':'\uF6A0','mail':'\u2709','like':'\uD83D\uDC4D','rdio':'\uF6B0','rss':'\uE310'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set; 
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };
  
  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})
    
    var ss_legacy = function(node) {
      
      if (!node instanceof Object) return false;
      
      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };
      
      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }
        
    };
    
    var ss_getElementsByClassName = function(node, classname) {
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };
    
    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) { 
        return ss_icons[v.toLowerCase()];
      });
    };
    
    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });
  
  }
  
};

/*Function: FunctionHandler() // Author: Aaron Gustafson (aaron at easy-designs dot net) // Creation Date: 2009-04-02; Version: 0.2; Homepage: http://github.com/easy-designs/FunctionHandler.js; License: MIT License (see homepage)*/
(function(){var FunctionHandler={version:"0.2"},pages={};function initialize(){var body_id=$("body").attr("id");if(body_id!=false&&typeof(pages[body_id])!="undefined"){run(pages[body_id])}if(typeof(pages["*"])!="undefined"){run(pages["*"])}}$(document).ready(initialize);FunctionHandler.register=function(id,callback){if((typeof(id)!="string"&&!(id instanceof Array))||typeof(callback)!="function"){return false}if(typeof(id)=="string"&&id.indexOf(", ")!=-1){id=id.split(", ")}if(id instanceof Array){for(var i=id.length-1;i>=0;i--){add(id[i],callback)}}else{add(id,callback)}return true};function add(id,callback){if(typeof(pages[id])=="undefined"){pages[id]=[]}pages[id].push(callback)}function run(arr){if(!(arr instanceof Array)){return}for(var i=arr.length-1;i>=0;i--){arr[i]()}}window.FunctionHandler=FunctionHandler})();

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery);

//NAV
FunctionHandler.register( ['*'], function(){

	if (screen.width > 767) {
		// Main Nav Drawers
		var m_univercity = $('#m_univercity');
		var m_enter = $('#m_enter');
		var m_science = $('#m_science');
		var m_resources = $('#m_resources');
		var m_departments = $('#m_departments');
		var m_student = $('#m_student');
		var alldrawers = $('#m_univercity,#m_enter,#m_science,#m_resources,#m_departments,#m_student');
		var allnav = $('#univercity,#enter,#science,#resources,#departments,#student');
		//Univercity
		$('#univercity').hoverIntent(function(){allnav.removeClass('active');$(this).addClass('active');m_univercity.fadeIn(200);$('#m_enter,#m_science,#m_resources,#m_departments,#m_student').fadeOut(200);},function(){});
		// Enter
		$('#enter').hoverIntent(function(){allnav.removeClass('active');$(this).addClass('active');m_enter.fadeIn(200);$('#m_univercity,#m_science,#m_resources,#m_departments,#m_student').fadeOut(200);},function(){});
		// Science
		$('#science').hoverIntent(function(){allnav.removeClass('active');$(this).addClass('active');m_science.fadeIn(200);$('#m_univercity,#m_enter,#m_resources,#m_departments,#m_student').fadeOut(200);},function(){});
		// Resources
		$('#resources').hoverIntent(function(){allnav.removeClass('active');$(this).addClass('active');m_resources.fadeIn(200);$('#m_univercity,#m_enter,#m_science,#m_departments,#m_student').fadeOut(200);},function(){});
		// Departments
		$('#departments').hoverIntent(function(){allnav.removeClass('active');$(this).addClass('active');m_departments.fadeIn(200);$('#m_univercity,#m_enter,#m_science,#m_resources,#m_student').fadeOut(200);},function(){});
		// Student
		$('#student').hoverIntent(function(){allnav.removeClass('active');$(this).addClass('active');m_student.fadeIn(200);$('#m_univercity,#m_enter,#m_science,#m_resources,#m_departments').fadeOut(200);},function(){});
		
		// Search field behaviors
		var utilitynav = $('.nav.utility');
		
		// Slide search input back; close nav drawers when user hovers over or focuses on other parts of the page
		function searchslideback() {utilitynav.removeClass('no-show').addClass('show');};
		$('.news-block, .pre-footer, #footer, .main, #owl-demo, .navbar-header, .icons, #shadow-top, .headline, .navicons ').hoverIntent(function(){searchslideback();alldrawers.fadeOut(150);allnav.removeClass('active');},function(){});		

	}
	});

