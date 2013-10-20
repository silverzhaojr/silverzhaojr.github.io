---

layout: post
title: 更换 GTK 主题为 Oxygen-gtk
motto: 荃者所以在鱼，得鱼而忘荃；蹄者所以在兔，得兔而忘蹄；言者所以在意，得意而忘言。——《庄子·外物》
date: 2013-10-19 14:00
tags: Linux

---

一直很头疼于 GTK3 的主题，不知道为什么，网上看到的许多都是暗色系的主题，很好奇这样的看久了不会觉得压抑吗？反正我是忍受不了。好不容易找到了几个亮色系的如 Faience 等，奈何都不是太满意，比如高亮选中时都是直直的矩形尖角，实在看着不爽。在这个圆角矩形大行其道的年代，就不能紧跟时代潮流，搞个圆角的吗？哎～

<!-- more -->

由于平时用到的 GTK3 程序不是太多，所以也就选了个稍微看得下去的主题一直用了好久。然而今天在打开 Evince 时，忽然觉得不能再忍，遂到网上再次苦苦寻觅。

一番游荡之下，看到了 Oxygen-gtk 主题，之前就一直有见到这个名字，不过也没有放在心上，看到有那么多的人觉得好，于是决定试试。

    # pacman -S oxygen-gtk3
    # pacman -S oxygen-icons

打开个 GTK3 程序看了下，嘿，效果还真不错！欣喜之下，索性又装上了相关的 GTK2 主题：

    # pacman -S oxygen-gtk2

好了，现在统一都用 Oxygen-gtk 主题，看上去感觉好多了。放几张图欣赏一下：

[![窗口截图1][pic-20131019.01]][pic-20131019.01]

[![窗口截图2][pic-20131019.02]][pic-20131019.02]

[![窗口截图3][pic-20131019.03]][pic-20131019.03]

[![窗口截图4][pic-20131019.04]][pic-20131019.04]

（完）

[pic-20131019.01]: https://ucry3q.bay.livefilestore.com/y2puHAvNThU6tKfv9ZA1B2si3mjvGQ3UXwK6gL8Hi8smANtYr3Db8RHzyjXRQAUdfMHTTI2nGHrudIAaQKowdS1_uUj-J1S0MRoGyphcrnPtRc/2013-10-19.01.png?psid=1
[pic-20131019.02]: https://ucry3q.bay.livefilestore.com/y2p1z0CYJjlkD4IrQ4BJhjHStsKGvWrHIdtMUwZvrJjssDbYCgXq908dimFYz50Nf6S1Uxw4YUJagfFrFrpqsP8GzfKB9pkGLrdy0O1_yT2Zec/2013-10-19.02.png?psid=1
[pic-20131019.03]: https://ucry3q.bay.livefilestore.com/y2pjFv0ID12Hh-mLObVJRUqUpEXO5sSvfXq87wfyiTBz7DklHAqSxlFvm6QFFq-nQsQYDg6tGXtz9vdQ69zvvRSylFx_Wb5sctJaXekblGtHf0/2013-10-19.03.png?psid=1
[pic-20131019.04]: https://ucry3q.bay.livefilestore.com/y2p4Ah1Xk9t1BwhDZL2m2ZO0uNO14N_UcSZtw_7dcypdZuQzMtu9cDtjXvp40TDYeCs9StQ9QvPwssxOqhTrD6Xc2zNwj4WN8zoYPOKRJSablY/2013-10-19.04.png?psid=1