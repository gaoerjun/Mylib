/**
 * Created by gaoerjun on 15/3/10.
 */
define(function (require, exports, module) {
    var $ = require("jquery");
    require("jquery_cookie");
    Date.prototype.toDateString = function () {
        var y = 1900 + this.getYear(), M = this.getMonth() + 1, d = this.getDate();
        return y + "-" + (M > 9 ? M : "0" + M) + "-" + (d > 9 ? d : "0" + d);
    };
    Date.prototype.toTimeString = function () {
        var H = this.getHours(), i = this.getMinutes(), s = this.getSeconds();
        return (H > 9 ? H : "0" + H) + ":" + (i > 9 ? i : "0" + i) + ":" + (s > 9 ? s : "0" + s);
    };
    Date.prototype.toDateTimeString = function () {
        var y = 1900 + this.getYear(), M = this.getMonth() + 1, d = this.getDate(),
            H = this.getHours(), i = this.getMinutes(), s = this.getSeconds();
        return y + "-" + (M > 9 ? M : "0" + M) + "-" + (d > 9 ? d : "0" + d) + " " +
            (H > 9 ? H : "0" + H) + ":" + (i > 9 ? i : "0" + i) + ":" + (s > 9 ? s : "0" + s);
    };
    Array.prototype.contains = function (e) {
        for (j = 0; j < this.length; j++)if (this[j] == e)return true;
        return false;
    }
    Array.prototype.uniqueArray = function () {
        var temp = new Array();
        for (var i = 0; i < this.length; i++) {
            if (!temp.contains(this[i])) {
                temp.length += 1;
                temp[temp.length - 1] = this[i];
            }
        }
        return temp;
    }
    var baseHelper = {}

    /**
     * 从url 获取参数值
     * @param name
     * @param url
     * @returns {*}
     */
    baseHelper.getQueryString = function (name, url) {
        if (!url) {
            url = window.location.search;
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    baseHelper.is_mobile_number = function (mobile) {
        var mobile_reg = /^0{0,1}(13[0-9]|145|147|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/i;
        if (mobile.length != 11 || !mobile_reg.test(mobile)) {
            return false;
        }
        return true;
    }
    baseHelper.Hashtable = function () {
        this._hash = new Object();
        this.add = function (key, value) {
            if (typeof(key) != "undefined") {
                if (this.contains(key) == false) {
                    this._hash[key] = typeof(value) == "undefined" ? null : value;
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        this.remove = function (key) {
            delete this._hash[key];
        }
        this.count = function () {
            var i = 0;
            for (var k in this._hash) {
                i++;
            }
            return i;
        }
        this.items = function (key) {
            return this._hash[key];
        }
        this.contains = function (key) {
            return typeof(this._hash[key]) != "undefined";
        }
        this.clear = function () {
            for (var k in this._hash) {
                delete this._hash[k];
            }
        }
        this.toStr = function () {
            var str = '';
            for (var k in this._hash) {
                str = str + k + ',';
            }
            return str;
        }
        this.toKeyValueStr = function (sep) {
            var str = '';
            for (var k in this._hash) {
                if (!k)continue;
                str = str + k + sep + this._hash[k] + ',';
            }
            return str;
        }
        this.setValue = function (key, value) {
            if (typeof(key) != "undefined") {
                if (this.contains(key) == true) {
                    this._hash[key] = typeof(value) == "undefined" ? null : value;
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        this.toArray = function () {
            var sTmpStr = this.toStr();
            if (sTmpStr.charAt(sTmpStr.length - 1) == ',')
                sTmpStr = sTmpStr.substring(0, sTmpStr.length - 1);
            var arr = sTmpStr.split(",");
            return arr;
        }
        this.sort = function () {
            var arr = this.toArray();
            arr.sort(function (a, b) {
                return a.localeCompare(b);
            });
            var ht = new Hashtable();
            for (var i = 0; i < arr.length; i++) {
                ht.add(arr[i]);
            }
            return ht;
        }
        this.isEmpty = function () {
            return (this.count == 0) ? true : false;
        }
    }
    baseHelper.hashTable2Str = function (ht) {
        return ht.toStr();
    }
    baseHelper.str2HashTable = function (strHT) {
        var ht = new Hashtable();
        var arrayStr = strHT.split(",");
        for (var i = 0; i < arrayStr.length; i++) {
            ht.add(arrayStr[i]);
        }
        return ht;
    }
    /**
     * 图片自动缩放函数
     * @image: 要改变大小的图片
     * @width: 图片的最大宽度
     * @height: 图片的最大高度
     * @desc: 当图片的宽高任一个大于参数里设置的值的时候，图片就会等比例缩小，且位置相对于外面的容器左右居中
     */
    baseHelper.SetImageAuto = {};
    baseHelper.getLocalUser = function () {
        var local_user = $.trim($.cookie('local_user'));
        if (local_user && local_user != '!!!NOT_EXISTS!!!' && local_user != '' && local_user != 'undefined' && typeof(local_user) != 'undefined') {
            return local_user;
        }
        return false;
    }

    baseHelper.setLocalUser = function (value) {
        $.cookie('local_user', value, {'path': '/'});
    }
    /*公用弹出框*/
    baseHelper.showpop = function ($msg, $btn_tt, functionbtn, $btn_cc, functionbtn2) {
        if (!window.popWinInited) {
            window.popWinInited = true;
            $('html body').append('<div class="popbg J_popbg"></div>');
            $('html body').append('<div class="pop_box pos_pop J_popbox"><span class="icon_all ico_closeb fr J_popclose">&nbsp;</span><div class="pop_box_info J_popinfo"></div><p class="tc"><a class="span165 btn-rd_yel J_popbtn_l"></a><a class="btn-gray span165 ml_10 J_popbtn_r"></a></div>');
        } else {
            $('.J_popbox').show();
            $('.J_popbg').show();
        }

        $('.J_popinfo').html($msg);
        $('.J_popbtn_l').html($btn_tt);//左铵钮文字
        if ($btn_cc) {
            $('.J_popbtn_r').html($btn_cc).show();//右铵钮文字
            $(".J_popbtn_r").unbind("click").bind("click", function () {
                $('.J_popbox').hide();
                $('.J_popbg').hide();
                if (functionbtn2) {
                    functionbtn2();
                }
                return false;
            });
        } else {
            $('.J_popbtn_r').hide();
        }
        $(".J_popclose").unbind("click").bind("click", function () {
            $('.J_popbox').hide();
            $('.J_popbg').hide();
            clearTimeout(st);
            return false;
        });
        $(".J_popbtn_l").unbind("click").bind("click", function () {
            $('.J_popbox').hide();
            $('.J_popbg').hide();
            if (functionbtn) {
                functionbtn();
            }
        });
        return;
    };
    /*弹出框公用*/
    baseHelper.showinfo = function ($msg, $type, $time) {
        if (!$msg)
            return;
        if (!window.infoWinInited) {
            window.infoWinInited = true;
            $('html body').append('<div class="J_infotip_outerbox">' +
            '<div class="pop_tipinfo_con">' +
                '<div class="J_infotip_icon"></div>' +
                '<div class="inner_content"></div>' +
            '</div>' +
            '<div class="pop_tipinfo_bg">&nbsp;</div>' +
            '</div>');
        } else {
            $('.J_infotip_outerbox').show();
        }
        if ($type == 'success') {
            $('.J_infotip_outerbox .J_infotip_icon').html('<img src="/portal/m/images/public/success_tip.png"/>');
        } else if ($type == 'error') {
            $('.J_infotip_outerbox .J_infotip_icon').html('<img src="/portal/m/images/public/error_tip.png"/>');
        } else {
            $('.J_infotip_outerbox .J_infotip_icon').html('<img src="/portal/m/images/public/warn_tip.png"/>');
        }
        $('.J_infotip_outerbox .inner_content').html($msg);

        if ($('.J_infotip_outerbox .inner_content').html().length > 20) {
            $('.J_infotip_outerbox .inner_content').css("margin-top", "0px");
        } else {
            $('.J_infotip_outerbox .inner_content').css("margin-top", "15px");
        }
        if (!$time)
            $time = 3000;
        setTimeout(function () {
            $('.J_infotip_outerbox').fadeOut("slow");
        }, $time);
        return;
    };

    //新弹窗
    /**
     *  新弹窗组建
     * @param $msg 提示信息
     * @param $type 提示类型，“warn”：提示，"success":"成功"，”error“:"错误" ，默认为提示，可不传
     * @param $time 如果成功，该参数起作用，$time秒之后弹窗自动关闭。
     * @param _callback 如果成功，该参数起作用，$time秒之后弹窗自动关闭。
     */
    baseHelper.showinfos = function ($msg, $type, $time,_callback) {
        if (!$msg)
            return;
        if(typeof($type)=="undefined"){
            $type = "warn";
        }
        var infomsg = "提示";
        if ($type=="success"){
            infomsg = "成功";
        }

        var winheight = $(window).height();
        var docHeight = $(document).height();
        var winWidth = $(window).width();
        if (!window.infosWinInited) {
            window.infosWinInited = true;
            $('html body').append('<div class="base-show-tips-box" id="J_infos_outer_DIV" style="height:'
            +(docHeight) +'px; width:' +winWidth + 'px"><section id="J-infos-contrainer"><span id="J_info_title">'+infomsg+'</span><span id="J_info_msg">'
            + $msg +'</span><span id="J_close_btn"> 确定</span></section></div>');
        } else {
            $("#J_info_title").html(infomsg);
            $("#J_info_msg").html($msg);
            $('#J_infos_outer_DIV').show();
        }

        $("#J_infos_outer_DIV section").css({
            "position": "fixed",
            "left": window.innerWidth * 0.10 + "px",
            "top": (window.innerHeight - $("#J-infos-contrainer")[0].offsetHeight) / 2 -50 + "px"
        });

        $("#J_infos_outer_DIV span:nth-child(3)").off("click").on("click", function() {
            $("#J_infos_outer_DIV").hide();
            if(typeof _callback=="function"){
                _callback();
            }
        });
        if($type=="suscess"){
            $("#J_close_btn").html("3秒后关闭");
            if (typeof $time=="undefined" || !$time){
                $time = 3000;
            }
            setTimeout(function () {
                $("#J_infos_outer_DIV").fadeOut();
                if(typeof _callback=="function"){
                    _callback();
                }
            }, $time);
        }

    };
    baseHelper.showtips = function ($msg, $time) {
        if (!window.infoWinTipInited) {
            window.infoWinTipInited = true;
            $('html body').append('<div class="J_showTips"><div class="J_showTips_con"></div></div>');
        } else {
            $('.J_showTips').show();
        }
        $('.J_showTips_con').html($msg);
        if (!$time)
            $time = 3000;
        setTimeout(function () {
            $('.J_showTips').fadeOut("slow");
        }, $time);
        return;
    };
    /**
     * 判断是否是允许的style
     * @param _style
     * @param _alowList
     * @returns {boolean}
     */
    baseHelper.checkeIsAllowStyle = function(_style,_alowList){
        if(!_alowList || typeof _alowList!="object" || _alowList.length==0){
            return false;
        }
        return $.inArray(_style,_alowList)>=0;
    }
    Function.prototype.bind = function (scope) {
        var fn = this;
        return function () {
            return fn.apply(scope);
        };
    }
    module.exports = baseHelper;
});