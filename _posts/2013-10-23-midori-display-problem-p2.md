---

layout: post
title: Midori 浏览器中文显示空白的问题（下）
motto: 浮游不知所求，猖狂不知所往，游者鞅掌，以观无妄。——《庄子·在宥》
date: 2013-10-23 10:30
tags: Linux

---

[上回][ref-1]说到，Midori 浏览器在打开网页时，会无法正常显示其中的文字。比如，网易首页就会是下面这样白茫茫的一片：

<!-- more -->

[![网易首页截图1][pic-01]][pic-01]

那次曾折腾了各种办法，却依然无果，最终只能无奈放弃。而今日终于时来运转，竟在偶然之间发现了问题的关键。

话说今日用*火狐*浏览器打开[这个网页][ref-2]时，竟然也出现了成段的空白，如下所示：

[![火狐截图1][pic-06]][pic-06]

看到这个页面时，当时我就震惊了：这不正和多日前苦战未果的那个 Midori 浏览器问题相同么？怎么今日火狐也跟风了？

盯着这个页面，直直愣了半晌。显然，肯定不可能原文就是大段的空白，因为选中后可以看到其实每段都是有文字的，如下图所示：

[![火狐截图2][pic-07]][pic-07]

这样看来，似乎是和字体相关的问题？想到火狐里有个“检查元素”的选项，若是把和字体相关的 CSS 样式取消，会怎样呢？如下：

[![火狐截图3][pic-08]][pic-08]

其中有一句：

{% highlight css %}

font-family: "Baskerville", "文泉驿微米黑", serif;

{% endhighlight %}

可以看到其中指定了中文字体*文泉驿微米黑*。去掉前面的对钩，将该字体设定取消后，如下：

[![火狐截图4][pic-09]][pic-09]

啊哈！文字居然全部显示出来了！看来这是一个办法。

于是想到了之前的那个 Midori 的问题，遂马不停蹄地打开 Midori。找到关于字体设定的样式后，将其取消，如下：

[![网易首页截图2][pic-02]][pic-02]

哦，苍天大地！这一刻热泪已忍不住夺眶而出：

> 世事变迁，沧海化为桑田，久违的文字，你终于又出现了吗？

联想到上面提到的*文泉驿微米黑*，似乎和浏览器的字体设定有关。打开字体设置页面，这里我之前设定的是*方正兰亭黑*：

[![字体设定截图1][pic-03]][pic-03]

将其修改为*文泉驿微米黑*后：

[![字体设定截图2][pic-04]][pic-04]

？？？什么情况？怎么又成了一片空白了？再换成*文泉驿正黑*，如下：

[![字体设定截图3][pic-05]][pic-05]

嘿，又正常了。

如此看来，应该可以确定是*文泉驿微米黑*字体的问题了。于是查看了一下这个字体。下图是命令运行结果的截图。

[![命令截图][pic-10]][pic-10]

首先查看系统目录 */usr/share/fonts/wenquanyi/*，没有这个字体；再到用户主目录的字体目录 *~/.fonts/* 下，原来在这里。可是怎么颜色怪怪的呢，似乎是个软链接？又仔细查看了下。

我了个去，这个链接居然指向了文件 */tmp/wqy-microhei.ttc*，而 */tmp* 目录是挂载在内存中的！尼玛，经过这么多次的系统重启，其中的文件早就消失无踪了！

仔细回想了下，似乎之前为了看看*文泉驿微米黑*的显示效果，曾经安装了这个字体。当时将其放在了挂载在内存中的目录 */tmp* 下，想着是为了防止系统分区出现碎片（虽然可能根本没有太大作用，不过心理上会觉得有些安慰），随后再链接到主目录下的字体文件夹中。谁知最后竟忘记了这个事，导致被 Midori 的问题困扰许久。

> 哦，这是多么痛的领悟！

好了，现在根源找到了，解决也就很简单了。将这个链接删除，然后用 `fc-cache` 命令重新生成字体缓存。

现在再用 Midori 打开网易首页看看，果然显示正常了：

[![网易首页截图3][pic-11]][pic-11]

其实这里还有一个问题，我在字体设定中设置的默认的比例字体为*方正兰亭黑*，不知道为什么这里会显示为*文泉驿正黑*。似乎 Midori 在未找到 CSS 中指定的字体时，会用*文泉驿微米黑*和*文泉驿正黑*来代替，而不是用字体设置页面中设定的字体？这个问题待后面有时间了到 Midori 的源代码中查看一下，目前暂且放下。

再看一下刚刚火狐打开的那个页面，也正常了：

[![火狐截图5][pic-12]][pic-12]

好了，困扰了多年的问题终于搞定了！心中总算落下了一块大石。现在腰不酸了，腿不痛了，走路上楼也有劲了！嘿！

（完）

[pic-01]: https://ucry3q.bay.livefilestore.com/y2pc9i_6hSdrxYwJtQ8eyIKy9ryAXjaqGS88vJEnUDDFAAvBhGXc5H9ZKei6fuJk2DRKRAogtThYXl1GLqWkZU80T8YHZMQwu9oMTNDrQQehto/2013-10-21.01.png?psid=1
[pic-02]: https://ucry3q.bay.livefilestore.com/y2p9Ct-vpWlLKnG6I1abZBpTQ6fHeckGyuVO5m_rujt8UZcxWgnI5cRUb7oG2Q-HsQEY7JA4Vk4CIotVYY70IgB4gzkrzSLU7IHT-WCH3Qq60c/2013-10-21.02.png?psid=1
[pic-03]: https://ucry3q.bay.livefilestore.com/y2p9dzBBt8dv0TtrnTTkzkphUTiRaI4YNHqqIkWLy33u3t4ubDzjmY0PhoPurBvY9HPDHoBWLeXda1K8Ks-2FIn92K5M3XpnvRSa9deHsf5Y3E/2013-10-21.03.png?psid=1
[pic-04]: https://ucry3q.bay.livefilestore.com/y2pwUKALY3zeQPqu4MVI4Iev3O3lXWCJXXnh_1iy-jxNAV0rVXP6dMWxS7wCfVOrQwu5sKb17HNmmYLVQ5bV3U7QosFBLOh_sUq23vq8HmMA8o/2013-10-21.04.png?psid=1
[pic-05]: https://ucry3q.bay.livefilestore.com/y2ptCUjuCXuSWisZJNDlCRgxAPDkLakVX9BluHFTT7HUhDScRmQkhhzWhHNEQ3VNqZ--XFizk7cXF6GYXZf04k5hhKAwHuxcoFRbpPJ0kxpC6s/2013-10-21.05.png?psid=1
[pic-06]: https://ucry3q.bay.livefilestore.com/y2pmnJ9ehI2JvJGgUfWL48tR82NCCISB5fvNHY06JEL0lLEwXtYxAIsHR-edu70wTF5Rdpl2WSCSeM3Zcqm8Dv8yt3sGKE55a6GU-dvDGdWbL8/2013-10-21.06.png?psid=1
[pic-07]: https://ucry3q.bay.livefilestore.com/y2pDzMGfN7hhUtNiAQaIj6cw-t4FkhV3msFruDKTh6fmoKwrJBZAt0Z5OI5aGsLP0Fa3FVvLwn7zsF81CH7fPlZD9WzxXQ9pcgpS2rC-NAoHl4/2013-10-21.07.png?psid=1
[pic-08]: https://ucry3q.bay.livefilestore.com/y2p0SAHvewc6AvXtKLgq5EarIljKexXLcQ4PwjZm9u1AIokbybbw_Wdnn8vNQB7d0aXV1iED5Q_Yf_0YyDzlj-cy5Oqpw__qMUCe4dCgUYGyvA/2013-10-21.08.png?psid=1
[pic-09]: https://ucry3q.bay.livefilestore.com/y2pzesz_8ZMQ6xPu5TndtxTMaS1ZNbQZs_BNxMxXknIAsHb-46ZKgS8Q5dN1G0K-rus_HZdZbDc6zlqrUbn8BGMUigdiMGXdmNtb7t7PsUdbOY/2013-10-21.09.png?psid=1
[pic-10]: https://ucry3q.bay.livefilestore.com/y2pZq8JVGKEYYLmqTcoSNJW0BlKru7WNuNs_Sjd9-jaB8MgyyD6s_VtPwvMW8bZ2H4GASm6IsFRXcnWhV-M2tw2RrE-M8XhJ4ow62EGRulIcbI/2013-10-21.10.png?psid=1
[pic-11]: https://ucry3q.bay.livefilestore.com/y2pxCRLbc9eV-UvDoWLGb_bPcfH1LvQI5S6CnO70JSm0kHFFOlfqzHkjp5XE92xVBjWe_-XCLKKOMpDkbewnNJ7m9En9SDkNS4sy1t29keQ0d4/2013-10-21.11.png?psid=1
[pic-12]: https://ucry3q.bay.livefilestore.com/y2pFdYx8hebsII9iN1aoZj2_UEGJkfXUvxymNG15s4EgQUoelh5BQ0d7glhjBjOnoEwhnIqzLP_k-3m54Lc0UVPf_13STjrzXe9ovg4K_7SNGA/2013-10-21.12.png?psid=1

[ref-1]: /blog/2013/10/21/midori-display-problem-p1
[ref-2]: http://yanping.me/cn
