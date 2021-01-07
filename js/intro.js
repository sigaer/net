var allA = document.getElementsByTagName("a");
window.onload = function () {
    var header = document.getElementsByClassName("header");
    var index = 0;
    var round = 1;
    allA[index].style.backgroundColor = "black";
    var start = setInterval(autoleft, 10);
    for (var i = 0; i < 5; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num;
            header[0].style.left = -1320 * index + "px";
            setA();
        }
    }

    function setA() {
        for (var i = 0; i < 5; i++) {
            allA[i].style.backgroundColor = "";
        }
        allA[index].style.backgroundColor = "black";
        round = index * 440 + 1;
    }

    function leftmove() {
        start = setInterval(autoleft, 10);
    }

    function autoleft() {
        console.log(round);
        header[0].style.left = -3 * round + "px";
        round++;
        if ((round - 1) % 440 == 0 && (round != 1)) {
            for (var i = 0; i < 5; i++) {
                allA[i].style.backgroundColor = "";
            }
            allA[(round - 1) / 440].style.backgroundColor = "black";
            clearInterval(start);
            setTimeout(leftmove, 4000);
        }
        if (round >= 1761) {
            round = 1;
            setTimeout(function () {
                header[0].style.left = 0;
                for (var i = 0; i < 5; i++) {
                    allA[i].style.backgroundColor = "";
                }
                allA[(round - 1) / 440].style.backgroundColor = "black";
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