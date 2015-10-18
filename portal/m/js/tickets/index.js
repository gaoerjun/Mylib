/**
 * Created by gaoerjun on 15/10/16.
 */
define(function (require, exports, module) {
    var $ = require("jquery");
    var urlhelper = require("urlhelper");
    var style = "pingan";
    seajs.use("../templates/tickets/index.js?ver=0.0.1", function (_signin) {
        var menuConfigs = require("./var.js?ver=0.0.1");
        var data = {
            style: style,
            title: "菜单打印",
            params: urlhelper.params,
            typeList:menuConfigs.restarantType
        };

        $("#J_seajs_template_content").append(_signin(data));
        $("#loadding-util").hide();
        document.title = data.title;
        $("#type_select").on("change",function(){
            var value = $(this).val();
            if(value == "type3"){
                $("#soup_controller,#wine_controller,#table_controller").show();
            }else{
                $("#soup_controller,#wine_controller,#table_controller").hide();
            }
        })
        $("#do_submit").on("click",function(){
            var resterantName = $("input[name='name']").val();
            if(resterantName==""){
                alert("请输入餐馆名称！");
                return false;
            }
            var count = $("input[name='count']").val();
            if(count==""){
                alert("请输入点菜数量！");
                return false;
            }
            if(!/^\d+$/.test(count) || count>50){
                alert("菜数量必须是小于50的数字！");
                return false;
            }
            var date = $("input[name='date']").val();
            if(date==""){
                alert("请选择时间");
                return false;
            }
            var parmas = $("form").serialize();
            $("#print_ifame").attr("src","print.html?"+parmas);
        })
    });
});