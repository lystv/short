<?php
//把下面的代码放进你要加密的PHP页面里面，比如你要给首页：index.php 加密，就把下面代码放在index.php 的最前面
require_once('MkEncrypt.php'); //利用同目录MkEncrypt.php返回信息
 
MkEncrypt('1234');     //这个就是密码
 
?>
