$(document).ready(function(){


//Extra element - when you click on "SF Native," it changes colors
    $('.sub').click(function()
    {
    	$('.sub').css('color', "#c1717c");
    });


//Hover over photo to reduce opacity

$('#me').hover(function() {
    $(this).addClass('hover-me-div');
  }, function() {
    $(this).removeClass('hover-me-div');
  });


//Navigation to get to top

$('#top-icon').click(function() {
 	$('body').scrollTop(0);
 });

$('#top-ed').click(function() {
 	$('body').scrollTop(0);
 });

$('#top-honors').click(function() {
 	$('body').scrollTop(0);
 });

$('#top-skills').click(function() {
 	$('body').scrollTop(0);
 });

$('#top-work').click(function() {
 	$('body').scrollTop(0);
 });

$('#top-contact').click(function() {
 	$('body').scrollTop(0);
 });

//Navigation using the top nav bar

var wOffset = ($(window).height())/2;
var eOffset = ($(".section-div").height())/2;

 // $('#education-nav').click(function() {
 // 	$('#education').show();
 // });

$('#education-nav').click(function() {
 	$(window).scrollTop($('#education').offset().top - (wOffset - eOffset));
 });



 $('#skills-nav').click(function() {
 	// $('#skills').show();
 	$(window).scrollTop($('#skills').offset().top - (wOffset - eOffset));
 });

  $('#work-nav').click(function() {
 	// $('#work').show();
 	$(window).scrollTop($('#work').offset().top - (wOffset - eOffset));
 });

   $('#honors-nav').click(function() {
 	// $('#honors').show();
 	$(window).scrollTop($('#honors').offset().top - (wOffset - eOffset));
 });

$('#contact-nav').click(function() {
 	// $('#contact').show();
 	$(window).scrollTop($('#contact').offset().top - (wOffset - eOffset));
 });


//Navigation using down arrows

// $('#arrow-2').click(function() {
//  	$(window).scrollTop($('#education').offset().top);

//  });

// var wOffset = ($(window).height())/2;
// var eOffset = ($(".section-div").height())/2;

$('#arrow-2').click(function() {
 	$(window).scrollTop($('#education').offset().top - (wOffset - eOffset));
 });


$('#ed-arrow').click(function() {
 	$(window).scrollTop($('#skills').offset().top - (wOffset - eOffset));

 });

$('#skills-arrow').click(function() {
 	$(window).scrollTop($('#work').offset().top - (wOffset - eOffset));

 });

$('#work-arrow').click(function() {
 	$(window).scrollTop($('#honors').offset().top - (wOffset - eOffset));

 });

$('#honors-arrow').click(function() {
 	$(window).scrollTop($('#contact').offset().top - (wOffset - eOffset));

 });

});