/*TMODJS:{"debug":false,"version":1,"md5":"972d6696a155227c13eadfdd2b105118"}*/
define(function(require){return require("../artTemplate")("tickets/index",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.style,e=b.$each,f=a.typeList,g=(a.$value,a.i,"");return g+='<link href="../css/',g+=c(d),g+='/tickets/index_0.0.1.css?ver=0.0.1" type="text/css" rel="stylesheet"> <div class="order-content"> <h1>\u8ba2\u5355\u5c0f\u7968\u751f\u6210\u5de5\u5177</h1> <form> <table> <tr> <td class="td-index">\u9910\u9986\u540d\u79f0\uff1a</td> <td><input type="text" class="itp-text" name="name" placeholder="\u8bf7\u8f93\u5165\u9910\u9986\u540d\u79f0"></td> </tr> <tr> <td class="td-index">\u9910\u9986\u5206\u7c7b\uff1a</td> <td> <select name="type" id="type_select"> ',e(f,function(a){g+=' <option value="',g+=c(a.value),g+='">',g+=c(a.typename),g+="</option> "}),g+=' </select> </td> </tr> <tr style="display: none" id="soup_controller"> <td class="td-index">\u662f\u5426\u6709\u6c64\u7c7b\uff1a</td> <td> <label> <input type="radio" value="1" name="hasSoap" checked/> \u662f</label> <label> <input type="radio" value="0" name="hasSoap" /> \u5426</label> </td> </tr> <tr style="display: none" id="wine_controller"> <td class="td-index">\u662f\u5426\u6709\u9152\u6c34\uff1a</td> <td> <label> <input type="radio" value="1" name="hasWine" checked /> \u662f</label> <label> <input type="radio" value="0" name="hasWine" /> \u5426</label> </td> </tr> <tr style="display: none" id="table_controller"> <td class="td-index">\u662f\u5426\u6536\u9910\u4f4d\u8d39\uff1a</td> <td> <label> <input type="radio" value="1" name="hasExtralFee" checked/> \u662f</label> <label> <input type="radio" value="0" name="hasExtralFee" /> \u5426</label> </td> </tr> <tr > <td class="td-index">\u70b9\u83dc\u6570\u91cf\uff1a</td> <td><input type="text" class="itp-text" name="count" placeholder="\u8bf7\u8f93\u5165\u83dc\u6570\u91cf"></td> </tr> <tr > <td class="td-index">\u65f6\u95f4\uff1a</td> <td><input type="date" class="itp-text" name="date" placeholder="\u8bf7\u9009\u62e9\u65e5\u671f"> <select name="time"> <option value="1">\u4e2d\u5348</option> <option value="2">\u4e0b\u5348</option> </select> </td> </tr> <tr > <td class="td-index">\u5c0f\u7968\u6a21\u677f\uff1a</td> <td> <select name="tickets_type"> <option value="1">\u6a21\u677f1</option> <option value="2">\u6a21\u677f2</option> <option value="3">\u6a21\u677f3</option> <option value="4">\u6a21\u677f4</option> <option value="5">\u6a21\u677f5</option> </select> </td> </tr> </table> <div class="btns"> <div class="submit-btn" id="do_submit">\u751f\u6210\u83dc\u5355 </div> </div> </form> <iframe id="print_ifame" style="display: none;"></iframe> </div>',new String(g)})});