var allA=document.getElementsByTagName("a");
var d = 0;
            window.onload=function(){
                var url=window.location.href;
            var flag=url.indexOf("flag");
            var cookie=document.cookie;
            if(cookie!=0){
                var c=cookie.split(';')
                var n=c[0].split('=')
                var p=c[1].split('=')
                if(n[1]!=''&&p[1]!='')
                flag=1;
                else
                flag=-1;
            }
            var header=document.getElementsByClassName("header");
            var index=4;
            if(flag!=-1)
            {
                nick=document.cookie.split(";")[0].split("=")[1];
            password=document.cookie.split(";")[1].split("=")[1];
            allA[0].setAttribute("hidden","hidden");
            allA[1].setAttribute("hidden","hidden");
            allA[3].removeAttribute("hidden");
            if(nick=="admin")
            {
                allA[2].removeAttribute("hidden");
            }
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
            var box = document.getElementById("box");
            var ul = document.createElement("ul");
            box.appendChild(ul);
            var btn = document.getElementById("btn");
            var msg = document.getElementById("msg");
            btn.onclick = function(){
                if(msg.value === ""){
                    alert("请输入内容")
                }
                else if(flag==-1)
                {
                    alert("请先登录")
                }
                else
                {
                    d++;
                    var li = document.createElement("li");
                    li.innerHTML = "<span>"+n[1]+":</span>" + " <br/>"+msg.value;
                    var lis = document.getElementsByTagName("li");
                    if(d === 1){
                        ul.appendChild(li);
    //                    如果是第一条留言则用appendChild
                    }else{
                        ul.insertBefore(li,lis[5]);
    //                    最新的留言总在第一条显示
                    }
                    msg.value = "";
    //                重置文本框
                    var span = document.getElementsByTagName("span");
                    for(var i = 0;i<span.length;i++){
                        span[i].onclick = function(){
                            ul.removeChild(this.parentNode);
                            d--;
                        }
                    }
                }
            };

            }
            function calc(){
                alert("一共有"+d+"条留言")
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
        
        