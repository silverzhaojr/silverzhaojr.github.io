---

layout: post
title: 设定 Xperia Z1 自带的远程共享连接电脑
motto: 夫大块载我以形，劳我以生，佚我以老，息我以死。故善生者，乃所以善死也。——《庄子·大宗师》
published: true
date: 2014-10-29 16:00
tags: 奇技淫巧

---

最近在乱折腾手中的 Z1 时，忽然发现原来自从 4.4.4 后，手机竟然自带了连接电脑共享的功能，而之前一直是通过 X-plore 中的“连接 LAN”功能来设定的。

研究了一阵后，摸索出具体方法如下，这里使用的手机是国行 L39h，固件版本为 14.4.A.0.108。

<!-- more -->

打开“设定”=>“存储设备”=>“远程共享”，如图所示：

[![示图1][pic-01]][pic-01]

点击右上角的“+”，选择“Windows 共享”，如图：

[![示图2][pic-02]][pic-02]

这里需要填写一些设定信息，如图：

[![示图3][pic-03]][pic-03]

具体说明如下：

“显示名称”：填写自己喜欢的名字，最好是字母，因为在下面一行可以看到，连接共享后，会将文件夹挂载到本地路径 */storage/remote/* 目录下。比如这里写的名称是 *hello*，连接上电脑后会被挂载到目录 */storage/remote/hello/* 下；

“主机”：填写电脑的 IP 地址，可以在系统的“网络和共享中心”里查看。要保证手机和电脑位于同一个局域网里。这里填写的是 *192.168.100.100*；

“共享名称”：填写电脑端设定的共享文件夹名称。在 Windows 系统中，默认打开了各个盘符的隐藏共享，其共享名称分别是 C$，D$，……注意在 Windows Vista 及以上的系统中，由于 UAC 权限控制的关系，默认无法远程访问这些隐藏共享，可以通过新建注册表项解除该限制，如下：

在 *HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System* 下，新建类型为 *DWORD (32-bit) Value* 的键值，其名称为 *LocalAccountTokenFilterPolicy*，将其值设定为 *1*；

当然，若是担心隐私问题，不想打开这些默认共享，则自己建立共享文件夹也可以。这里使用系统的默认 D盘共享，省得再在电脑端设置共享了，其共享名称为 *D$*。

“用户名”：电脑登录的用户名；

“密码”：电脑登录的密码；

默认情况下，连接上电脑后，挂载的文件夹是有读取/写入权限的，可以在“显示高级设定”中将其禁止，只需勾选上“安装为只读”，如图：

[![示图4][pic-04]][pic-04]

填好后，点击“保存”。

[![示图5][pic-05]][pic-05]

好了，现在连接该共享试试。点击旁边的“关闭”按钮，可以看到随后顶端会跳出来“已连接远程共享”的通知。如图：

[![示图6][pic-06]][pic-06]

这里点击“浏览”，会调用系统自带的文件管理器 File Commander 打开共享文件夹，如图：

[![示图7][pic-07]][pic-07]

[![示图8][pic-08]][pic-08]

当然，也可以用自己喜欢的文件管理器如 X-plore，Root Explorer 等打开路径 */storage/remote/hello/*，如图：

[![示图9][pic-09]][pic-09]

[![示图1][pic-10]][pic-10]

若是到“相册”里，在“设备”选项中也可以看到连接上的文件夹，如图：

[![示图1][pic-11]][pic-11]

[![示图1][pic-12]][pic-12]

搞定！现在爱怎么玩就怎么玩吧，可以在手机上打开电脑中的视频或者图片等，也可以将电脑端的文件复制到手机里，不再需要安装其他应用了。

[![示图1][pic-13]][pic-13]

（完）

------

参考资料：

> 1. [Access Denied Trying to Connect to Administrative Shares C$, D$ etc.][ref-1]

[ref-1]: https://helgeklein.com/blog/2011/08/access-denied-trying-to-connect-to-administrative-shares-on-windows-7/

[pic-01]: https://ucry3q.dm2302.livefilestore.com/y2pcB5OWN0eo2f7wwz1-W9zX63pqP6pmTXCld_tEPYMlhm7yJREjT4sFf8Bm999Mx9Jv8AVT0N2_UvpA3G1kNjHhgX2hTqg0au1vby9sgg49Rg/2014-10-29.01.jpg?psid=1
[pic-02]: https://ucry3q-ch3301.files.1drv.com/y2pjNgEEtYY_fMumSTTRQT2kdtR9euvPGQp_MwQq4szbmz_feSuZ8wHv27rMV_adJ6WWi6YO37YuoXflM8WBMG9Svefil_esFgrBJ3UVZB8sNM/2014-10-29.02.jpg?psid=1
[pic-03]: https://ucry3q.dm2302.livefilestore.com/y2pL38KD3JCS0OFKlKXYhqHVny3DJj_mRBeYorqpW4qvgBb8kV977xoceP3SlJzsy07gq8rfYSeNrAK19L3NhAp2U6lVyWfp-roRpYzuElINls/2014-10-29.03.jpg?psid=1
[pic-04]: https://ucry3q.dm2302.livefilestore.com/y2pCyo6ESd0xZOVr9hYiMX0ZaVBkwpI7pqR_f2OGBOvUhUDBnJeu4hLNrhK7BpWjeCs9lCXN4A8SrKqNCvCSkk45OeGxB5AIPrbiFpRVrdRII0/2014-10-29.04.jpg?psid=1
[pic-05]: https://ucry3q.dm2302.livefilestore.com/y2pZ2UdAfbJ-q7os4NaTEH5kknOl56qvnHaOBY9Msinq4Vb5lz8hkqpyUL-dXYMYUl7aPJOsoiPVw1ua15RiATYaCHLc_uU-b45bL-Ev7Yc9gU/2014-10-29.05.jpg?psid=1
[pic-06]: https://ucry3q.dm2302.livefilestore.com/y2phzZ5WMlzbgJsfiv7MF7FWaBKgjjsp235MuIHxEfv3DcANmFnT2dvD3VhtVuUZpebA-FT93TSLcA63QBM-UmjliU0clBwQeGFUR446cloSQc/2014-10-29.06.png?psid=1
[pic-07]: https://ucry3q.dm2302.livefilestore.com/y2pIhavWojrmlCqMMAwjXbMueqMGEFXDtYyz9xAG8wv_jaj_k2A2l2LoOPXK_sI51sZO9otrumTfIrbW3hh14i0-gDkMoCozZH5puLVSkQ1M9Q/2014-10-29.07.jpg?psid=1
[pic-08]: https://ucry3q.dm2302.livefilestore.com/y2p5Sncdc-vr7cAFvTzvhFJiWE60o-a_IIF2Dwz6jDPS5Yw1PUUN18kWGo4Afxz38yEb5-Zu6jzhMbiiQDH0U4AjLVUMSs8MZeNtmYpc9B7cnc/2014-10-29.08.jpg?psid=1
[pic-09]: https://ucry3q.dm2302.livefilestore.com/y2pKvGtsl-WTFC2A7MC847XHVGSyEYdVRON7OlpywtPxwLZHlao3rYcxHZM0ZLVZGWGls7DcDB2Lrx2VBU5mNXEAH7OIlsfRXV_6n5Ugega6-g/2014-10-29.09.jpg?psid=1
[pic-10]: https://ucry3q.dm2302.livefilestore.com/y2p-BD-my4XHgHqVCbLM1F-wpFhlquS-QaB7P5DgKqdMyf3xczAI4fQ62WgtDyYhX10KAYqTlyii-F8UyZexW2v4mdq_Nm2AEkGX-fB3cz68Y4/2014-10-29.10.jpg?psid=1
[pic-11]: https://ucry3q.dm2302.livefilestore.com/y2px1yilPy6zHd1_UHX95ILTbgv0mf_Fvbh42tYXQd1gwE2vClRP1buBUTOCNt5n7B8_P2otNB6GKrkqbL7qtlSmuAIFSnvUbDOP0BRbSgeTHM/2014-10-29.11.jpg?psid=1
[pic-12]: https://ucry3q.dm2302.livefilestore.com/y2pflcaAkhF_2C5A38Zt7gxnfEhuBhE3LPulXvC85pi9L4FuXVYwLopK7otS1c9gaFHbGhhcjvJ0zGIL-ZcsDae-kRI-k_fdvIdIdRqWdEv-EU/2014-10-29.12.jpg?psid=1
[pic-13]: https://ucry3q.dm2302.livefilestore.com/y2phOAUBdZRSbEdmq0CJKbrtuDawK1Uz8WH8I2whfZqpH5TO9a7aqHZx8m8qsv8BZai9LexizEzuXtg72MMZUm-ZeLEUq4aZ4-0HkvzqXUR9F8/2014-10-29.13.png?psid=1
