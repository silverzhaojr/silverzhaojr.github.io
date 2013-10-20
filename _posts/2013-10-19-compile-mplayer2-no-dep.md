---

layout: post
title: 最小依赖编译 MPlayer2
motto: 夫天下莫大于秋豪之末，而太山为小；莫寿乎殇子，而彭祖为夭。天地与我并生，而万物与我为一。——《庄子·齐物论》
date: 2013-10-20 15:45
tags: Linux

---

不知道为什么，某天发现 MPlayer2 忽然从源中被移除了，现在要用的话只能自己编译了。

不过还好，在 AUR 上有对应的 [PKGBUILD 文件][ref-1]。看了一下，其一长串的依赖实在让人蛋疼，而其中许多都是我根本不会用到的功能，如红外控制（lirc-utils）和 DVD 支持等。于是想着是否可以编译一个最纯粹的播放器，只要能用来看视频就好了。

<!-- more -->

翻了一下，发现 AUR 上还真有，即 [mplayer2-nodep-git][ref-2]，只有三个和字体相关的依赖，正是我所想要的！于是将其和原来的 PKGBUILD 整合了一下，将可以关闭的功能全部用 `--disable-` 给关了。

在编译过程中，发现 mplayer2-nodep-git 中原有的一个选项 `--disable-fbdev` 会导致编译不过，将其去掉后就可以了。[这里][link-1]是最终可用的 PKGBUILD 文件。

现在感觉 MPlayer2 轻盈多了。

（完）

------

参考资料：

> + [AUR: mplayer2 20130428-4][ref-1]
> + [AUR: mplayer2-nodep-git 20121202-1][ref-2]

[link-1]: http://pan.baidu.com/s/15lNx7
[ref-1]: https://aur.archlinux.org/packages/mplayer2/
[ref-2]: https://aur.archlinux.org/packages/mplayer2-nodep-git/
