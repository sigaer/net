var allA=document.getElementsByTagName("a");
            var url=window.location.href;
            var flag=url.indexOf("flag");
            var cookie=document.cookie;
            if(cookie!=0){
                flag=1;
            }
            var header=document.getElementsByClassName("header");
            var index=4;
            var h3=document.getElementsByTagName("h3");
            if(flag!=-1)
            {
                nick=document.cookie.split(";")[0].split("=")[1];
            password=document.cookie.split(";")[1].split("=")[1];
            h3[1].innerHTML="欢迎"+nick+"访问本网站!";
            allA[0].setAttribute("hidden","hidden");
            allA[1].setAttribute("hidden","hidden");
            allA[3].removeAttribute("hidden");
            if(nick=="admin")
            {
                allA[2].removeAttribute("hidden");
                h3[1].innerHTML="现在是开发状态";
            }
            }
            else
            {
                h3[1].innerHTML="";
            }
            var round=1;
            allA[index].style.backgroundColor="black";
        var start=setInterval(autoleft,10);
            for(var i=4;i<9;i++)
            {
                allA[i].num=i;
                allA[i].onclick=function(){
                    index=this.num;
                    header[0].style.left=-960*(index-4)+"px";
                    setA();
                }
            }

            function setA()
            {
            for(var i=4;i<9;i++)
            {
                allA[i].style.backgroundColor="";
            }
            allA[index].style.backgroundColor="black";
            round=(index-4)*320+1;
            }
        function leftmove()
        {
            start=setInterval(autoleft,10);
        }
        function autoleft()
        {
            header[0].style.left=-3*round+"px";
            round++;
            if((round-1)%320==0&&(round!=1))
                {
                    for(var i=4;i<9;i++)
            {
                allA[i].style.backgroundColor="";
            }
                    allA[(round-1)/320+4].style.backgroundColor="black";
                    clearInterval(start);
                    setTimeout(leftmove,4000);
                }
            if(round>=1281)
            {
                round=1;
                setTimeout(function(){
                    header[0].style.left=0;
                    for(var i=4;i<9;i++)
            {
                allA[i].style.backgroundColor="";
            }
                    allA[(round-1)/320+4].style.backgroundColor="black";
                },2000);
            }
            }
        
        function aboutme(){
            alert("这里是关于我的内容");
        }
        function qq(){
            alert("1106865024");
        }
        function logout()
        {
            alert("您已退出登录！");
            var date=new Date();
                date.setTime(date.getTime()-10000);
                document.cookie="name=; expire="+date.toGMTString()+"; path=/";
                document.cookie="password=; expire="+date.toGMTString()+"; path=/";
            var table=document.getElementById("login");
            var logb=document.getElementById("log");
            var logout=document.getElementById("logout");
            var wel=document.getElementById("welcome");
            allA[0].removeAttribute("hidden");
            allA[1].removeAttribute("hidden");
            allA[3].setAttribute("hidden","hidden");
            window.location.href='p1.html'
        }