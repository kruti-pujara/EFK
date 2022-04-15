jQuery(document).ready(function(){
    windowScroll();
    equalHeight();
    blog_bg_width();

    //hamburger-menu
    jQuery('.hamburger').click(function () {
        jQuery('html, body').toggleClass('open-menu')
    });
    
});
jQuery(window).resize(function(){
    blog_bg_width();
    equalHeight();
});
// blog width
function blog_bg_width() {
    var bg_width =jQuery('.blog-right').offset().left;
    jQuery('.blog-bg-red').css({
        width:bg_width
    });
}
// window scroll
function windowScroll(){
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop()) {
            jQuery('.site-header').addClass('red')
        }
        else {
            jQuery('.site-header').removeClass('red')
        }
    });
}
// equal height
function equalHeight() {
    jQuery.fn.extend({
        equalHeight: function() {
            var top = 0;
            var row = [];
            var classname = ('equalHeight' + Math.random()).replace('.', '');
            jQuery(this).each(function() {
                var thistop = jQuery(this).offset().top;
                if (thistop > top) {
                    jQuery('.' + classname).removeClass(classname);
                    top = thistop;
                }
                jQuery(this).addClass(classname);
                jQuery(this).height('auto');
                var h = (Math.max.apply(null, jQuery('.' + classname).map(function() {
                    return jQuery(this).outerHeight();
                }).get()));
                jQuery('.' + classname).height(h);
            }).removeClass(classname);
        }
    });
    // jQuery('.efk-item .efk-inner h3').equalHeight();
    jQuery('.efk-item .efk-inner .para-content p').equalHeight();

    jQuery('.right-main-item .right-main-item-inner h3').equalHeight();
    jQuery('.right-main-item .right-main-item-inner .para-content p').equalHeight();

}
// resize