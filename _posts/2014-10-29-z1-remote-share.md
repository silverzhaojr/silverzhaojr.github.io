---

layout: post
title: 设定 Xperia Z1 自带的远程共享连接电脑
motto: 夫恬淡寂漠，虚无无为，此天地之平而道德之质也。——《庄子·刻意》
published: false
date: 2014-10-29 16:00
tags: 奇技淫巧

---

最近在乱折腾手中的 Z1 时，忽然发现原来自从 4.4.4 后，手机竟然自带了连接电脑共享的功能，而之前一直是通过 X-plore 中的“连接 LAN”功能来设定的。研究了一阵后，具体方法如下，这里使用的手机是国行 L39h，固件版本为 108：

<!-- more -->

打开“设定”=>“存储设备”=>“安装远程共享”，如图所示：

[![示图1][pic-01]][pic-01]

点击右上角的“+”，选择“Windows 共享”，如图：

[![示图1][pic-01]][pic-01]

这里需要填写一些设定信息，如图：

[![示图1][pic-01]][pic-01]

具体说明如下：

“名称”：填写自己喜欢的名字，最好是字母，因为在下面一行可以看到，连接共享后，会将文件夹挂载到目录 */remote/storage/* 下。比如这里写的名称是 *hello*，连接上电脑后会被挂载到目录 */remote/storage/hello/* 下；

“主机地址”：填写电脑的 IP 地址，可以在系统的“网络和共享中心”里查看。要保证手机和电脑位于同一个局域网里。这里填写的是 *192.168.100.100*；

“共享文件夹”：填写电脑端设定的共享文件夹名称。在 Windows 系统中，默认打开了各个盘符的隐藏共享，其共享名称分别是 C$，D$，……注意在 Windows Vista 及以上的系统中，由于 UAC 权限控制的关系，默认无法远程访问这些隐藏共享，可以通过新建注册表项解除该限制，如下：

在 *HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System* 下，新建类型为 *DWORD (32-bit) Value* 的键值，其名称为 *LocalAccountTokenFilterPolicy*，将其值设定为 *1*；

当然，若是担心隐私问题，不想打开这些默认共享，则自己建立共享文件夹也可以。这里使用系统的默认 D盘共享，省得再要在电脑端设置共享了，其共享名称为 *D$*。

“用户名”：电脑登录的用户名；

“密码”：电脑登录的密码；

默认情况下，连接上电脑后，挂载的文件夹是有读取/写入权限的，可以在“高级设定”中将其禁止，如图：

[![示图1][pic-01]][pic-01]

填好后，点击“确定”。

好了，现在连接该共享试试。点击旁边的“关闭”按钮，可以看到随后顶端会跳出来“连接共享成功”的通知。如图：

[![示图1][pic-01]][pic-01]

这里点击“浏览”，会调用系统自带的 FileCommander 打开共享文件夹，如图：

[![示图1][pic-01]][pic-01]

当然，也可以用自己喜欢的文件管理器如 X-plore，RootExplorer 等打开路径 */remote/storage/hello/*，如图：

[![示图1][pic-01]][pic-01]

若是到“相册”里，在“设备”选项中也可以看到连接上的文件夹，如图：

[![示图1][pic-01]][pic-01]

搞定！现在爱怎么玩就怎么玩吧，可以在手机上打开电脑中的视频或者图片等，也可以将电脑端的文件复制到手机里，不再需要安装其他应用了。

（完）

------

参考资料：

> 1. [Access Denied Trying to Connect to Administrative Shares C$, D$ etc.][ref-1]

[ref-1]: https://helgeklein.com/blog/2011/08/access-denied-trying-to-connect-to-administrative-shares-on-windows-7/

[pic-01]: https://ucry3q.dm2302.livefilestore.com/y2p0huvRRqtUc04vfjaC8DVZ3jxWT31fhjhsZhqgkoHeiPpHAFv28sb_blNg3EEhpMf2flopXtN69iVTR5CALH34AsX7kmr9UFrLQfT3CJ4pxs/2014-06-23.01.jpg?psid=1
