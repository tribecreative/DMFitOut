/*==================================================
//
// Table of contents
//
// 01. Smooth Scroll
// 02. Filter Portfolio
// 03. Animate On Scroll
// 04. Sticky Header
// 05. Hamburger Icon
//
==================================================*/

$(document).ready(function() {

  /*==================================================
  // 01. Smooth Scroll
  ==================================================*/
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600,
    easing: 'easeInOutQuad'
  });

  /*==================================================
  // 02. Filter Portfolio
  ==================================================*/
  $('.portfolio-filter__item').on('click', function() {
    $('.portfolio-filter__item').removeClass('portfolio-filter__item--active');
    $(this).addClass('portfolio-filter__item--active');
  });

  /*==================================================
  // 03. Animate On Scroll
  ==================================================*/
  AOS.init({
    offset: 200,
    duration: 300,
    easing: 'ease-in-cubic',
    once: true,
  });

  /*==================================================
  // 04. Sticky Header
  ==================================================*/
  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= $(window).height() + 320) {
      $('#main-nav').addClass('main-nav--fixed');
      $('.scroll-top').fadeIn();
    } else {
      $('#main-nav').removeClass('main-nav--fixed');
      $('.scroll-top').fadeOut();
    }
  });

  /*==================================================
  // 05. Hamburger Icon
  ==================================================*/
  $('.navbar-toggle').on('click', function() {
    $('.navbar-collapse').slideToggle();
    $('.navbar-toggle').toggleClass('navbar-toggle--active');
  });

});