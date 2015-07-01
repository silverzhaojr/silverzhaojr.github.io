---

layout: post
title: 火狐打开公司内网不需要输入用户名和密码的方法
motto: 是非之彰也，道之所以亏也。道之所以亏，爱之所以成。——《庄子·齐物论》
date: 2015-07-01 11:30
tags: 奇技淫巧

---

我们知道，在用 IE 打开公司内网时，会自动使用 Windows 的用户名和密码登录。而若是用火狐浏览器的话，则每次都要输入一遍用户名和密码，尽管有“记住密码”的功能，但是每次都要点下“确认”也是比较麻烦。

经过一番探索研究，发现只需要更改火狐的两处设置，即可自动登录了。如下：

<!-- more -->

在地址栏输入 `about:config`，可以搜索 `ntlm` 定位，然后修改两处：

{% highlight c %}

network.automatic-ntlm-auth.allow-non-fqdn: true
network.automatic-ntlm-auth.trusted-uris: yourdomain.com

{% endhighlight %}

如下图所示：

[![截图1][pic-1]][pic-1]

此时，再打开公司内网网址，可以发现不会再需要手工输入了。省时省力，节约资源；和谐社会，你我共建！

（完）

------

参考资料：

> 1. [mozillazine: Network.automatic-ntlm-auth.trusted-uris][ref-1]
> 2. [MDN: Integrated Authentication][ref-2]
> 3. [Enabling NTLM Authentication (Single Sign-On) in Firefox][ref-3]

[pic-1]: https://ucry3q.dm2302.livefilestore.com/y2pavm7_VJOrsBV9gYGEKneCre0YHZzN0NH8ctFpE8NaSmzxbAjjSeilu-K8G3Ouk7UDbjIC3zn66ip8xCij8xnLcLIAckx8jurKQumVhSfmTtMJs_oBlMSQvGag84DT_CG0K0KZyiaeLKEdphEGTiAQZJkhKaoLgrn6MIpCodMZEY/2015-07-01.01.png?psid=1

[ref-1]: http://kb.mozillazine.org/Network.automatic-ntlm-auth.trusted-uris
[ref-2]: https://developer.mozilla.org/en-US/docs/Integrated_Authentication
[ref-3]: http://sivel.net/2007/05/firefox-ntlm-sso
