"use strict";$(function(){$("header .dashboard_search").on("click",function(){$(".search_box").slideDown("slow")}),$(".search_box .search_icon_close").on("click",function(){$(this).parents(".search_box").slideUp("slow")}),$("header .toggle_sidebar_btn").on("click",function(){$(this).toggleClass("active"),$(".dashboard_sidebar").toggleClass("activebar"),$(".dynamic_width").toggleClass("activedash"),$("footer").toggleClass("activefooter")}),$(".toggle_responsive_header_option").on("click",function(){$(this).parent().toggleClass("active"),$("header .header_option .header_option_inner").toggleClass("active")}),$(".toggle_settings").on("click",function(){$(".settings_content").toggleClass("active_setting")});var e=$(".settings_box .single_setting_color.sidebar_color_option li"),t=[];e.each(function(){t.push($(this).data("theme"))}),e.on("click",function(){$("body").removeClass(t.join(" ")).addClass($(this).data("theme"))});var o=$(".settings_box .single_setting_color.modes_option li"),s=[];o.each(function(){s.push($(this).data("theme"))}),o.on("click",function(){$("body").removeClass(s.join(" ")).addClass($(this).data("theme"))})});