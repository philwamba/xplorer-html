/*================
 Template Name: Explorer Boootrap Template
 Description: A responsive tourism bootstrap template .
 Version: 1.0.0
 Author: Phil Wamba
 =======================*/

 jQuery(function ($) {

    'use strict';

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 100) {
            $(".navbar.fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar.fixed-top").removeClass("sticky-nav");
        }
    });

}); // JQuery end