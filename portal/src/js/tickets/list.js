/**
 * Created by gaoerjun on 15/10/16.
 */
define(function (require, exports, module) {
    var $ = require("jquery");
    var urlhelper = require("urlhelper");
    var style = "pingan";
    seajs.use("../templates/tickets/list.js?ver=___versionStr__", function (_signin) {
        var menuConfigs = require("./var.js?ver=___versionStr__");
        var data = {
            style: style,
            title: "账单打印",
            params: urlhelper.params,
        };

        $("#J_seajs_template_content").append(_signin(data));
        $("#loadding-util").hide();
        document.title = data.title;
        $("#do_submit").on("click",function(){
            var parmas = $("form").serialize();
            $("#print_ifame").attr("src","printlist.html?"+parmas);
        })
    });
});