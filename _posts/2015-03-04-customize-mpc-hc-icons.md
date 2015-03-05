---

layout: post
title: 自定义并编译 MPC-HC 文件关联图标
motto: 以道观之，物无贵贱；以物观之，自贵而相贱；以俗观之，贵贱不在己。——《庄子·秋水》
date: 2015-03-05 14:30
tags: 奇技淫巧

---

在 Windows 上播放视频一直使用的是 [MPC-HC 播放器][ref-8]，其文件小巧且支持格式众多，奈何自带的文件关联图标实在一般。如图所示：

<!-- more -->

[![默认关联图标][pic-1]][pic-1]

网上有很多好看的 KMPlayer、PotPlayer 的关联图标文件，多数为 dll 格式，可以用工具 [ResourcesExtract][ref-1] 从其中提取图标出来。今天特地研究了下怎样可以将这些图标用于 MPC-HC。下面是这里所用到的图标截图（该图标原文件来源于网上，若有侵权，烦请告知）：

[![自定义关联图标][pic-2]][pic-2]

下载当前最新的 MPC-HC 的源代码，其版本为 [1.7.8][ref-2]，然后解压。经察看可知，MPC-HC 的关联图标都在目录 [mpc-hc-1.7.8/src/mpc-hc/mpciconlib/icons][ref-3] 下，稍后会被编译成文件 *mpciconlib.dll*。将上述由其他文件中提取出的图标放在这个目录下，同时修改对应的文件名。

接下来就是准备编译这些图标文件了，需要已安装 VS2013，不过若是没有的话，用 VS2010 也可以。

在运行编译命令前，还需要修改一个源文件。默认情况下，rmvb 类型的图标会被当作其他类型对待，可以修改文件 [mpc-hc-1.7.8/src/mpc-hc/mpciconlib/mpciconlib.cpp][ref-4] 第217行，将 *IDI_OTHER_ICON* 改为 *IDI_RM_ICON*：

{% highlight cpp %}

...
    } else if (_tcsicmp(ext, _T(".rmvb")) == 0) {
        iconIndex = IDI_RM_ICON;
...

{% endhighlight %}

然后根据源代码中给出的编译脚本文件 [mpc-hc-1.7.8/build.bat][ref-5]，提取出编译关联图标的命令如下，：

{% highlight bat %}

编译32位平台：
C:\Windows\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe mpciconlib.sln /nologo /consoleloggerparameters:Verbosity=minimal /maxcpucount /nodeReuse:true /target:Build /property:Configuration=Release;Platform=Win32

编译64位平台：
C:\Windows\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe mpciconlib.sln /nologo /consoleloggerparameters:Verbosity=minimal /maxcpucount /nodeReuse:true /target:Build /property:Configuration=Release;Platform=x64

{% endhighlight %}

由于这里使用的是 VS2010，而非官方推荐的 VS2013，所以运行上述命令后会出错，错误信息如下所示：

{% highlight bat %}

C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\Platforms\Win32\Microsoft.Cpp.Win32.Targets(518,5): 
error MSB8008: Specified platform toolset (v120_xp) is not installed or invalid. Please make sure that a supported PlatformToolset value is selected.
[C:\test\mpc-hc-1.7.8\src\mpc-hc\mpciconlib\mpciconlib.vcxproj]

{% endhighlight %}

此时，可以修改文件 [mpc-hc-1.7.8/src/platform.props][ref-6]，注释掉其中有关 *PlatformToolset* 的两句代码：

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup Label="Configuration">
<!--
    <PlatformToolset Condition="'$(ANALYZE)'!='true'">v120_xp</PlatformToolset>
    <PlatformToolset Condition="'$(ANALYZE)'=='true'">v120</PlatformToolset>
-->
  </PropertyGroup>
</Project>

{% endhighlight %}

现在再次运行命令编译，成功通过。生成的文件 *mpciconlib.dll* 位于目录 *mpc-hc-1.7.8/bin/mpc-hc_x86*（用于32位平台）或者 *mpc-hc-1.7.8/bin/mpc-hc_x64*（用于64位平台）下。

[这里][ref-7]是已编译好的文件，包含32位和64位平台的，将其放到 MPC-HC 的目录下，在*设置*里重新运行关联即可。

（完）

------

[pic-1]: https://ucry3q.dm2302.livefilestore.com/y2pSD2tlSxEjNsC982KXI553AUjEgFUSxuC1Nti0ZyOz6EOaheKILHLGzhLWQsh_RDsnkAdh1YOC9h7UBAv8I-22SzLA5smaGwuuW_NOQ1xpzLkB_pNYo8VquILIEi_YcaA3XPuv1attebbZKpTJXLaEw/2015-03-05.01.png?psid=1
[pic-2]: https://ucry3q.dm2302.livefilestore.com/y2paCSAZtEyS_UljnhYnPDp7RjFoZNOxEIsderkss9krm8dITCPXu-BQ1KuYaPHj3A8EplNfX1tq-9v0PGkXHGMuBxv8JMwVp5rCu_NAvW11qgKt8ED9I9sRIg8b5-S5KPfFAd6h7ixOj2Cvtvv9kLrmA/2015-03-05.02.png?psid=1

[ref-1]: http://www.nirsoft.net/utils/resources_extract.html
[ref-2]: https://github.com/mpc-hc/mpc-hc/releases/tag/1.7.8
[ref-3]: https://github.com/mpc-hc/mpc-hc/tree/6fcba1bead7608fb480ab943ab9689bc66f4e009/src/mpc-hc/mpciconlib/icons
[ref-4]: https://github.com/mpc-hc/mpc-hc/blob/6fcba1bead7608fb480ab943ab9689bc66f4e009/src/mpc-hc/mpciconlib/mpciconlib.cpp#L217
[ref-5]: https://github.com/mpc-hc/mpc-hc/blob/6fcba1bead7608fb480ab943ab9689bc66f4e009/build.bat#L259
[ref-6]: https://github.com/mpc-hc/mpc-hc/blob/6fcba1bead7608fb480ab943ab9689bc66f4e009/src/platform.props
[ref-7]: http://pan.baidu.com/s/1bn6MVa3
[ref-8]: http://mpc-hc.org/