/**
 * 处理url路径相关的基类
 * 根据url获取相关信息
 * 1.domain 域名
 * 2.protocol 协议
 * 3.path 访问文件路径
 * 4.params 完整的参数路径
 * 5.function getParameter 获取某一个参数接口
 *
 * @add by gaoerjun
 */
define(function (require, exports, module) {
    function URLParamsHelper(){
        var _location = window.location;
        this.domain = _location.origin;
        this.protocol = _location.protocol;
        this.path =_location.pathname;
        this.params = _location.search;
        this.paramsMap = {};
        this.getParameter=function(_key){
            return typeof(this.paramsMap[_key])!="undefined" ? this.paramsMap[_key] : "";
        }
        this.init=function(){
            if(this.params.length==0){
                return false;
            }
            var paramas = this.params
            //1.去除?
            if(paramas.indexOf("?")==0){
                paramas=paramas.substr(1,paramas.length-1);
            }
            //2.获取参数
            var urlarr = paramas.split("&");
            for(var i=0;i<urlarr.length;i++){
                var item = urlarr[i];
                var keyValItems = item.split("=");
                if(keyValItems.length<2){
                    continue;
                }
                var key = keyValItems[0];
                keyValItems.shift();
                this.paramsMap[key]=keyValItems.join("=");
            }
            delete this.init;
            return false;
        }
        this.updateKey=function(_key,_value){
            if(typeof this.paramsMap[_key]=="undefined"){
                return false;
            }
            this.paramsMap[_key] =_value;
            this.updateParams();
        }
        this.addKey=function(_key,_value){
            this.paramsMap[_key] =_value;
            this.updateParams();
        }
        this.deleteKey =function(_key){
            if(typeof this.paramsMap[_key]=="undefined"){
                return false;
            }
            delete this.paramsMap[_key];
            this.updateParams();
        }
        this.updateParams=function(){
            var paramsArr = [];
            for(var key in this.paramsMap){
                paramsArr.push(key+"="+this.paramsMap[key]);
            }
            this.params="?"+paramsArr.join("&");

        }
        this.getNewParamJson = function(){
            var rejson  = {};
            for(var key in this.paramsMap){
                rejson[key] = this.paramsMap[key];
            }
            return rejson;
        }
        this.init()
    }
    module.exports = new URLParamsHelper();
});