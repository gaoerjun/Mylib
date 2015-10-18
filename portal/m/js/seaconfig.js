/**
 * Created by gaoerjun on 15/4/10.
 */
seajs.config({
    paths: {
        'seamoudle': '/portal/sea-modules',
        'publicdir': '/portal/m/js/plugin'
    },
    alias: {
        "jquery": "seamoudle/jquery/jquery/1.10.1/jquery.js?ver=1.1.8",
        "api":"publicdir/api.js?ver=1.1.8",
        "jquery_flexslider":"publicdir/jquery_flexslider.js?ver=1.1.8",
        "easydialog":"publicdir/easydialog.js?ver=1.1.8",
        "base":"publicdir/base.js?ver=1.1.8",
        "connect":"publicdir/connect.js?ver=1.1.8",
        "pengwifiAPI":"publicdir/pengwifiAPI.js?ver=1.1.8",
        "slidebox":"publicdir/jquery.slideBox.js?ver=1.1.8",
        "urlhelper":"publicdir/url_helper.js?ver=1.1.8",
        "config":"publicdir/config.js?ver=1.1.8",
        "jquery_cookie":"publicdir/jquery.cookie.js?ver=1.1.8",
        "jquery_slider":"publicdir/jquery.flexslider.js?ver=1.1.8"
    },
    vars:{
        '_version_' :"0.0.1"
    }

});