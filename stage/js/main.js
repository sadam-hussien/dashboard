$(function () {

    // show search box when click on search icon
    $("header .dashboard_search").on("click", function () {

        $(".search_box").slideDown("slow");

    });

    // hide search box when click on close icon
    $(".search_box .search_icon_close").on("click", function () {

        $(this).parents(".search_box").slideUp("slow");

    });

    // toggle sidebar dimension
    $("header .toggle_sidebar_btn").on("click", function () {

        $(this).toggleClass("active");

        $(".dashboard_sidebar").toggleClass("activebar");

        $(".dynamic_width").toggleClass("activedash");

        $("footer").toggleClass("activefooter");

    });

    // toggle header option
    $(".toggle_responsive_header_option").on("click", function () {

        $(this).parent().toggleClass("active");

        $("header .header_option .header_option_inner").toggleClass("active");

    });

    // toggle_setting
    $(".toggle_settings").on("click", function () {

        $(".settings_content").toggleClass("active_setting");

    });

    // change theme
    let colorItem = $(".settings_box .single_setting_color.sidebar_color_option li");
    
    let themeClasses = [];

    colorItem.each(function () {

        themeClasses.push($(this).data("theme"));

    });

    colorItem.on("click", function () {

        $("body").removeClass(themeClasses.join(" ")).addClass($(this).data("theme"));

    });

    // change theme
    let modeItem = $(".settings_box .single_setting_color.modes_option li");
    
    let modeClasses = [];

    modeItem.each(function () {

        modeClasses.push($(this).data("theme"));

    });

    modeItem.on("click", function () {

        $("body").removeClass(modeClasses.join(" ")).addClass($(this).data("theme"));

    });

});