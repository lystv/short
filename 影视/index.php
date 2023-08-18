<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>影视TV*內測版</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.5/dist/sweetalert2.all.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.5/dist/sweetalert2.min.css" rel="stylesheet" />

</head>

<body class="bg-gray-200 text-gray-800">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-lg">
        <div class="container mx-auto flex justify-between py-4 px-8">
            <!-- 左边首页链接 -->
            <a href="/影视/" class="text-xl font-bold" title="返回首页">首页</a>
         
            <!-- 右边导航 -->
            <div class="space-x-4">
                <a href="/影视/" class="text-xl font-bold" target="_blank" title="影視*正式版更新詳情與下載">正式版</a>
                <a href="https://t.me/fongmi_release" class="transition-all duration-150 text-gray-700 hover:text-blue-500" target="_blank" title="蜂蜜的影视APP与爬虫jar包发布频道">TG频道</a>
                <a href="https://t.me/tvb_ys" class="transition-all duration-150 text-gray-700 hover:text-blue-500" target="_blank" title="𝓛𝔂创建的影视&TVB相关频道">𝓛𝔂频道</a>
                <a href="https://t.me/fongmi_offical" class="transition-all duration-150 text-gray-700 hover:text-blue-500" target="_blank" title="蜂蜜的影视APP官方交流群">TG交流群</a>
                <a href="https://github.com/fongmi/tv" class="transition-all duration-150 text-gray-700 hover:text-blue-500" target="_blank" title="蜂蜜的影視APP开源仓库">开源仓库</a>
                <a href="http://lytv.gq" class="transition-all duration-150 text-gray-700 hover:text-blue-500" target="_blank" title="𝓛𝔂创建的短链4位随机服务">短链</a>
              <a href="http://blog.lytv.cf" class="transition-all duration-150 text-gray-700 hover:text-blue-500" target="_blank" title="𝓛𝔂的博客">博客</a>
            </div>
        </div>
    </nav>

    <!-- 容器 
        p_1="https://gh-proxy.com/https://raw.githubusercontent.com/FongMi/TV/dev/release/mobile-python-armeabi_v7a.apk"
        p_2="https://gh-proxy.com/https://raw.githubusercontent.com/FongMi/TV/dev/release/mobile-python-armeabi_v7a.apk"
        p_3="https://gh-proxy.com/https://raw.githubusercontent.com/FongMi/TV/dev/release/leanback-python-armeabi_v7a.apk"
        p_4="https://gh-proxy.com/https://raw.githubusercontent.com/FongMi/TV/dev/release/leanback-python-armeabi_v7a.apk"
        p_5="https://gh-proxy.com/https://raw.githubusercontent.com/FongMi/TV/kitkat/release/leanback.apk"
    -->
    <div class="container mx-auto mt-8">
        <div class="flex flex-col md:flex-row">
            <!-- 左边文字 -->
            <div class="w-full md:w-1/3 p-8 flex flex-col justify-center">
                <h2 class="text-center text-4xl font-bold mb-4">影视TV</h2>
                                <p class="text-center">『免费使用、广告切片』</p>
                <p class="text-center">『高清直播、视频投屏』</p>
                <p class="text-center">『同步记录、自动换源』</p>
                <p class="text-center">『轨道切换、记忆播放』</p>
                <p class="text-center">『片头片尾、快捷标记』</p>
                <p class="text-center" style="font-size:17px;"color: blue;">
                  随机一言：<?php
$sj="https://tenapi.cn/v2/yiyan";
$xs=`curl $sj`;
echo $xs;
?>
                </p>
                <!-- 按钮行 1 -->
                <div class="flex mt-4 justify-center">
                    <a href="#download" title="适用电视Java+Js 构架：ARM_v8/64"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">APP下载</a>
                </div>
            <!-- 右边展示图 -->
            <div class="w-full md:w-2/3 p-8 relative">
                <div class="swiper-container overflow-hidden">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://xhdwc.tk/fm/img/03.webp" alt="Image 1" class="w-full rounded-lg">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://xhdwc.tk/fm/img/02.webp" alt="Image 2" class="w-full rounded-lg">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://xhdwc.tk/fm/img/01.webp" alt="Image 3" class="w-full rounded-lg">
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto mt-8 bg-white rounded-lg border border-gray-300 p-4" style="font-size:35px；">
    <h2 style="font-size:20px;font-weight: bold;">各设备版本推荐：</h2>
            <p>手机:📱py-v7a/📱py-v8a&nbsp;&nbsp;&nbsp;&nbsp;平板:📱py-v7a &nbsp;&nbsp;&nbsp;&nbsp;5.1++电视:📺py-v7a &nbsp;&nbsp;&nbsp;&nbsp;4.1-4.4电视:4.1📺py-v7a</p>
            <p>版本区别：py版比js版多支持月佬的py站源，v7a即32位，v8a即64位。32/64位是设备核心支持位数</p>
     
            
       
    </div>
    <div class="container mx-auto mt-8 bg-white rounded-lg border border-gray-300 p-4">
        <p>
        <h2 style="font-size:20px;font-weight: bold;">影视APP简介：</h2>
        <?php
            $tvb="http://doy.lytv.gq/影视/ysjs.txt";
            $text = `curl $tvb`; // 读取文本文件的内容
            $text = nl2br($text); // 将文本中的换行符替换为 <br> 标签
            echo $text; // 使用 echo 输出带有 <br> 标签的文本内容
            ?>  
            </p>
    </div>
        
    </div>
    </div>
    <div class="container mx-auto mt-8">
    <h2 class="text-center text-3xl font-bold my-4">最新版本更新日誌</h2>
    <div class="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
    
        <p class="bg-white rounded-lg border border-gray-300 p-4">
        <?php
$tvb="https://tvb.vv67.repl.co/影视/";
$rz=$tvb . "1.json";
$js="https://raw.githubusercontent.com/fongmi/tv/release/release/mobile.json";
$str=`curl $js`;
if (json_decode($str) != null) {
    // 字符串是一个合法的JSON字符串
    $str=`curl $rz`;
    $obj = json_decode($str);
    echo '影视*手機正式版: ' . $obj->name . '<br>';
    echo nl2br($obj->desc);
} else {
    // 字符串不是一个合法的JSON字符串
    echo '蜂蜜刪庫跑路了';
}
?>
        </p>
        <p class="bg-white rounded-lg border border-gray-300 p-4">
         <?php
$tvb="https://tvb.vv67.repl.co/影视/";
$rz=$tvb . "2.json";
$js="https://raw.githubusercontent.com/fongmi/tv/dev/release/mobile.json";
$str=`curl $js`;
if (json_decode($str) != null) {
    // 字符串是一个合法的JSON字符串
    $str=`curl $rz`;
    $obj = json_decode($str);
    echo '影视*手機內測版: ' . $obj->name . '<br>';
    echo nl2br($obj->desc);
} else {
    // 字符串不是一个合法的JSON字符串
    echo '蜂蜜刪庫跑路了';
}
?>
        </p>
         <p class="bg-white rounded-lg border border-gray-300 p-4">
        <?php
$tvb="https://tvb.vv67.repl.co/影视/";
$rz=$tvb . "3.json";
$js="https://raw.githubusercontent.com/fongmi/tv/release/release/leanback.json";
$str=`curl $js`;
if (json_decode($str) != null) {
    // 字符串是一个合法的JSON字符串
    $str=`curl $rz`;
    $obj = json_decode($str);
    echo '影视*5.1++電視正式版: ' . $obj->name . '<br>';
    echo nl2br($obj->desc);
} else {
    // 字符串不是一个合法的JSON字符串
    echo '蜂蜜刪庫跑路了';
}
?>
        </p>
        <p class="bg-white rounded-lg border border-gray-300 p-4">
         <?php
$tvb="https://tvb.vv67.repl.co/影视/";
$rz=$tvb . "4.json";
$js="https://raw.githubusercontent.com/fongmi/tv/dev/release/leanback.json";
$str=`curl $js`;
if (json_decode($str) != null) {
    // 字符串是一个合法的JSON字符串
    $str=`curl $rz`;
    $obj = json_decode($str);
    echo '影视*5.1++電視內測版: ' . $obj->name . '<br>';
    echo nl2br($obj->desc);
} else {
    // 字符串不是一个合法的JSON字符串
    echo '蜂蜜刪庫跑路了';
}
?>
        </p>   
        <p class="bg-white rounded-lg border border-gray-300 p-4">
        <?php
$tvb="https://tvb.vv67.repl.co/影视/";
$rz=$tvb . "5.json";
$js="https://raw.githubusercontent.com/fongmi/tv/kitkat/release/leanback.json";
$str=`curl $js`;
if (json_decode($str) != null) {
    // 字符串是一个合法的JSON字符串
    $str=`curl $rz`;
    $obj = json_decode($str);
    echo '影视*4.1-4.4電視版: ' . $obj->name . '<br>';
    echo nl2br($obj->desc);
} else {
    // 字符串不是一个合法的JSON字符串
    echo '蜂蜜刪庫跑路了';
}
?>
        </p>

    </div>
</div>
    <!-- 卡片列表 -->
    <div class="container mx-auto mt-8">
    <h2 style="font-size:25px;font-weight: bold;">接口配置点击复制</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
             <!-- 卡片 1 -->
             <div data-config="http://饭太硬.ga/tv"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/f.png" alt="Card Image" class="w-full">
                <p class="text-center mt-2">饭太硬</p>
            </div>
            <!-- 卡片 2 -->
            <div data-config="https://gh.t4tv.hz.cz/newtang.bmp"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/ts.png" alt="Card Image" class="w-full">
                <p class="text-center mt-2">长老</p>
            </div>
            <!-- 卡片 3 -->
            <div data-config="https://xhdwc.tk/0"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/s0.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">骚零</p>
            </div>
            <!-- 卡片 4 -->
            <div data-config="http://我不是.肥猫.love:63/接口禁止贩卖"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/feim.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">肥猫</p>
            </div>
            <!-- 卡片 5 -->
            <div data-config="https://ghproxy.com/raw.githubusercontent.com/gaotianliuyun/gao/master/js.json"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/gt.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">高天流云Js</p>
            </div>
            <!-- 卡片 6 -->
            <div data-config="https://ghproxy.com/raw.githubusercontent.com/lm317379829/PyramidStore/pyramid/py.json"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/yl.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">月佬Py</p>
            </div>
            <!-- 卡片 7 -->
            <div data-config="http://蜂蜜.eu.org"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/fm.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">蜂蜜(国内1)</p>
                </div>
            <div data-config="https://ts--ly23.repl.co/fmtv"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/fm.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">蜂蜜(国内2)</p>
            </div>
            <div data-config="https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/config.json"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/fm.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">蜂蜜(海外)</p>
            </div>
            <!-- 卡片 8 -->
            <div data-config="https://tvbox.cainisi.cf"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/fm.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">采妮诗XBPQ</p>
            </div>
            <!-- 卡片 9 -->
            <div data-config="https://ghproxy.com/raw.githubusercontent.com/gaotianliuyun/gao/master/XYQ.json"
                class="hover:bg-gray-200 transition-all duration-150 bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-1/3 mx-auto rounded-lg" src="http://doy.lytv.gq/img/fm.jpg" alt="Card Image" class="w-full">
                <p class="text-center mt-2">高天流云XYQ</p>
            </div> 
        </div>
    </div>
     <div class="container mx-auto mt-8 flex flex-col justify-center rounded-lg border-gray-300">
        <h2 class="text-center text-3xl font-bold my-4">APP功能介绍与操作说明</h2>
    </div>
    <div class="mx-auto mt-8 border bg-white rounded-lg px-4 py-5 container text-container max-h-40 overflow-y-auto">

        <?php
            $tvb="http://doy.lytv.gq/影视/ys.txt";
            $text = `curl $tvb`; // 读取文本文件的内容
            $text = nl2br($text); // 将文本中的换行符替换为 <br> 标签
            echo $text; // 使用 echo 输出带有 <br> 标签的文本内容
            ?>  
    </div>

    <footer class="mt-8 bg-white text-black p-4 text-center">
        <p>版权 @fongmi</p>
        <p>页面由 <a href="https://www.nite07.com">Nite07</a> 制作</p>
    </footer>

</body>
<script src="/影视/js/copy.js"></script>
<script src="/影视/js/img.js"></script>
<script src="/影视/js/gd.js"></script>
   
</html>