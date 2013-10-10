/**
 * 返回顶部代码，来自于 http://tjuking.iteye.com/blog/1743229
 */

(function(win, doc) {
    //变量
    var compatMode = doc.compatMode,
        isChrome = win.navigator.userAgent.indexOf("Chrome") === -1 ? false : true,
        scrollEle = compatMode === "BackCompat" || isChrome ? doc.body : doc.documentElement,
        clientEle = compatMode === "BackCompat" ? doc.body : doc.documentElement,
        toTopBtn = doc.getElementById("toTop"),
        rate = 0.8,
        timeGap = 10;
    //返回顶部图标的点击响应
    toTopBtn.onclick = function() {
        var moveInterval = setInterval(moveScroll, timeGap);

        function moveScroll() {
            var scrollTop = scrollEle.scrollTop;
            if (scrollTop === 0) {
                clearInterval(moveInterval);
                return;
            }
            scrollEle.scrollTop = scrollTop * rate;
        }
    };
    //滚动时判断是否显示返回顶部图标
    win.onscroll = function() {
        var display = toTopBtn.style.display;
        if (scrollEle.scrollTop > clientEle.clientHeight / 5) {
            if (display !== "block") {
                toTopBtn.style.display = "block";
            }
        } else {
            if (display !== "none") {
                toTopBtn.style.display = "none";
            }
        }
    };
})(window, document);
