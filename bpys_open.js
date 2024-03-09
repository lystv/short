import {
    Crypto, load, _
}
from 'assets://js/lib/cat.js';

let key = '996白嫖ys';
let HOST = 'http://www.baipiaoys.cc/';
let siteKey = '';
let siteType = 0;

const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

async function request(reqUrl, agentSp) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: {
            'User-Agent': agentSp || UA,
            'Referer': HOST
        },
    });
    return res.content;
}

// cfg = {skey: siteKey, ext: extend}
async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}

async function home(filter) {
    let classes = [{
        'type_id': '1',
        'type_name': '电影'
    }, {
        'type_id': '2',
        'type_name': '电视剧'
    }, {
        'type_id': '3',
        'type_name': '动漫'
    }, {
        'type_id': '4',
        'type_name': '爽文短剧'
    }];
    let filterObj = {
        '1': [{
            'key': 'class',
            'name': '剧情',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '喜剧',
                'v': '喜剧'
            }, {
                'n': '爱情',
                'v': '爱情'
            }, {
                'n': '恐怖',
                'v': '恐怖'
            }, {
                'n': '动作',
                'v': '动作'
            }, {
                'n': '科幻',
                'v': '科幻'
            }, {
                'n': '剧情',
                'v': '剧情'
            }, {
                'n': '战争',
                'v': '战争'
            }, {
                'n': '警匪',
                'v': '警匪'
            }, {
                'n': '犯罪',
                'v': '犯罪'
            }, {
                'n': '动画',
                'v': '动画'
            }, {
                'n': '奇幻',
                'v': '奇幻'
            }, {
                'n': '武侠',
                'v': '武侠'
            }, {
                'n': '冒险',
                'v': '冒险'
            }, {
                'n': '枪战',
                'v': '枪战'
            }, {
                'n': '悬疑',
                'v': '悬疑'
            }, {
                'n': '惊悚',
                'v': '惊悚'
            }, {
                'n': '经典',
                'v': '经典'
            }, {
                'n': '青春',
                'v': '青春'
            }, {
                'n': '文艺',
                'v': '文艺'
            }, {
                'n': '微电影',
                'v': '微电影'
            }, {
                'n': '古装',
                'v': '古装'
            }, {
                'n': '历史',
                'v': '历史'
            }, {
                'n': '运动',
                'v': '运动'
            }, {
                'n': '农村',
                'v': '农村'
            }, {
                'n': '儿童',
                'v': '儿童'
            }]
        }, {
            'key': 'area',
            'name': '地区',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '中国大陆',
                'v': '中国大陆'
            }, {
                'n': '中国香港',
                'v': '中国香港'
            }, {
                'n': '中国台湾',
                'v': '中国台湾'
            }, {
                'n': '美国',
                'v': '美国'
            }, {
                'n': '韩国',
                'v': '韩国'
            }, {
                'n': '日本',
                'v': '日本'
            }, {
                'n': '泰国',
                'v': '泰国'
            }, {
                'n': '新加坡',
                'v': '新加坡'
            }, {
                'n': '马来西亚',
                'v': '马来西亚'
            }, {
                'n': '印度',
                'v': '印度'
            }, {
                'n': '英国',
                'v': '英国'
            }, {
                'n': '法国',
                'v': '法国'
            }, {
                'n': '加拿大',
                'v': '加拿大'
            }, {
                'n': '西班牙',
                'v': '西班牙'
            }, {
                'n': '俄罗斯',
                'v': '俄罗斯'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'lang',
            'name': '类型',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '汉语普通话',
                'v': '汉语普通话'
            }, {
                'n': '英语',
                'v': '英语'
            }, {
                'n': '粤语',
                'v': '粤语'
            }, {
                'n': '闽南语',
                'v': '闽南语'
            }, {
                'n': '韩语',
                'v': '韩语'
            }, {
                'n': '日语',
                'v': '日语'
            }, {
                'n': '法语',
                'v': '法语'
            }, {
                'n': '德语',
                'v': '德语'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'year',
            'name': '年份',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '2024',
                'v': '2024'
            }, {
                'n': '2023',
                'v': '2023'
            }, {
                'n': '2022',
                'v': '2022'
            }, {
                'n': '2021',
                'v': '2021'
            }, {
                'n': '2020',
                'v': '2020'
            }, {
                'n': '2019',
                'v': '2019'
            }, {
                'n': '2018',
                'v': '2018'
            }, {
                'n': '2017',
                'v': '2017'
            }, {
                'n': '2016',
                'v': '2016'
            }, {
                'n': '2015',
                'v': '2015'
            }, {
                'n': '2014',
                'v': '2014'
            }, {
                'n': '2013',
                'v': '2013'
            }, {
                'n': '2012',
                'v': '2012'
            }, {
                'n': '2011',
                'v': '2011'
            }, {
                'n': '2010',
                'v': '2010'
            }, {
                'n': '2009',
                'v': '2009'
            }, {
                'n': '2008',
                'v': '2008'
            }, {
                'n': '2007',
                'v': '2007'
            }, {
                'n': '2006',
                'v': '2006'
            }, {
                'n': '2005',
                'v': '2005'
            }, {
                'n': '2004',
                'v': '2004'
            }, {
                'n': '2003',
                'v': '2003'
            }, {
                'n': '2002',
                'v': '2002'
            }, {
                'n': '2001',
                'v': '2001'
            }, {
                'n': '2000',
                'v': '2000'
            }]
        }, {
            'key': 'letter',
            'name': '字母',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': 'A',
                'v': 'A'
            }, {
                'n': 'B',
                'v': 'B'
            }, {
                'n': 'C',
                'v': 'C'
            }, {
                'n': 'D',
                'v': 'D'
            }, {
                'n': 'E',
                'v': 'E'
            }, {
                'n': 'F',
                'v': 'F'
            }, {
                'n': 'G',
                'v': 'G'
            }, {
                'n': 'H',
                'v': 'H'
            }, {
                'n': 'I',
                'v': 'I'
            }, {
                'n': 'J',
                'v': 'J'
            }, {
                'n': 'K',
                'v': 'K'
            }, {
                'n': 'L',
                'v': 'L'
            }, {
                'n': 'M',
                'v': 'M'
            }, {
                'n': 'N',
                'v': 'N'
            }, {
                'n': 'O',
                'v': 'O'
            }, {
                'n': 'P',
                'v': 'P'
            }, {
                'n': 'Q',
                'v': 'Q'
            }, {
                'n': 'R',
                'v': 'R'
            }, {
                'n': 'S',
                'v': 'S'
            }, {
                'n': 'T',
                'v': 'T'
            }, {
                'n': 'U',
                'v': 'U'
            }, {
                'n': 'V',
                'v': 'V'
            }, {
                'n': 'W',
                'v': 'W'
            }, {
                'n': 'X',
                'v': 'X'
            }, {
                'n': 'Y',
                'v': 'Y'
            }, {
                'n': 'Z',
                'v': 'Z'
            }, {
                'n': '0-9',
                'v': '0-9'
            }]
        }, {
            'key': 'by',
            'name': '排序',
            'value': [{
                'n': '时间',
                'v': 'time'
            }, {
                'n': '人气',
                'v': 'hits'
            }, {
                'n': '评分',
                'v': 'score'
            }]
        }],
        '2': [{
            'key': 'class',
            'name': '剧情',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '古装',
                'v': '古装'
            }, {
                'n': '战争',
                'v': '战争'
            }, {
                'n': '青春偶像',
                'v': '青春偶像'
            }, {
                'n': '喜剧',
                'v': '喜剧'
            }, {
                'n': '家庭',
                'v': '家庭'
            }, {
                'n': '犯罪',
                'v': '犯罪'
            }, {
                'n': '动作',
                'v': '动作'
            }, {
                'n': '奇幻',
                'v': '奇幻'
            }, {
                'n': '剧情',
                'v': '剧情'
            }, {
                'n': '历史',
                'v': '历史'
            }, {
                'n': '经典',
                'v': '经典'
            }, {
                'n': '乡村',
                'v': '乡村'
            }, {
                'n': '情景',
                'v': '情景'
            }, {
                'n': '商战',
                'v': '商战'
            }, {
                'n': '网剧',
                'v': '网剧'
            }, {
                'n': '其他',
                'v': '其他'
            }]
        }, {
            'key': 'area',
            'name': '地区',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '中国大陆',
                'v': '中国大陆'
            }, {
                'n': '中国香港',
                'v': '中国香港'
            }, {
                'n': '中国台湾',
                'v': '中国台湾'
            }, {
                'n': '美国',
                'v': '美国'
            }, {
                'n': '韩国',
                'v': '韩国'
            }, {
                'n': '日本',
                'v': '日本'
            }, {
                'n': '泰国',
                'v': '泰国'
            }, {
                'n': '新加坡',
                'v': '新加坡'
            }, {
                'n': '马来西亚',
                'v': '马来西亚'
            }, {
                'n': '印度',
                'v': '印度'
            }, {
                'n': '英国',
                'v': '英国'
            }, {
                'n': '法国',
                'v': '法国'
            }, {
                'n': '加拿大',
                'v': '加拿大'
            }, {
                'n': '西班牙',
                'v': '西班牙'
            }, {
                'n': '俄罗斯',
                'v': '俄罗斯'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'lang',
            'name': '类型',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '汉语普通话',
                'v': '汉语普通话'
            }, {
                'n': '英语',
                'v': '英语'
            }, {
                'n': '粤语',
                'v': '粤语'
            }, {
                'n': '闽南语',
                'v': '闽南语'
            }, {
                'n': '韩语',
                'v': '韩语'
            }, {
                'n': '日语',
                'v': '日语'
            }, {
                'n': '法语',
                'v': '法语'
            }, {
                'n': '德语',
                'v': '德语'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'year',
            'name': '年份',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '2024',
                'v': '2024'
            }, {
                'n': '2023',
                'v': '2023'
            }, {
                'n': '2022',
                'v': '2022'
            }, {
                'n': '2021',
                'v': '2021'
            }, {
                'n': '2020',
                'v': '2020'
            }, {
                'n': '2019',
                'v': '2019'
            }, {
                'n': '2018',
                'v': '2018'
            }, {
                'n': '2017',
                'v': '2017'
            }, {
                'n': '2016',
                'v': '2016'
            }, {
                'n': '2015',
                'v': '2015'
            }, {
                'n': '2014',
                'v': '2014'
            }, {
                'n': '2013',
                'v': '2013'
            }, {
                'n': '2012',
                'v': '2012'
            }, {
                'n': '2011',
                'v': '2011'
            }, {
                'n': '2010',
                'v': '2010'
            }, {
                'n': '2009',
                'v': '2009'
            }, {
                'n': '2008',
                'v': '2008'
            }, {
                'n': '2007',
                'v': '2007'
            }, {
                'n': '2006',
                'v': '2006'
            }, {
                'n': '2005',
                'v': '2005'
            }, {
                'n': '2004',
                'v': '2004'
            }, {
                'n': '2003',
                'v': '2003'
            }, {
                'n': '2002',
                'v': '2002'
            }, {
                'n': '2001',
                'v': '2001'
            }, {
                'n': '2000',
                'v': '2000'
            }]
        }, {
            'key': 'letter',
            'name': '字母',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': 'A',
                'v': 'A'
            }, {
                'n': 'B',
                'v': 'B'
            }, {
                'n': 'C',
                'v': 'C'
            }, {
                'n': 'D',
                'v': 'D'
            }, {
                'n': 'E',
                'v': 'E'
            }, {
                'n': 'F',
                'v': 'F'
            }, {
                'n': 'G',
                'v': 'G'
            }, {
                'n': 'H',
                'v': 'H'
            }, {
                'n': 'I',
                'v': 'I'
            }, {
                'n': 'J',
                'v': 'J'
            }, {
                'n': 'K',
                'v': 'K'
            }, {
                'n': 'L',
                'v': 'L'
            }, {
                'n': 'M',
                'v': 'M'
            }, {
                'n': 'N',
                'v': 'N'
            }, {
                'n': 'O',
                'v': 'O'
            }, {
                'n': 'P',
                'v': 'P'
            }, {
                'n': 'Q',
                'v': 'Q'
            }, {
                'n': 'R',
                'v': 'R'
            }, {
                'n': 'S',
                'v': 'S'
            }, {
                'n': 'T',
                'v': 'T'
            }, {
                'n': 'U',
                'v': 'U'
            }, {
                'n': 'V',
                'v': 'V'
            }, {
                'n': 'W',
                'v': 'W'
            }, {
                'n': 'X',
                'v': 'X'
            }, {
                'n': 'Y',
                'v': 'Y'
            }, {
                'n': 'Z',
                'v': 'Z'
            }, {
                'n': '0-9',
                'v': '0-9'
            }]
        }, {
            'key': 'by',
            'name': '排序',
            'value': [{
                'n': '时间',
                'v': 'time'
            }, {
                'n': '人气',
                'v': 'hits'
            }, {
                'n': '评分',
                'v': 'score'
            }]
        }],
        '3': [{
            'key': 'class',
            'name': '剧情',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '情感',
                'v': '情感'
            }, {
                'n': '科幻',
                'v': '科幻'
            }, {
                'n': '热血',
                'v': '热血'
            }, {
                'n': '推理',
                'v': '推理'
            }, {
                'n': '搞笑',
                'v': '搞笑'
            }, {
                'n': '冒险',
                'v': '冒险'
            }, {
                'n': '萝莉',
                'v': '萝莉'
            }, {
                'n': '校园',
                'v': '校园'
            }, {
                'n': '动作',
                'v': '动作'
            }, {
                'n': '机战',
                'v': '机战'
            }, {
                'n': '运动',
                'v': '运动'
            }, {
                'n': '战争',
                'v': '战争'
            }, {
                'n': '少年',
                'v': '少年'
            }, {
                'n': '少女',
                'v': '少女'
            }, {
                'n': '社会',
                'v': '社会'
            }, {
                'n': '原创',
                'v': '原创'
            }, {
                'n': '亲子',
                'v': '亲子'
            }, {
                'n': '益智',
                'v': '益智'
            }, {
                'n': '励志',
                'v': '励志'
            }, {
                'n': '其他',
                'v': '其他'
            }]
        }, {
            'key': 'area',
            'name': '地区',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '中国大陆',
                'v': '中国大陆'
            }, {
                'n': '中国香港',
                'v': '中国香港'
            }, {
                'n': '中国台湾',
                'v': '中国台湾'
            }, {
                'n': '美国',
                'v': '美国'
            }, {
                'n': '韩国',
                'v': '韩国'
            }, {
                'n': '日本',
                'v': '日本'
            }, {
                'n': '泰国',
                'v': '泰国'
            }, {
                'n': '新加坡',
                'v': '新加坡'
            }, {
                'n': '马来西亚',
                'v': '马来西亚'
            }, {
                'n': '印度',
                'v': '印度'
            }, {
                'n': '英国',
                'v': '英国'
            }, {
                'n': '法国',
                'v': '法国'
            }, {
                'n': '加拿大',
                'v': '加拿大'
            }, {
                'n': '西班牙',
                'v': '西班牙'
            }, {
                'n': '俄罗斯',
                'v': '俄罗斯'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'lang',
            'name': '类型',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '汉语普通话',
                'v': '汉语普通话'
            }, {
                'n': '英语',
                'v': '英语'
            }, {
                'n': '粤语',
                'v': '粤语'
            }, {
                'n': '闽南语',
                'v': '闽南语'
            }, {
                'n': '韩语',
                'v': '韩语'
            }, {
                'n': '日语',
                'v': '日语'
            }, {
                'n': '法语',
                'v': '法语'
            }, {
                'n': '德语',
                'v': '德语'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'year',
            'name': '年份',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '2024',
                'v': '2024'
            }, {
                'n': '2023',
                'v': '2023'
            }, {
                'n': '2022',
                'v': '2022'
            }, {
                'n': '2021',
                'v': '2021'
            }, {
                'n': '2020',
                'v': '2020'
            }, {
                'n': '2019',
                'v': '2019'
            }, {
                'n': '2018',
                'v': '2018'
            }, {
                'n': '2017',
                'v': '2017'
            }, {
                'n': '2016',
                'v': '2016'
            }, {
                'n': '2015',
                'v': '2015'
            }, {
                'n': '2014',
                'v': '2014'
            }, {
                'n': '2013',
                'v': '2013'
            }, {
                'n': '2012',
                'v': '2012'
            }, {
                'n': '2011',
                'v': '2011'
            }, {
                'n': '2010',
                'v': '2010'
            }, {
                'n': '2009',
                'v': '2009'
            }, {
                'n': '2008',
                'v': '2008'
            }, {
                'n': '2007',
                'v': '2007'
            }, {
                'n': '2006',
                'v': '2006'
            }, {
                'n': '2005',
                'v': '2005'
            }, {
                'n': '2004',
                'v': '2004'
            }, {
                'n': '2003',
                'v': '2003'
            }, {
                'n': '2002',
                'v': '2002'
            }, {
                'n': '2001',
                'v': '2001'
            }, {
                'n': '2000',
                'v': '2000'
            }]
        }, {
            'key': 'letter',
            'name': '字母',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': 'A',
                'v': 'A'
            }, {
                'n': 'B',
                'v': 'B'
            }, {
                'n': 'C',
                'v': 'C'
            }, {
                'n': 'D',
                'v': 'D'
            }, {
                'n': 'E',
                'v': 'E'
            }, {
                'n': 'F',
                'v': 'F'
            }, {
                'n': 'G',
                'v': 'G'
            }, {
                'n': 'H',
                'v': 'H'
            }, {
                'n': 'I',
                'v': 'I'
            }, {
                'n': 'J',
                'v': 'J'
            }, {
                'n': 'K',
                'v': 'K'
            }, {
                'n': 'L',
                'v': 'L'
            }, {
                'n': 'M',
                'v': 'M'
            }, {
                'n': 'N',
                'v': 'N'
            }, {
                'n': 'O',
                'v': 'O'
            }, {
                'n': 'P',
                'v': 'P'
            }, {
                'n': 'Q',
                'v': 'Q'
            }, {
                'n': 'R',
                'v': 'R'
            }, {
                'n': 'S',
                'v': 'S'
            }, {
                'n': 'T',
                'v': 'T'
            }, {
                'n': 'U',
                'v': 'U'
            }, {
                'n': 'V',
                'v': 'V'
            }, {
                'n': 'W',
                'v': 'W'
            }, {
                'n': 'X',
                'v': 'X'
            }, {
                'n': 'Y',
                'v': 'Y'
            }, {
                'n': 'Z',
                'v': 'Z'
            }, {
                'n': '0-9',
                'v': '0-9'
            }]
        }, {
            'key': 'by',
            'name': '排序',
            'value': [{
                'n': '时间',
                'v': 'time'
            }, {
                'n': '人气',
                'v': 'hits'
            }, {
                'n': '评分',
                'v': 'score'
            }]
        }],
        '4': [{
            'key': 'class',
            'name': '剧情',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '爽文',
                'v': '爽文'
            }]
        }, {
            'key': 'area',
            'name': '地区',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '内地',
                'v': '内地'
            }]
        }, {
            'key': 'lang',
            'name': '类型',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '汉语普通话',
                'v': '汉语普通话'
            }, {
                'n': '英语',
                'v': '英语'
            }, {
                'n': '粤语',
                'v': '粤语'
            }, {
                'n': '闽南语',
                'v': '闽南语'
            }, {
                'n': '韩语',
                'v': '韩语'
            }, {
                'n': '日语',
                'v': '日语'
            }, {
                'n': '法语',
                'v': '法语'
            }, {
                'n': '德语',
                'v': '德语'
            }, {
                'n': '其它',
                'v': '其它'
            }]
        }, {
            'key': 'year',
            'name': '年份',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': '2024',
                'v': '2024'
            }, {
                'n': '2023',
                'v': '2023'
            }, {
                'n': '2022',
                'v': '2022'
            }, {
                'n': '2021',
                'v': '2021'
            }, {
                'n': '2020',
                'v': '2020'
            }, {
                'n': '2019',
                'v': '2019'
            }, {
                'n': '2018',
                'v': '2018'
            }, {
                'n': '2017',
                'v': '2017'
            }, {
                'n': '2016',
                'v': '2016'
            }, {
                'n': '2015',
                'v': '2015'
            }, {
                'n': '2014',
                'v': '2014'
            }, {
                'n': '2013',
                'v': '2013'
            }, {
                'n': '2012',
                'v': '2012'
            }, {
                'n': '2011',
                'v': '2011'
            }, {
                'n': '2010',
                'v': '2010'
            }, {
                'n': '2009',
                'v': '2009'
            }, {
                'n': '2008',
                'v': '2008'
            }, {
                'n': '2007',
                'v': '2007'
            }, {
                'n': '2006',
                'v': '2006'
            }, {
                'n': '2005',
                'v': '2005'
            }, {
                'n': '2004',
                'v': '2004'
            }, {
                'n': '2003',
                'v': '2003'
            }, {
                'n': '2002',
                'v': '2002'
            }, {
                'n': '2001',
                'v': '2001'
            }, {
                'n': '2000',
                'v': '2000'
            }]
        }, {
            'key': 'letter',
            'name': '字母',
            'init': '',
            'value': [{
                'n': '全部',
                'v': ''
            }, {
                'n': 'A',
                'v': 'A'
            }, {
                'n': 'B',
                'v': 'B'
            }, {
                'n': 'C',
                'v': 'C'
            }, {
                'n': 'D',
                'v': 'D'
            }, {
                'n': 'E',
                'v': 'E'
            }, {
                'n': 'F',
                'v': 'F'
            }, {
                'n': 'G',
                'v': 'G'
            }, {
                'n': 'H',
                'v': 'H'
            }, {
                'n': 'I',
                'v': 'I'
            }, {
                'n': 'J',
                'v': 'J'
            }, {
                'n': 'K',
                'v': 'K'
            }, {
                'n': 'L',
                'v': 'L'
            }, {
                'n': 'M',
                'v': 'M'
            }, {
                'n': 'N',
                'v': 'N'
            }, {
                'n': 'O',
                'v': 'O'
            }, {
                'n': 'P',
                'v': 'P'
            }, {
                'n': 'Q',
                'v': 'Q'
            }, {
                'n': 'R',
                'v': 'R'
            }, {
                'n': 'S',
                'v': 'S'
            }, {
                'n': 'T',
                'v': 'T'
            }, {
                'n': 'U',
                'v': 'U'
            }, {
                'n': 'V',
                'v': 'V'
            }, {
                'n': 'W',
                'v': 'W'
            }, {
                'n': 'X',
                'v': 'X'
            }, {
                'n': 'Y',
                'v': 'Y'
            }, {
                'n': 'Z',
                'v': 'Z'
            }, {
                'n': '0-9',
                'v': '0-9'
            }]
        }, {
            'key': 'by',
            'name': '排序',
            'value': [{
                'n': '时间',
                'v': 'time'
            }, {
                'n': '人气',
                'v': 'hits'
            }, {
                'n': '评分',
                'v': 'score'
            }]
        }],
    };

    return JSON.stringify({
        class: classes,
        filters: filterObj,
    });
}

async function homeVod() {}

async function category(tid, pg, filter, extend) {
    if (pg <= 0) pg = 1;
    const area = getFilterUrlPart(extend, 'area');
    const clazz = getFilterUrlPart(extend, 'class');
    const by = getFilterUrlPart(extend, 'by');
    const lang = getFilterUrlPart(extend, 'lang');
    const letter = getFilterUrlPart(extend, 'letter');
    const year = getFilterUrlPart(extend, 'year');
    let page = '';
    if (pg > 1) {
        page = '/page/' + pg;
    }
    const link = HOST + '/show' + area + by + clazz + '/id/' + tid + lang + letter + page + year + '.html';
    const html = await request(link);
    const $ = load(html);
    const items = $('div.stui-vodlist__box');
    let videos = _.map(items, (item) => {
        const $item = $(item);
        const it = $item.find('a:first')[0];
        const remarks = $item.find('span.pic-text').text().trim();
        return {
            vod_id: it.attribs.href.replace(/.*?\/detail\/(.*).html/g, '$1'),
            vod_name: it.attribs.title,
            vod_pic: it.attribs['data-original'],
            vod_remarks: remarks || '',
        };
    });
    const hasMore = $('ul.stui-page > li > a:contains(下一页)').length > 0;
    const pgCount = hasMore ? parseInt(pg) + 1 : parseInt(pg);
    const limit = 24;
    return JSON.stringify({
        page: parseInt(pg),
        pagecount: pgCount,
        limit: limit,
        total: limit * pgCount,
        list: videos,
    });
}

function getFilterUrlPart(extend, part) {
    let result = '';
    if (extend[part]) {
        result = '/' + part + '/' + extend[part];
    }
    return result;
}

async function detail(id) {
    const html = await request(HOST + '/detail/' + id + '.html');
    const $ = load(html);
    const vod = {
        vod_id: id,
        vod_name: $('.stui-content__thumb a:first').attr('title').trim(),
        vod_area: $('.stui-content__detail span:contains(地区：)').next().text(),
        vod_year: $('.stui-content__detail span:contains(年份：)').next().text(),
        vod_director: $('.stui-content__detail p.data:contains(导演：)').text().substring(3).replaceAll('&nbsp;',' '),
        vod_actor: $('.stui-content__detail p.data:contains(主演：)').text().substring(3).replaceAll('&nbsp;',' '),
        vod_pic: $('.hl-full-box .hl-item-thumb').attr('data-original'),
        vod_remarks: $('.stui-content__thumb span.pic-text').text().replaceAll('&nbsp;',''),
        vod_content: ' 😁😁😁' + $('div#desc .stui-pannel_bd').text().substring(4).replaceAll('&nbsp;',''),
    };
    const playMap = {};
    const tabs = $('div.playlist h3.title');
    const playlists = $('.stui-content__playlist');
    _.each(tabs, (tab, i) => {
        const from = $(tab).text();
        let list = playlists[i];
        list = $(list).find('li a');
        _.each(list, (it) => {
            const title = it.children[0].data;
            const playUrl = it.attribs.href;

            if (!playMap.hasOwnProperty(from)) {
                playMap[from] = [];
            }
            playMap[from].push(title + '$' + playUrl);
        });
    });
    vod.vod_play_from = _.keys(playMap).join('$$$');
    const urls = _.values(playMap);
    const vod_play_url = _.map(urls, (urlist) => {
        return urlist.join('#');
    });
    vod.vod_play_url = vod_play_url.join('$$$');
    return JSON.stringify({
        list: [vod],
    });
}

async function play(flag, id, flags) {
    const link = HOST + id;
    const html = await request(link);
    const $ = load(html);
    const js = JSON.parse($('script:contains(player_)').html().replace('var player_aaaa=', ''));
    const playurl = js.url;
    const result = await request("https://www.baipiao-ys.cc/player/analysis.php?v=" + playurl);
    const encUrl = result.match(/"url":\s*"(.*?)"/)[1];
    console.debug(encUrl);
    const playUrl = rc4(encUrl, '202205051426239465');
    console.debug("playUrl:" + playUrl);




    return JSON.stringify({
        parse: 0,
        url: playUrl,
        header: {
            'User-Agent': UA,
        },
    });
}

function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}


function decode(t) {
    var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    if (!t) return !1;
    t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    var r = "";
    var s, n, i, o;
    var e = 0;
    do {
        s = base64.indexOf(t.charAt(e++));
        n = base64.indexOf(t.charAt(e++));
        i = base64.indexOf(t.charAt(e++));
        o = base64.indexOf(t.charAt(e++));
        r += String.fromCharCode(s << 2 | n >> 4);
        if (64 != i) r += String.fromCharCode((15 & n) << 4 | i >> 2);
        if (64 != o) r += String.fromCharCode((3 & i) << 6 | o);
    } while (e < t.length);
    return r;
}


function rc4(data, key) {
    try {
        var pwd = key || 'ffsirllq';
        var cipher = '';
        var key = [];
        var box = [];
        var pwd_length = pwd.length;
        var data = decode(data);
        var data_length = data.length;
        for (var i = 0; i < 256; i++) {
            key[i] = pwd.split('')[i % pwd_length].charCodeAt();
            box[i] = i;
        }
        for (var j = i = 0; i < 256; i++) {
            j = (j + box[i] + key[i]) % 256;
            tmp = box[i];
            box[i] = box[j];
            box[j] = tmp;
        }
        for (var a = j = i = 0; i < data_length; i++) {
            a = (a + 1) % 256;
            j = (j + box[a]) % 256;
            var tmp = box[a];
            box[a] = box[j];
            box[j] = tmp;
            var k = box[((box[a] + box[j]) % 256)];
            cipher += String.fromCharCode(data.split('')[i].charCodeAt() ^ k);
        }
        return decodeURIComponent(cipher);
    } catch (error) {
        console.debug("error:" + error)
    }
}

async function search(wd, quick) {
    let data = JSON.parse(await request(HOST + '/index.php/ajax/suggest?mid=1&limit=50&wd=' + wd)).list;
    let videos = [];
    for (const vod of data) {
        videos.push({
            vod_id: vod.id,
            vod_name: vod.name,
            vod_pic: vod.pic,
            vod_remarks: '',
        });
    }
    return JSON.stringify({
        list: videos,
    });
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    };
}