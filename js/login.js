window.onload = function () {
    var header = document.getElementsByClassName("header");
    var index = 3;
    var allA = document.getElementsByTagName("a");
    var round = 1;
    allA[index].style.backgroundColor = "black";
    var start = setInterval(autoleft, 10);
    for (var i = 3; i < 8; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num;
            header[0].style.left = -960 * (index - 3) + "px";
            setA();
        }
    }

    function setA() {
        for (var i = 3; i < 8; i++) {
            allA[i].style.backgroundColor = "";
        }
        allA[index].style.backgroundColor = "black";
        round = (index - 3) * 320 + 1;
    }

    function leftmove() {
        start = setInterval(autoleft, 10);
    }

    function autoleft() {
        console.log(round);
        header[0].style.left = -3 * round + "px";
        round++;
        if ((round - 1) % 320 == 0 && (round != 1)) {
            for (var i = 3; i < 8; i++) {
                allA[i].style.backgroundColor = "";
            }
            allA[(round - 1) / 320 + 3].style.backgroundColor = "black";
            clearInterval(start);
            setTimeout(leftmove, 4000);
        }
        if (round >= 1281) {
            round = 1;
            setTimeout(function () {
                header[0].style.left = 0;
                for (var i = 3; i < 8; i++) {
                    allA[i].style.backgroundColor = "";
                }
                allA[(round - 1) / 320 + 3].style.backgroundColor = "black";
            }, 2000);
        }
    }
}

function aboutme() {
    alert("这里是关于我的内容");
}

function qq() {
    alert("1106865024");
}

function setCookie() {
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    var e1 = document.getElementById("e1");
    var e2 = document.getElementById("e2");
    if (e1.innerHTML != "") {
        alert("用户名不能为空");
    } else if (e2.innerHTML != "") {
        alert("密码不能为空");
    } else {
        document.cookie = "name=" + name.value;
        document.cookie = "password=" + password.value;
        alert("登录成功了!");
        window.location.href = 'p1.html';
    }
}

function checkname() {
    var name = document.getElementById("name");
    var e1 = document.getElementById("e1");
    if (name.value == "") {
        e1.innerHTML = "用户名不能为空";
    } else {
        e1.innerHTML = "";
    }
}

function checkpwd() {
    var password = document.getElementById("password");
    var e2 = document.getElementById("e2");
    if (password.value == "") {
        e2.innerHTML = "密码不能为空";
    } else {
        e2.innerHTML = "";
    }
}