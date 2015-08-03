---

layout: post
title: 配置 Windows Media Player 12 支持全格式视频
motto: 凫胫虽短，续之则忧；鹤胫虽长，断之则悲。——《庄子·骈拇》
date: 2015-07-21 14:50
tags: 不折腾

---

Win7 自带的 WMP12 播放器外观很漂亮，奈何支持的视频格式却实在有限，如 MKV 或者 FLV 等格式都打不开。而实际上 Win7 自带了许多的视频解码器，打不开那些视频格式只是因为缺少了分离器的支持。

为了让 WMP12 支持其他的视频格式，网上的解决方法多数是安装 [Win7codecs][ref-1] 等第三方解码包。由于安装时会在系统中注册各种各样的组件服务，有时候会把系统搞得很混乱，为此，一直在找一个比较绿色简洁的方法。

<!-- more -->

平时我一直用的是 MPC-HC 播放器，小巧简洁而又基本上支持所有常见的视频格式。从某个版本开始，MPC-HC 弃用了自带的滤镜，转向了更为强大的开源的 LAV Filters。

我用的 MPC-HC 是绿色版的压缩包，将它解压到了 *C:\MyBin\MPC-HC*。用管理员权限打开 cmd.exe，然后输入命令：

    cd /d C:\MyBin\MPC-HC\LAVFilters
    regsvr32 LAVSplitter.ax LAVAudio.ax LAVVideo.ax

然后下载 [Codec Tweak Tool][ref-2]，更改 LAV Filters 的一些配置项。如图所示：

[![图1][pic-1]][pic-1]

[![图2][pic-2]][pic-2]

[![图3][pic-3]][pic-3]

[![图4][pic-4]][pic-4]

[![图1][pic-5]][pic-5]

若是显示的窗口不全，则可以通过导入下面的注册表内容打开托盘图标，这样当 WMP12 使用 LAV Filters 时，可以在任务栏上显示托盘图标：

    Windows Registry Editor Version 5.00
    
    [HKEY_CURRENT_USER\Software\LAV]
    
    [HKEY_CURRENT_USER\Software\LAV\Audio]
    "TrayIcon"=dword:00000001
    
    [HKEY_CURRENT_USER\Software\LAV\Splitter]
    "TrayIcon"=dword:00000001
    
    [HKEY_CURRENT_USER\Software\LAV\Video]
    "TrayIcon"=dword:00000001

这时可以使用 WMP12 打开一个 MKV 或者 FLV 文件试试，应该可以直接打开了。
    
（完）

------

参考资料：
> 1. [Shark007's FREE Codec solutions][ref-1]
> 2. [Codec Tweak Tool][ref-2]
> 3. [WMP外挂LAV作为默认的滤镜（分离器及解码器）——百度经验][ref-3]

[ref-1]: http://shark007.net
[ref-2]: http://www.codecguide.com/download_other.htm
[ref-3]: http://jingyan.baidu.com/article/77b8dc7fc3c7796174eab681.html

[pic-1]: http://7xkj3j.com1.z0.glb.clouddn.com/blog/2015-07-21.01.png
[pic-2]: http://7xkj3j.com1.z0.glb.clouddn.com/blog/2015-07-21.02.png
[pic-3]: http://7xkj3j.com1.z0.glb.clouddn.com/blog/2015-07-21.03.png
[pic-4]: http://7xkj3j.com1.z0.glb.clouddn.com/blog/2015-07-21.04.png
[pic-5]: http://7xkj3j.com1.z0.glb.clouddn.com/blog/2015-07-21.05.png
