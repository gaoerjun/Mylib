/**
 *  菜单配置文件：
 *
 *  restarantType 为餐馆配置类，目前只支持该三类
 *
 *  menus为不同类别的菜的详细菜单，其中：
 *      type1 为盖饭类，
 *      type2 为面食类
 *      type3 为点菜类，
 *      type4 为点菜类中的汤类
 *      type5 为点菜类中的酒类
 *  type4、type5可在设置为点菜类的时候选择是否有
 *  type1到type5下的菜单可进行配置
 *
 *
 */
define(function (require, exports, module) {
    var restarantType = [
        {
            value: "type1",
            typename: "盖饭类"
        },
        {
            value: "type2",
            typename: "面食类"
        },
        {
            value: "type3",
            typename: "点菜类"
        }

    ]
    var menus = {
        "type1": [ //盖饭
            {
                name: "宫保鸡丁盖饭",
                price: 22
            },
            {
                name: "咸鱼茄子（套餐）",
                price: 23
            },
            {
                name: "红烧土豆",
                price: 21
            },
            {
                name: "土豆肉丝",
                price: 25
            }, {
                name: "烧鹅饭",
                price: 29
            }, {
                name: "烧鸭饭",
                price: 27
            }, {
                name: "麻婆豆腐",
                price: 22
            },
            {
                name: "西红柿炒鸡蛋",
                price: 20
            }, {
                name: "酸豆角肉沫饭",
                price: 22
            }, {
                name: "农家一碗香",
                price: 24
            }, {
                name: "萝卜牛腩饭",
                price: 28
            },
            {
                name: "凉瓜牛肉饭",
                price: 26
            },
            {
                name: "尖椒肉丝",
                price: 24
            },
            {
                name: "农家小炒肉",
                price: 25
            },
            {
                name: "红烧排骨饭",
                price: 25
            }
            ,
            {
                name: "鱼香茄子",
                price: 25
            }
        ],
        type2: [//面类
            {
                name: "杨凌沾水面",
                price: 17
            },
            {
                name: "西红柿鸡蛋面",
                price: 14
            }, {
                name: "油泼面（扯面）",
                price: 15
            }, {
                name: "油泼面（手工面）",
                price: 15
            }, {
                name: "油泼面（刀削面）",
                price: 15
            }, {
                name: "斌斌面",
                price: 18
            }, {
                name: "招牌拌面",
                price: 18
            }, {
                name: "羊肉泡馍",
                price: 15
            }, {
                name: "炒拉条",
                price: 14
            }, {
                name: "炒面片",
                price: 18
            }, {
                name: "凉皮",
                price: 10
            }, {
                name: "凉面",
                price: 10
            }, {
                name: "肉夹馍",
                price: 8
            },
            {
                name: "担担面",
                price: 14
            }, {
                name: "红烧牛肉面",
                price: 18
            }, {
                name: "凉面",
                price: 15
            }
        ],
        type3: [ //点菜类
            {
                name: "酸菜鱼",
                price: 38
            },
            {
                name: "小炒猪肝",
                price: 28
            },
            {
                name: "口水鸡",
                price: 39
            }, {
                name: "新鲜时蔬",
                price: 18
            }, {
                name: "小炒猪肝",
                price: 28
            }, {
                name: "宫保鸡丁",
                price: 22
            }, {
                name: "干锅千叶豆腐",
                price: 32
            }, {
                name: "三丝炒河粉",
                price: 35
            }, {
                name: "干炒牛河",
                price: 18
            }, {
                name: "腐竹牛腩",
                price: 39
            }, {
                name: "农家小炒肉",
                price: 26
            }, {
                name: "干煸豆角",
                price: 23
            }, {
                name: "韭菜炒蛋",
                price: 20
            }, {
                name: "干煸肥肠",
                price: 49
            }, {
                name: "梅菜扣肉",
                price: 38
            }, {
                name: "水煮鱼",
                price: 40
            }, {
                name: "水煮肉片",
                price: 42
            }, {
                name: "香菇滑鸡",
                price: 32
            }, {
                name: "土豆片回锅肉",
                price: 29
            }, {
                name: "香辣鸡杂",
                price: 35
            }, {
                name: "风流小土豆",
                price: 23
            }, {
                name: "油炸豆腐",
                price: 20
            }, {
                name: "小笋腊肉",
                price: 32
            }, {
                name: "辣子鸡块",
                price: 35
            }, {
                name: "芹菜香干肉",
                price: 28
            }, {
                name: "肉沫红烧茄子",
                price: 25
            }, {
                name: "蚂蚁上树",
                price: 28
            }, {
                name: "香干腊肉",
                price: 32
            }, {
                name: "豆豉鲮鱼",
                price: 55
            }, {
                name: "剁椒鱼头",
                price: 68
            }, {
                name: "马鲛鱼",
                price: 55
            }, {
                name: "红烧牛腩",
                price: 48
            }, {
                name: "生滚牛肉",
                price: 48
            },
            {
                name: "煎生蚝",
                price: 45
            }
        ],
        type4: [ //汤类
            {
                name: "西红柿鸡蛋汤",
                price: 18
            },
            {
                name: "紫菜蛋花汤",
                price: 20
            }, {
                name: "西湖牛肉羹",
                price: 30
            }, {
                name: "青菜豆腐汤",
                price: 20
            }
        ],
        type5: [ //啤酒类
            {
                name: "纯生啤酒",
                price: 5,
                count:5
            },
            {
                name: "百威啤酒",
                price: 7,
                count:5
            },
            {
                name: "青岛啤酒",
                price: 6,
                count:5
            },
            {
                name: "雪花啤酒",
                price: 5,
                count:5
            },
            {
                name: "果粒橙（大）",
                price: 10,
                count:2
            },
            {
                name: "加多宝",
                price: 5,
                count:5
            }
        ]
    }
    var exportType = {
        restarantType:restarantType,
        menus:menus
    }
    module.exports=exportType;
});