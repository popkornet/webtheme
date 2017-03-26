/*!
 * ϑWave Studio - Free Agent Bootstrap Theme (http://thetawave.studio)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-shrinkable'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
        // put all your jQuery goodness in here.
        document.getElementById('focusme').focus();
    });

simpleCart({
  checkout: {
    type: "Custom"
  },
  cartColumns: [
      { attr: "name" , label: "Tittel" } ,
      { attr: "price" , label: "Pris", view: 'currency' } ,
      { view: "decrement" , label: false , text: "<span class='fa fa-fw fa-minus'></span>" } ,
      { attr: "quantity" , label: "Antall" } ,
      { view: "increment" , label: false , text: "<span class='fa fa-fw fa-plus'></span>" } ,
      { attr: "total" , label: "Subtotal", view: 'currency' } ,
      { view: "remove" , text: "<span class='fa fa-fw fa-close text-danger'></span>" , label: false }
  ],
  currency: "NOK",
  cartStyle: "table",
  cartClass: "table table-responsive table-condensed table-inverse",
  shippingQuantityRate: 40,
});
