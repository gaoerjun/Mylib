/*TMODJS:{"debug":false,"version":1,"md5":"8ec18482980a3dddc081f638eba0e932"}*/
define(function(require){return require("../artTemplate")("tickets/print1",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.style,e=a.baseinfo,f=b.$each,g=a.menuinfo,h=(a.$value,a.i,"");return h+='<link href="../css/',h+=c(d),h+='/tickets/print1_0.0.1.css?ver=0.0.1" type="text/css" rel="stylesheet"> <div class="orderinfo"> <div class="shop-name">',h+=c(e.shopname),h+='</div> <div class="top-tip">\u6d88\u8d39\u51ed\u8bc1</div> <div class="topinfo"> <p style="font-size: 20px">\u9910\u724c\u7f16\u53f7\uff1a ',h+=c(e.ordertable),h+="</p> <p>\u4ea4\u6613\u6d41\u6c34\u53f7\uff1a",h+=c(e.orderSn),h+="</p> <p>\u4eba\u6570\uff1a1 &emsp;&emsp;&emsp;\u6253\u5370\u6b21\u6570\uff1a1</p> <p>\u6536\u94f6\u5458\uff1a 000000</p> <p>\u5f00\u53f0\u65f6\u95f4\uff1a",h+=c(e.orderTime),h+="</p> <p>\u7ed3\u8d26\u65f6\u95f4\uff1a",h+=c(e.orderTime),h+='</p> </div> </div> <div class="sepreat-line"></div> <table width="100%;" style="table-layout: fixed" class="menulist-table"> <tr> <td style="width: 30px">\u5e8f</td> <td>\u83dc\u54c1</td> <td align="center" width="50px">\u6570\u91cf</td> <td align="right" width="50px">\u5355\u4ef7&emsp;</td> <td align="right" width="50px">\u91d1\u989d&emsp;</td> <tr> ',f(g.menuList,function(a,b){h+=" <tr> <td>",h+=c(b+1),h+='</td> <td colspan="4">',h+=c(a.name),h+='</td> </tr> <tr> <td></td> <td></td> <td align="center">',h+=c(a.count),h+='</td> <td align="right">',h+=c(a.price),h+='.00</td> <td align="right">',h+=c(a.total_price),h+=".00</td> </tr> "}),h+=' </table> <div class="sepreat-line"></div> <div class="total-price">\u6d88\u8d39\u603b\u91d1\u989d\uff1a<span>',h+=c(g.totalPrice),h+='.00</span></div> <div class="total-price-show">\u5e94\u4ed8\u603b\u91d1\u989d\uff1a<span>',h+=c(g.totalPrice),h+='.00</span></div> <div class="sepreat-line"></div> <div class="total-price">\u4eba\u6c11\u5e01\uff1a<span>',h+=c(e.givemoney),h+='.00</span></div> <div class="total-price">\u627e\u96f6\uff1a<span>',h+=c(e.leftmoney),h+='.00</span></div> <div class="sepreat-line"></div> <div class="welcom-tip">\u8c22\u8c22\u60e0\u987e\uff0c\u6b22\u8fce\u4e0b\u6b21\u5149\u4e34\uff01</div> ',new String(h)})});