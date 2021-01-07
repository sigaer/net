 <div id="head">
        <a href="login.html">登录</a>
        <a href="register.html">注册</a>
        <a href="note.html" hidden="hidden">待办事项</a>
        <a href="#" hidden="hidden" onclick=logout()>登出</a>
        <p id="time" style="position: fixed;z-index: 2;color:#ffffff"></p>
        <script>
            var myVar = setInterval(function () {
                myTimer()
            }, 1000);

            function myTimer() {
                var d = new Date();
                var t = d.toLocaleTimeString();
                document.getElementById("time").innerHTML = t;
            }
        </script>
    </div>
    <div id="outer">
            <ul class="header">
                <li><img src="head/6.jpg" alt=""></li>
                <li><img src="head/41.jpg" alt=""></li>
                <li><img src="head/46.jpg" alt=""></li>
                <li><img src="head/68.jpg" alt=""></li>
                <li><img src="head/80.jpg" alt=""></li>
            </ul>
            <div id="navDiv">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
            </div>
    </div>
    <div class="mid1">
        <div class="logo">
            <img src="miku/4.jpg" alt="0">
        </div>
        <div class="menu">
            <ul><li><a href="#">首页</a></li>
                <li><a href="javascript:void(0);" onclick="aboutme()">关于我</a></li>
                <li><a href="music.html">音乐</a></li>
                <li><a href="pic.html">相册</a></li>
                <li><a href="#">心情</a></li>
                <li><a href="#">留言</a></li></ul>
        </div>
            <div class="rtitle">
                <div class="knowme">
                    <h3>认识我</h3>
                </div>
                <div class="gz">
                    <ul>
                        <li><a href="#">新浪微博</a></li>
                        <li><a href="#">腾讯微博</a></li>
                    <li><a href="javascript:void(0);" onclick="qq()">QQ</a></li>
                    </ul>
                </div>
            </div>
            <div id="wel">
                <h3></h3>
            </div>
    </div>
    
    <div class="lis">
        <div class=xtitle>
            <h5>成员介绍</h5>
        </div>
        <ul><li><span class="sprite miku"></span><a href="intro.html">miku</a></li>
            <li><span class="sprite rin"></span><a href="intro.html">rin</a></li>
            <li><span class="sprite len"></span><a href="intro.html">len</a></li>
            <li><span class="sprite luka"></span><a href="intro.html">luka</a></li>
            <li><span class="sprite kaito"></span><a href="intro.html">kaito</a></li>
            <li><span class="sprite meiko"></span><a href="intro.html">meiko</a></li>
        </ul>
    </div>
    <div class=right>
        <div class=xtitle>
            <h5>站长推荐</h5>
        </div>
        <ul>
            <li>
                <a href="#id=1">什么是vocaloid?</a>
            </li>
            <li>
                <a href="#id=2">vocaloid的发展历程</a>
            </li>
            <li>
                <a href="news.html?d=2&title=vocaloidP主介绍">vocaloidP主介绍</a>
            </li>
            <li>
                <a href="news.html?d=3&title=vocaloid名曲推荐">vocaloid名曲推荐</a>
            </li>
            <li>
                <a href="#id=5">vocaloid参数介绍</a>
            </li>
        </ul>
    </div>
    <div class=center>
        <div class=title>
            <h4 id="tt">:title</h4>
        </div>
       <div class="news" id="c">
       :content
       </div>
    </div>