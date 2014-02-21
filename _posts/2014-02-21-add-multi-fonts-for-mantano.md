---

layout: post
title: 为 Mantano 阅读器增加多字体支持
motto: 今吾朝受命而夕饮冰，我其内热与。——《庄子·人间世》
date: 2014-02-21 10:30
tags: 奇技淫巧

---

安卓系统上可以阅读 ePub 格式文件的阅读器有不少，但是能够完美支持 CSS 各种效果的，那可就寥寥可数了。

在网上搜寻了大半天，最终发现 Mantano 这个阅读器不错。不过，若想得到多字体的显示效果，还得自己再更进一步。经过一番探索后，如下是个人的一些心得，记录下以备忘。

<!-- more -->

根据[老牛的资料][ref-1]，Mantano 的默认资源根目录是 */sdcard/Mantano/*，这样可以首先创建一个字体目录 */sdcard/fonts/*，然后将需要用到的字体放在此处，如 */sdcard/fonts/KaiTi.ttf*，*/sdcard/fonts/YouYuan.ttf* 等，再在 ePub 文件的 CSS 文件中引用即可。

示例代码如下，其中示例文件来自于[此处][ref-2]。

首先是样式文件 *file.epub/OEBPS/Styles/style.css*：

{% highlight css %}

@font-face {
    font-family: "KaiTi";
    src:
    local("楷体"),
    /* 下一句关键，因为 Mantano 阅读器以 /sdcard/Mantano/ 目录作为根目录 */
    url(res:///../fonts/KaiTi.ttf);
}

@font-face {
    font-family: "YouYuan";
    src:
    local("幼圆"),
    url(res:///../fonts/YouYuan.ttf);
}

/* 诗 */
.Shi {
    margin: 0 0 0 2em;
    font-family: "KaiTi", serif;
}

/* 词 */
.Ci {
    margin: 0 0 0 2em;
    font-family: "YouYuan", serif;
}

{% endhighlight %}

在文章中使用该样式时，如文件 *file.epub/OEBPS/Text/Chapter002.html*：

{% highlight css %}

<p>...</p>

<p>词曰：</p>

<p class="Ci">芙蓉面，冰雪肌，生来娉婷年已笄。袅袅倚门余。梅花半含蕊，似开还闭。初见帘边，羞涩还留住；再过楼头，款接多欢喜。行也宜，立也宜，坐也宜，偎傍更相宜。</p>

<p>...正是：</p>

<p class="Shi">落花有意随流水，流水无情恋落花。</p>

<p>...</p>

{% endhighlight %}

好了，现在将修改后的文件传到手机上用 Mantano 打开试试吧。示例文件的示图如下：

[![示图1][pic-01]][pic-01]

[![示图2][pic-02]][pic-02]

（完）

------

参考资料：

> 1. [Android epub唯美阅读：mantano的解决方案][ref-1]

[ref-1]: http://www.by-smart.com/home.php?mod=space&uid=2&do=blog&id=517
[ref-2]: http://www.hi-pda.com/forum/viewthread.php?tid=1237856

[pic-01]: https://ucry3q.dm2303.livefilestore.com/y2paPE6u6Av9FW-wdpyK2yEmozSCJD5HG2NymZWjOrvHKWK94gBmyyQWVW4rba5LUpc1a6IHjVBCdILXIg5uiNF3TTWnmm74zEQew9-pss8Qgk/2014-02-21.01.jpg?psid=1
[pic-02]: https://ucry3q.dm2302.livefilestore.com/y2pTBYn8UC1S73A5b-qfBYVrn0pa8fTrurJrUgHhqNmdgtzPUozWAsO3echCgtJMBREaxZYRYm3m7-RNiNkBuhmDcAlOK7TiM8qsiZNgW-Ypcc/2014-02-21.02.jpg?psid=1
