---

layout: post
title: 解决 SuperSU 提示需要更新二进制文件的问题
motto: 夫恬淡寂漠，虚无无为，此天地之平而道德之质也。——《庄子·刻意》
published: true
date: 2014-06-23 15:00
tags: 奇技淫巧

---

之前获取 Root 权限一直用的是 Root 大师，不过后来发现它的手机客户端增加了许多不必要的功能，于是想着切换到 SuperSU。

<!-- more -->

下载了 SuperSU v2.0.0 后，一路成功安装。然而，当打开后却显示“SU 二进制文件需要更新，是否继续？”，如下图所示。

[![示图1][pic-01]][pic-01]

若点击“取消”，则软件直接退出了；若点击“继续”，然后再点击“常规方式”，此时虽然显示“安装成功”，然而当再次打开后却依然提示需要更新。

网上搜索了下，发现遇到这个问题的还真不少，试了[这里][ref-1]的更新 host 文件方法，依然无效。

百思不得其解。

又在网上苦寻了一番，依然无果。怒了，于是想着从源头解决这个问题，看看 SuperSu 在更新二进制文件时到底做了哪些事，然后再手动照着做一遍，看下到底问题出于何处。

从[这里][ref-2]下载了 SuperSU 的压缩包文件，这个是用来卡刷的。将其解压后，仔细查看了下各个文件，终于在如下文件里发现了端倪：

{% highlight bash %}

# file UPDATE-SuperSU-v2.00.zip/META-INF/com/google/android/update-binary

...
ui_print "- Placing files"
mkdir /system/bin/.ext
cp $BIN/su /system/xbin/daemonsu
cp $BIN/su /system/xbin/su
if ($SUGOTE); then 
  cp $BIN/su /system/xbin/sugote	
  cp $MKSH /system/xbin/sugote-mksh
fi
cp $BIN/su /system/bin/.ext/.su
cp $COM/Superuser.apk /system/app/Superuser.apk
cp $COM/install-recovery.sh /system/etc/install-recovery.sh
cp $COM/99SuperSUDaemon /system/etc/init.d/99SuperSUDaemon
echo 1 > /system/etc/.installed_su_daemon
...

ui_print "- Setting permissions"
set_perm 0 0 0777 /system/bin/.ext
set_perm 0 0 $SUMOD /system/bin/.ext/.su
set_perm 0 0 $SUMOD /system/xbin/su
...

{% endhighlight %}

其中比较重要的是如下这几行：

{% highlight bash %}

...
cp $BIN/su /system/xbin/su
cp $BIN/su /system/bin/.ext/.su
...
set_perm 0 0 $SUMOD /system/bin/.ext/.su
set_perm 0 0 $SUMOD /system/xbin/su
...

{% endhighlight %}

前面两行，将 SU 可执行文件复制到了两个目录下，后面两行为其设置 *set UID* 权限。

使用 RootExplorer 在手机上分别打开目录 */system/bin/*，*/system/bin/.ext/* 和 */system/xbin/*，结果如图：

[![示图2][pic-02]][pic-02]

[![示图3][pic-03]][pic-03]

[![示图4][pic-04]][pic-04]

可以看到，在目录 */system/bin/* 和 */system/xbin/*下均有个大小为 358.39K 的 su 文件，而在目录 */system/bin/.ext/* 下有个大小为 122.48K 的 .su 文件。

经过一番分析，可知大小为 358.39K 的那个文件是由 Root 大师产生的，而大小为 122.48K 的文件才是 SuperSU 自带的。猜想是 SuperSU 检测到目录 */system/bin/* 中已有了 SU 文件，故将其直接复制到了目录 */system/xbin/* 下，而当再次打开 SuperSU 时，会发现两个 *bin/* 目录下的文件与自己所需的不符，故会再次提示需要更新，周而复始，一直失败。

如此一来，解决方法也简单了：只需要将目录 */system/bin/.ext/* 下的 .su 文件复制到目录 */system/xbin/* 下，将其改名为 su，再删掉目录 */system/bin/* 下的 su 和 .suv 文件（这两个文件均是由 Root 大师产生）。如图所示：

[![示图5][pic-05]][pic-05]

此时，再次打开 SuperSU，可以看到没有需要更新的提示了。然后就可以卸载 Root 大师软件。

好了，一切搞定！

（完）

------

参考资料：

> 1. [史上最完整的一键root+二进制升级成功+安装rec方法！][ref-1]
> 2. [CF-Root download page][ref-2]

[ref-1]: http://bbs.gfan.com/android-7506412-1-1.html
[ref-2]: http://download.chainfire.eu/supersu

[pic-01]: https://ucry3q.dm2302.livefilestore.com/y2p0huvRRqtUc04vfjaC8DVZ3jxWT31fhjhsZhqgkoHeiPpHAFv28sb_blNg3EEhpMf2flopXtN69iVTR5CALH34AsX7kmr9UFrLQfT3CJ4pxs/2014-06-23.01.jpg?psid=1
[pic-02]: https://ucry3q.dm2302.livefilestore.com/y2pw1zonjoGrdExnCZgbhm_JlorDqXTNdXW54GFicTC3Gh5_91jEjgdcaamYFZtHD4zeKYxdr29DZIHU3HQCeG460NGRkwIIfpgl8Rj0ppWkms/2014-06-23.02.jpg?psid=1
[pic-03]: https://ucry3q.dm2302.livefilestore.com/y2pO4HubMLKxY9OkdqwWZcH_EN9RddvkVPAJnTci0M0XozLWXpLMZpw_yWkzKPpF5MrPRO8CNf54Bor7E4-gMVeaExjWuxvmOb_fHD2KQSVInA/2014-06-23.03.jpg?psid=1
[pic-04]: https://ucry3q.dm2302.livefilestore.com/y2p2t6t6ioBT_pKNl-qBNTpdWoiOMi_2ehsBbVwTUAXfpsbbh4cBRfoLgWY9lwyfpL_PS0uFJI2oYo7BKjA_n7U2b7Q5LovGZbftOSkOjKE_O4/2014-06-23.04.jpg?psid=1
[pic-05]: https://ucry3q.dm2302.livefilestore.com/y2pIsLC8jJ4KlqCdVk-RxJVBLvigDxnWx01tZg-Ix6EnrJbOlB-X4QtkvI9gd975Cz9soFf-wD0L28pxWOAzBPP9H_FIrNIQihTIS8tpY93OVM/2014-06-23.05.jpg?psid=1
