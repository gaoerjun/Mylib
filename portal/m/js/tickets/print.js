/**
 * Created by gaoerjun on 15/10/16.
 */
define(function (require, exports, module) {
    var $ = require("jquery");
    var urlhelper = require("urlhelper");
    var style = "pingan";

    var menuConfigs = require("./var.js?ver=0.0.1");
    var menutype = urlhelper.getParameter("type");
    var menulist = menuConfigs[menutype];
    var bhasSoup = urlhelper.getParameter("hasSoap")==1?true:false;
    var bhasWine = urlhelper.getParameter("hasWine")==1?true:false;
    var bhasExtralFee = urlhelper.getParameter("hasExtralFee")==1?true:false;
    var count=urlhelper.getParameter("count");
    var name=urlhelper.getParameter("name");
    var date = urlhelper.getParameter("date");
    var time = urlhelper.getParameter("time");
    var persons = getPersons(count);
    var menusInfo =  getRandomMenuList(menuConfigs,menutype,bhasSoup,bhasWine,count,persons,bhasExtralFee);
    var givemoney = getGiveMoney(menusInfo.totalPrice);
    var leftmoney = givemoney - menusInfo.totalPrice;
    var orderTime = getOrderTime(date,time);
    var ticketsType = urlhelper.getParameter("tickets_type");
    var data = {
        style: style,
        title: "打印",
        params: urlhelper.params,
        menuinfo:menusInfo,
        baseinfo:{
            shopname:decodeURIComponent(name),
            orderTime:orderTime,
            orderSn:getOrderSn(orderTime,ticketsType),
            ordertable:getOrderTable(),
            givemoney:givemoney,
            leftmoney:leftmoney,
            persons:persons
        }
    };

    seajs.use("../templates/tickets/print"+ticketsType+".js?ver=0.0.1", function (_signin) {
        $("#J_seajs_template_content").append(_signin(data));
        $("#loadding-util").hide();
        document.title = data.title;
        $(document).ready(function(){
            print();
        })

    });
    function getPersons(_count){
        var num = _count-2<=0?1:_count-2;
        var start = num-3<=0?1:num-3;
        return getRandomNum(start,num)
    }
    /**
     * 模拟给的钱数，80%的几率需要找零
     * @param _totalMoney
     * @returns {number}
     */
    function getGiveMoney(_totalMoney){
        var ramdom = getRandomNum(1,10);
        var givemoey = 0;
        if(ramdom>2){
            var count1 = Math.floor(_totalMoney/50);
            if(_totalMoney%50==0){
                givemoey = (count1)*50;
            }else{
                givemoey = (count1+1)*50;
            }
        }else{
            givemoey = _totalMoney;
        }

        return givemoey;
    }

    /**
     * 获取牌号
     * @returns {number}
     */
    function getOrderTable(){
        return Math.floor(Math.random()*28+1)
    }

    /**
     * 生成订单日期
     * @param _date
     * @param _time
     * @returns {string}
     */
    function getOrderTime(_date,_time){
        var time = "";
        if(_time==1){
            time = getRandomNum(12,14)+":"+getShowTime(getRandomNum(0,59))
        }else{
            time = getRandomNum(18,21)+":"+getShowTime(getRandomNum(0,59))
        }
        return _date+" "+time;
    }

    /**
     * 获取n到m的随机数
     * @param n
     * @param m
     * @returns {number}
     */
    function getRandomNum(n,m){
        var c = m-n+1;
       return  Math.floor(Math.random()*c+n);
    }

    /**
     * 获取显示时间
     * @param _time
     * @returns {*}
     */
    function getShowTime(_time){
        if(_time<10){
            return "0"+_time;
        }else{
            return _time;
        }
    }

    /**
     * 生成订单号
     * @param _date
     * @returns {string}
     */
    function getOrderSn(_date,_type){
        var sn = "";
        var date = new Date(_date);
        var dateStr = date.getFullYear()+""+(date.getMonth()+1)+ date.getDate();
        if(_type==1 || _type>5 ){
            var result = [];
            sn= dateStr+"000"+getRandomNumValues(3);
        }else if(_type==2){
            sn = dateStr+"-0"+getRandomNumValues(3);
        }else if(_type==3){
            sn = getRandomNumValues(6);
        }else if(_type==4){
            sn =getRandomNumValues(11);
        }else{
            sn= dateStr+"000"+getRandomNumValues(3)
        }
        return sn;

    }
    function getRandomNumValues(_number){
        var result = [];
        for(var i=0;i<_number;i++){
            result.push(Math.floor(Math.random()*9));
        }
        return result.join("");
    }

    /**
     * 获取重复菜品的数组中的位置
     * @param _arr
     * @param _name
     * @returns {number}
     */
    function getOrderIndexByName(_arr,_name){
        var index = -1;
        for(var i=0;i<_arr.length;i++){
            var item = _arr[i];
            if(item.name==_name){
                index = i;
                break;
            }
        }
        return index;
    }

    /**
     * 生成菜单列表
     *
     * @param _srcmenulist 菜单配置列表
     * @param _type 菜品分类
     * @param bhasSoup 是否有汤
     * @param bhasWine 是否有酒
     * @param _count 点菜数量
     * @param _peoples 进餐人数
     * @returns {{menuList: Array, totalPrice: number}}
     */
    function getRandomMenuList(_srcmenulist,_type,bhasSoup,bhasWine,_count,_peoples,bhasExtralFee){
        var menuInfos = {
           menuList:[],
           totalPrice:0.00
        };
        var menuList = _srcmenulist.menus[_type];
        for(var i=0;i<_count;i++){
            var randomvalue = Math.floor(Math.random()*(menuList.length));
            var item =menuList[randomvalue];
            item.count=1;
            item.total_price = item.price;
            menuInfos.totalPrice =menuInfos.totalPrice+ item.price;
            //菜品合并
            var name = item.name;
            var index = getOrderIndexByName(menuInfos.menuList,name);
            if(index>=0){
                menuInfos.menuList[index].count=menuInfos.menuList[index].count+1;
                menuInfos.menuList[index].total_price =  menuInfos.menuList[index].total_price +item.price;
            }else{
                menuInfos.menuList.push(item);
            }

            if(_type=="type3"){
                menuList.splice(randomvalue,1);
            }
        }
        if(bhasSoup && _type=="type3"){
            var soupMenu =_srcmenulist.menus.type4;
            var randomvalue = Math.floor(Math.random()*(soupMenu.length));
            var item = soupMenu[randomvalue];
            item.count=1;
            item.total_price = item.price;
            menuInfos.totalPrice = menuInfos.totalPrice+item.price;
            menuInfos.menuList.push(item);
        }
        if(bhasWine && _type=="type3"){
            var soupMenu =_srcmenulist.menus.type5;
            var randomvalue = Math.floor(Math.random()*(soupMenu.length));
            var item = soupMenu[randomvalue];
            item.total_price = item.price*item.count;
            menuInfos.menuList.push(item);
            menuInfos.totalPrice =menuInfos.totalPrice + item.price*item.count;
        }
        if(_type=="type3" && bhasExtralFee){
           var item = {
               name: "餐位费",
               price: 2,
               count: _peoples,
               total_price:2*_peoples
           }
            menuInfos.menuList.push(item);
            menuInfos.totalPrice =menuInfos.totalPrice + item.price*item.count;
        }
        return menuInfos;
    }
});