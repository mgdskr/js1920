"use strict";!function(){"use stict";function e(e){"banner__title"===e.target.className&&(t.querySelector(".banner_active").classList.toggle("banner_active"),e.target.parentNode.classList.toggle("banner_active"))}$(function(){var e=$(".slider");e.jcarousel({}).jcarouselAutoscroll({interval:1500,target:"+=1",autostart:!0}),$(".jcarousel-pagination").on("jcarouselpagination:active","input",function(){$(this).addClass("active").attr("checked","")}).on("jcarouselpagination:inactive","input",function(){$(this).removeClass("active").removeAttr("checked")}).jcarouselPagination({item:function(e){return'<input type="radio" class="slider__control-item" name="slider" id="slider__control-item_'+e+'" checked>\n                    <label for="slider__control-item_'+e+'"></label>'}})});var t=document.querySelector(".banners");t.addEventListener("click",e)}();