---

layout: post
title: Midori 浏览器中文显示空白的问题（上）
motto: 道隐于小成，言隐于荣华。——《庄子·齐物论》
date: 2013-10-21 16:16
tags: Linux

---

[Midori][ref-1] 是一个轻量级的使用 Webkit 内核的浏览器，这个浏览器我平时很少用，不过由于它是 Webkit 内核的，与火狐的不一样，所以便装上了偶尔用来测试网页。

话说前一阵子打开 Midori 时，忽然发现不能其正常显示网页了。比如，网易首页就会是下面这个样子：

<!-- more -->

[![网易首页截图1][pic-20131021.01]][pic-20131021.01]

呵，好雪！白茫茫的一片，有诗为证：

> 才见岭头云似盖，已惊岩下雪如尘。

> 千峰笋石千株玉，万树松萝万朵银。

不好意思，忍不住诗兴大发了……

看着这茫茫一片，我的心也不禁茫然了：什么情况？虽说平时不怎么用它，可是也不能直接罢工不干了呀！

由于 Archlinux 是滚动升级的发行版，首先想到的就是是否因为系统更新而导致了什么依赖问题，于是连忙去查看日志。一番检查之下，哈哈，果然！

Midori 原本有个库依赖为 `libwebkit`，但是最近更新后，变为了 `webkitgtk2`。网上搜索了下，这个 `webkitgtk2` 好像确实有点问题，但是似乎和我这个问题没有什么关系。好吧，看来看去也不知道到底问题在哪，那先降级 Midori 试试。

由于原有的 [Arch Rollback Machine (ARM)][ref-2] 已被关闭了，所以只好到 [Midori 的官网][ref-1]上下载了以前的版本。然而，一连试了好几个之前的版本，问题却依然还在。

怒了！于是决定自己编译 `webkitgtk2`。研究了一下相关的编译选项后，开工！最后，在等了足足一个小时却依然还未编译完成的痛苦状态中终于决定放弃这个方法。

继续苦坐着苦思冥想绞尽脑汁了几个小时，实在拿这个问题没辙了。唉，没办法，只能先放着了，待以后哪天忽然小宇宙爆发了再来解决。

（待续……）

------

参考链接：

> 1. [Midori: A lightweight, fast, and free web browser][ref-1]
> 2. [The original ARM has been closed on 2013-08-18][ref-2]

[pic-20131021.01]: https://ucry3q.bay.livefilestore.com/y2pc9i_6hSdrxYwJtQ8eyIKy9ryAXjaqGS88vJEnUDDFAAvBhGXc5H9ZKei6fuJk2DRKRAogtThYXl1GLqWkZU80T8YHZMQwu9oMTNDrQQehto/2013-10-21.01.png?psid=1

[ref-1]: http://midori-browser.org/
[ref-2]: https://bbs.archlinux.org/viewtopic.php?pid=1313360#p1313360
