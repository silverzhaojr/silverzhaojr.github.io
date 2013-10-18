---

layout: post
title: 火狐浏览器中将宋体替换为雅黑显示
motto: 吾以天地为棺椁，以日月为连璧，星辰为珠玑，万物为赍送。吾葬具岂不备邪？——《庄子·列御寇》
date: 2013-05-15 13:15
tags: 奇技淫巧

---

> 本文来自于[原 ChinaUnix 博客][orig-blog]

不知道为什么，许多网站喜欢强制指定网页的字体为宋体，其样式定义类似于：

{% highlight css %}

body { font-family: "宋体"; ... }

{% endhighlight %}

而宋体那锐利的点阵效果，实在是 %&# ……相较之下，雅黑就显得柔和得多了。于是便想着将网页中指定的宋体用雅黑来显示。

<!-- more -->

其实呢，最好的方法是网站样式中不指定中文所使用的字体，而是使用类名 sans-serif，这样可以由浏览器自动选择所定义的字体，类似于：

{% highlight css %}

body { font-family: "arial", sans-serif; }

{% endhighlight %}

但是，许多网站它就是顽固不化，非要强制指定宋体，真不知是和宋体结下了多深厚的感情。没办法，也只能另寻他法了。

首先想到的方法，是将系统的宋体字体文件直接用雅黑替换掉，但是这样的话，在 Word 等文档中便再也用不了宋体了，所以该方法很快被否决掉。

然后，在火狐的字体设定中，有个选项为“允许页面选择显示字体而无需使用上面的设置”，如图：

[![字体设置页面][font-setting-pic]][font-setting-pic]

若是去掉前面的勾，则可以强制网页中的所有字体为雅黑。之前一直是这样做的，但是这个方法却失去了很多网页精心自定义的样式，不是很完美，所以也一直在寻找其他的方法。

最终，某天在网上忽然看到了火狐浏览器有一个可以自定义的样式表 *userContent.css*，可以用来控制网页的内容显示，于是想到是否可以在这里做些文章。

在 CSS 中，有个规则称为 *@font-face*，可以定义一种字体名，而其所使用的实际字体文件可以存在服务器上，也可以是本地的字体(相当于为本地字体取了个别名)。经过一番探索后，终于找到了解决方法：

在火狐的配置文件夹（默认路径为 *%APPDATA%\\Mozilla\\Firefox\\Profiles\\xxxxxxxx.default\\*）中，新建文件夹 *chrome*，然后在该文件夹中创建文件 *userContent.css*，文件编码需为 UTF-8，其内容为：

{% highlight css %}

@font-face
{
    font-family: "宋体";
    src: local("微软雅黑");
}

{% endhighlight %}

这样，当网页请求使用宋体时，浏览器会自动使用雅黑字体来显示。其他字体的替换也可以依此类推。

大功告成！

------

参考资料：

> 1. [百度、腾讯、网易们，你们怎么就那么爱“宋体”？][ref-1]
> 2. [浏览器中替换宋体为微软雅黑较完美方案][ref-2]
> 3. [现在还能用userContent.css自定义页面样式吗？][ref-3]
> 4. [CSS3 字体][ref-4]

[orig-blog]: http://blog.chinaunix.net/uid-25906175-id-3691603.html
[font-setting-picx]: http://t.williamgates.net/image-E774_52609BA0.jpg
[font-setting-pic]: http://ww3.sinaimg.cn/mw690/a2e690d3tw1e9pgmkj4g7j20d60bhjsi.jpg
[ref-1]: http://dudo.org/archives/2010041823512.html
[ref-2]: http://blog.alphatr.com/replace-simsun-yahei.html
[ref-3]: http://mozilla.com.cn/post/49780/
[ref-4]: http://www.w3school.com.cn/css3/css3_font.asp
