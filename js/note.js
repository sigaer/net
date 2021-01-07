var allA=document.getElementsByTagName("a");
            var url=window.location.href;
            var flag=url.indexOf("flag");
            var cookie=document.cookie;
            if(cookie!=0){
                var h3=document.getElementsByTagName("h3");
                flag=1;
                nick=document.cookie.split(";")[0].split("=")[1];
                password=document.cookie.split(";")[1].split("=")[1];
                h3[1].innerHTML="欢迎"+nick+"访问本网站!";
                allA[0].setAttribute("hidden","hidden");
                allA[1].setAttribute("hidden","hidden");
                allA[3].removeAttribute("hidden");
            }
            var header=document.getElementsByClassName("header");
            var index=4;
            var round=1;
            allA[4].style.backgroundColor="black";
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
            console.log(round);
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