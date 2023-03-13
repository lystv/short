# [利用CF网站的workers和KV存储空间建立自己的短链服务平台](https://cloudflare.com/)
##  1.没有账号的先注册一个并登录
### 点"Workers"(非红圈）
![image](https://user-images.githubusercontent.com/23007737/212094080-4b66b52c-e353-4c23-a6c3-0a739b48f8fd.png)
##  2.点“创建服务”创建服务
![image](https://user-images.githubusercontent.com/23007737/212094540-37f62f68-6cad-4b47-bf96-01c203504f88.png)
##  3.“服务名称”可随意 然后点“创建服务”完成
![image](https://user-images.githubusercontent.com/23007737/212129555-26c1d4b8-bc99-4890-b96e-fa3c25bab5ea.png)
##  4.点第1张图红圈 --- 点“KV”去创建KV空间
![image](https://user-images.githubusercontent.com/23007737/212094970-64e32da9-6bab-4fcd-ab18-c115fb7772b1.png)
##  5.点红圈去创建KV空间
![image](https://user-images.githubusercontent.com/23007737/212095168-86545a16-4da4-45d1-8d1f-3b09a1e6de77.png)
##  6.“命名空间名称”可随意 填写后点“添加”完成空间创建
![image](https://user-images.githubusercontent.com/23007737/212095557-a58d4458-5d16-4beb-a80f-379737257213.png)
##  7.回到第一步  然后点已经完成的那个服务名称（参考第3张图） 点设置--变量
![image](https://user-images.githubusercontent.com/23007737/212096150-c35c4a89-7f5d-43df-b8db-d622bcc24d1c.png)
##  8.下拉找到"KV命名空间绑定" 然后点“添加绑定”
![image](https://user-images.githubusercontent.com/23007737/212096353-4ab759ef-39dd-4a5c-9c68-c15381b8d09e.png)
## 9. 变量名称固定为“LINKS” -- kV命名空间选刚刚创建的那个KV空间名称  --- 点“保存并部署”
![image](https://user-images.githubusercontent.com/23007737/212096829-40080238-7fa7-4fc9-8537-8e899b01901a.png)
##  10.点第7张图中的“快速部署”  ---  复制[index.js](https://lystv.github.io/short/index.js)中的内容替换下图的全部内容 ---点“保存并部署”
![image](https://user-images.githubusercontent.com/23007737/212097443-44df0dad-59ae-4408-b63e-8cb58bea4a7a.png)
##  11.点第4张图第“KV” ----找到刚刚创建的那个KV空间名称 --- 点其后面的“查看“”
![image](https://user-images.githubusercontent.com/23007737/212098055-15348f74-85dc-49f9-95de-7398fc94b0c1.png)
##  12.”秘钥“填”password“  ”值“填”字符串“(可用字符串工具生成，这里以0000为例)  ---点”添加条目“
![image](https://user-images.githubusercontent.com/23007737/212098433-9c51e4cc-0f1c-433d-920e-b93916b81c38.png)
##  13.点左菜单栏顶上的”网站“  -----  没有站点的自己去添加（这里已添加好了），点选择的站点（这里是 ewwe.ml）
![image](https://user-images.githubusercontent.com/23007737/212128445-bdff5172-8102-4a04-9cc8-10f1a6a944ab.png)
##  14.点”DNS“
![image](https://user-images.githubusercontent.com/23007737/212099433-d77f3530-323d-4a70-93e5-fb33d5d174bb.png)
##  15.点”添加记录“
![image](https://user-images.githubusercontent.com/23007737/212099892-cb3a5add-42db-46d4-8b2d-dcba1d57f53d.png)
##  16.”名称“可随意（使用一级填'@')  "ipv4地址”可随意（需按照 8.8.8.8 格式即可）---点“保存”
![image](https://user-images.githubusercontent.com/23007737/212100312-c25df5bf-b100-42b9-b112-221e6475eebf.png)
##  17.点左边的“Workers路由” 
![image](https://user-images.githubusercontent.com/23007737/212100658-46389207-06b8-4609-b6cb-b159c3820c90.png)
##  18.“路由”填刚才DNS添加的记录（这里是”a“记录 ”ewwe.ml“站点 ）为”a.ewwe.ml/*“
![image](https://user-images.githubusercontent.com/23007737/212100998-b324d170-e47b-48c5-beba-1ba4fc2bd423.png)
# 所有部署完成 最后地址“[a.ewwe.ml/0000](http://a.ewwe.ml/0000)”  不知0000是什么的 请往上翻看
