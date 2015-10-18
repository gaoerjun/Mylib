/**
 * Created by gaoerjun on 15/4/10.
 */
seajs.config({
    paths: {
        'seamoudle': '/portal/sea-modules',
        'publicdir': '/portal/m/js/plugin'
    },
    alias: {
        "jquery": "seamoudle/jquery/jquery/1.10.1/jquery.js?ver=___versionStr__",
        "api":"publicdir/api.js?ver=___versionStr__",
        "jquery_flexslider":"publicdir/jquery_flexslider.js?ver=___versionStr__",
        "easydialog":"publicdir/easydialog.js?ver=___versionStr__",
        "base":"publicdir/base.js?ver=___versionStr__",
        "connect":"publicdir/connect.js?ver=___versionStr__",
        "pengwifiAPI":"publicdir/pengwifiAPI.js?ver=___versionStr__",
        "slidebox":"publicdir/jquery.slideBox.js?ver=___versionStr__",
        "urlhelper":"publicdir/url_helper.js?ver=___versionStr__",
        "config":"publicdir/config.js?ver=___versionStr__",
        "jquery_cookie":"publicdir/jquery.cookie.js?ver=___versionStr__",
        "jquery_slider":"publicdir/jquery.flexslider.js?ver=___versionStr__"
    },
    vars:{
        '_version_' :"0.0.1"
    }

});