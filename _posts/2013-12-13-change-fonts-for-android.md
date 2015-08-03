---

layout: post
title: 为 Xperia Z1 更换字体
motto: 鉴明则尘垢不止，止则不明也。久与贤人处，则无过。——《庄子·德充符》
published: true
date: 2013-12-13 17:50
tags: Android

---

咬咬牙，终于于“双十二”时在苏宁购入了索尼 Z1，返了三百的购物券，感觉还不错。

拿到手机后，把玩了一番，运行很是流畅，不过仔细看了看，发现自带的黑体中文字体实在不是很好看，于是想着换个字体。

<!-- more -->

安卓系统中所使用的中文字体为 DroidSansFallback.ttf，位于目录 */system/fonts/* 下。在网上搜索了一番，发现都是替换这个字体文件，以达到更改系统字体的目的。不过直接替换掉这个文件感觉总是不太好，于是想着是否有什么配置文件控制着字体的使用。

又仔细搜索了一番，果然在[这里][ref-1]有了发现。总结方法如下：

若要更换中文字体，先将所准备使用的字体复制到目录 */system/fonts/* 下，这里使用的字体是 FZXianHei.ttf(方正纤黑)，并修改其权限为 *rw-r--r--*，然后修改文件 */system/vendor/etc/fallback_fonts.xml*，如下：

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
<familyset>

    <!-- SoMC Latin Fallback font -->
    <family order="0">
        <fileset>
            <file>SoMCSans-Regular.ttf</file>
        </fileset>
    </family>

<!-- ### 增加如下几行 ### -->
    <!-- Customized Chinese font -->
    <family>
        <fileset>
            <file>FZXianHei.ttf</file>
        </fileset>
    </family>
<!-- ### 修改结束 ### -->

    <!-- SoMC HKSCS Fallback font -->
    <family>
        <fileset>
            <file>SoMC-HKSCS-Fallback.ttf</file>
        </fileset>
    </family>

    <!-- Padauk Myanmar font -->
    <family>
        <fileset>
            <file>Padauk.ttf</file>
        </fileset>
    </family>

</familyset>

{% endhighlight %}

若要更改英文字体的话，同样先将字体复制到目录 */system/fonts/* 下，再修改其权限，这里使用的字体是 [OpenSans][ref-2]，然后修改文件 */system/etc/system_fonts.xml*，如下：

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
...
<familyset>

    <family>
        <nameset>
            <name>sans-serif</name>
            <name>arial</name>
            <name>helvetica</name>
            <name>tahoma</name>
            <name>verdana</name>
        </nameset>

<!-- ### 注释如下几行 ### -->
        <!--
        <fileset>
            <file>Roboto-Regular.ttf</file>
            <file>Roboto-Bold.ttf</file>
            <file>Roboto-Italic.ttf</file>
            <file>Roboto-BoldItalic.ttf</file>
        </fileset>
        -->
<!-- ### 再增加如下几行 ### -->
        <fileset>
            <file>OpenSans-Regular.ttf</file>
            <file>OpenSans-Bold.ttf</file>
            <file>OpenSans-Italic.ttf</file>
            <file>OpenSans-BoldItalic.ttf</file>
        </fileset>
    </family>
<!-- ### 修改结束 ### -->

    <family>
        <nameset>
            <name>sans-serif-light</name>
        </nameset>
        <fileset>
            <file>Roboto-Light.ttf</file>
            <file>Roboto-LightItalic.ttf</file>
        </fileset>
    </family>
...

</familyset>

{% endhighlight %}

完成如上操作后重启，然后就可以看到焕然一新的字体了。放几张我所使用的字体的效果图：

[![效果图1][pic-1]][pic-1]

[![效果图2][pic-2]][pic-2]

[![效果图3][pic-3]][pic-3]

[![效果图4][pic-4]][pic-4]

[![效果图5][pic-5]][pic-5]

[![效果图6][pic-6]][pic-6]

看起来感觉不错，比原来的美观顺滑多了。

（完）

------

参考资料：

> 1. [修改字体后个别字显示错误的解决方案][ref-1]
> 2. [Google Fonts Open Sans][ref-2]

[ref-1]: http://bbs.gfan.com/android-6074602-1-1.html
[ref-2]: http://www.google.com/fonts/specimen/Open+Sans

[pic-1]: https://ucry3q.dm2302.livefilestore.com/y2pjm3t6-RCco7-o9hgFRKL3Z63FdvhwSoBhyeGc29EILqskLSLeap2kMcCVGYFw8kltdahFoGJot04qfSl1j3ImNJA41MZ7RpWBpnZo8QJG7g/2013-12-13.01.jpg?psid=1
[pic-2]: https://ucry3q.dm2302.livefilestore.com/y2pFuFso367S-Hb2aiyKjyro3vlu5PZ_22YhTOgLlJBg4MnVXbccd9xEQbzFdzsJwjc6S-Y0HwE-0rI9JdxYfsgN52vp645IXDMb2uwV1rDJB8/2013-12-13.02.jpg?psid=1
[pic-3]: https://ucry3q.dm2302.livefilestore.com/y2pg6xY71GJQDSRkx3ROZUYpJO7l4sgw5Nai1NvU8vDiKqKJJFDt3by2MAmCU0m09VF5joKFnEZxobUQy8vGDc69Xzb9yLSaceenVP2ewoFxOQ/2013-12-13.03.jpg?psid=1
[pic-4]: https://ucry3q.dm2302.livefilestore.com/y2pUsF7nYpd3Pwczf3IsvZtJukgdA3_VpNiK3H24K0XB3XtkuZLCHZ7po3Qv3sEiOXdapP85lyUtlHIrqdFkh1DMLZz37MMcvsqBYcGMY9xIHU/2013-12-13.04.jpg?psid=1
[pic-5]: https://ucry3q.dm2302.livefilestore.com/y2pjjXKh4zVSmviA8l2se4WErAdyOE5wePmM3jZ11pgNWdA1Xro_4COblb1nyAoj3Ir0gDczUyc5BqnOQS4rimY9LEpxoLZJht1RuWxCoPf7-w/2013-12-13.05.jpg?psid=1
[pic-6]: https://ucry3q.dm2302.livefilestore.com/y2pbcGI6qIfcKtf2eVf_vhaJs-gT7s1_wRmaUFEzZvqsu24BUTEiLncimCuL_n_GMTA15KMGnIcZDBxnQw6ENwclH1EFlE9t2iMWRmM5CHePt0/2013-12-13.06.jpg?psid=1
