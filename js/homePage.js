var M;
var posx = new Array();
var posy = new Array();
var px = new Array();
var py = new Array();
var vx = new Array();
var vy = new Array();
var stopped = new Array();
var acx = new Array();
var acy = new Array();
var length2;
var nowStop;
var GotoID;
var timeOut1;
var timeOut2;
function Reset() {
    px[0] = 0.32 * window.innerWidth - 50;
    py[0] = 0;
    vx[0] = 4.7;
    vy[0] = 0;
    px[1] = 0.32 * window.innerWidth - 50;
    py[1] = 0.4 * window.innerHeight+0.14*window.innerWidth -100;
    vx[1] = -4.7;
    vy[1] = 0;

    px[2] = 0.68 * window.innerWidth - 50;
    py[2] = window.innerHeight - 100;
    vx[2] = 4.7;
    vy[2] = 0;

    px[3] = 0.68 * window.innerWidth - 50;
    py[3] = window.innerHeight -(0.4 * window.innerHeight+0.14*window.innerWidth);
    vx[3] = -4.7;
    vy[3] = 0;

    px[4] = 0.61 * window.innerWidth - 100;
    py[4] = window.innerHeight - (0.2 * window.innerHeight + 0.07 * window.innerWidth) - 50;
}
function Start() {
    M = 100;
    nowStop = -1;
    for (var i = 0; i <5; i++) {
        acx[i] = 0;
        acy[i] = 0;
 
        stopped[i] = false;
        px[i] = Math.random() * (window.innerWidth-100);
        py[i] = Math.random() * (window.innerHeight-100);
        vx[i] = Math.random();
        vy[i] = Math.random();
        document.getElementById("returnBut" + i).style.left = px[i] + "px";
        document.getElementById("returnBut" + i).style.top = py[i] + "px";
    }
    Reset();
  
    var api = document.getElementById("apibut");
    var engine = document.getElementById("enginebut");
    api.style.top = 0.2 * window.innerHeight+"px";
    api.style.left = 0.25 * window.innerWidth+"px";
    api.style.width = 0.14 * window.innerWidth+"px";
    api.style.height = 0.14 * window.innerWidth + "px";
    api.style.borderRadius = 0.07 * window.innerWidth + "px";
    engine.style.bottom= 0.2* window.innerHeight + "px";
    engine.style.right = 0.25 * window.innerWidth + "px";
    engine.style.width = 0.14 * window.innerWidth + "px";
    engine.style.height = 0.14 * window.innerWidth + "px";
    engine.style.borderRadius = 0.07 * window.innerWidth + "px";
    length2 = 0.07 * window.innerWidth+50;
    posx[0] = 0.32 * window.innerWidth;
    posy[0] = 0.07 * window.innerWidth + 0.2 * window.innerHeight;
    posx[1] = 0.68 * window.innerWidth;
    posy[1] = window.innerHeight * 0.8 - 0.07 * window.innerWidth;
    setInterval(Move, 20);
}
function Pong() {
    for (var i = 0; i < 2; i++) {
        var dx = posx[0] - px[i]-50;
        var dy = posy[0] - py[i]-50;
        var h = hypot(dx, dy);

        var sin = dy / h;
        var cos = dx / h;
        var a = 1000 / h / h;
        if (h < 100) {
            acx[i] -= a * cos * 4;
            acy[i] -= a * sin * 4;
        }
        else {
            acx[i] += a * cos*4;
            acy[i] += a * sin*4;
        }
    }
    for (var i = 2; i < 5; i++) {
        var dx = posx[0] - px[i] - 50;
        var dy = posy[0] - py[i] - 50;
        var h = hypot(dx, dy);

        var sin = dy / h;
        var cos = dx / h;
        var a = 1000 / h / h;
        if (h < 100) {
            acx[i] -= a * cos * 4;
            acy[i] -= a * sin * 4;
        }
    }
    for (var i = 2; i < 5; i++) {
        var dx = posx[1] - px[i] - 50;
        var dy = posy[1] - py[i] - 50;
        var h = hypot(dx, dy);

        var sin = dy / h;
        var cos = dx / h;
        var a = 1000 / h / h;
        if (h < 100) {
            acx[i] -= a * cos * 4;
            acy[i] -= a * sin * 4;
        }
        else {
            acx[i] += a * cos * 4;
            acy[i] += a * sin * 4;
        }
    }
    for (var i = 0; i < 2; i++) {
        var dx = posx[1] - px[i] - 50;
        var dy = posy[1] - py[i] - 50;
        var h = hypot(dx, dy);

        var sin = dy / h;
        var cos = dx / h;
        var a = 1000 / h / h;
        if (h < 100) {
            acx[i] -= a * cos * 4;
            acy[i] -= a * sin * 4;
        }
    }


    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (i == j) {
                continue;
            }
            var dx = px[j] - px[i];
            var dy = py[j] - py[i];
            var h = hypot(dx, dy);

            var sin = dy / h;
            var cos = dx / h;
            var a = 1000 / h / h;
            if (h < 100) {
                acx[i] -= a * cos * 4;
                acy[i] -= a * sin * 4;
            }
            else {
                //             acx[i] += a * cos;
                //            acy[i] += a * sin;
            }
        }
    }
    
}

function Move() {

    Pong();

    for (var i = 0; i < 5; i++) {
        if (stopped[i] == false) {
            vx[i] += acx[i];
            vy[i] += acy[i];
            px[i] += vx[i] ;
            py[i] += vy[i] ;
            document.getElementById("returnBut" + i).style.left = px[i] + "px";
            document.getElementById("returnBut" + i).style.top = py[i] + "px";
            if (px[i] > window.innerWidth - 100) {
                vx[i] = -Math.abs(vx[i]);
            }
            else if (px[i] < 0) {
                vx[i] = Math.abs(vx[i]);
            }
            if (py[i] > window.innerHeight - 100) {
                vy[i] = -Math.abs(vy[i]);
            }
            else if (py[i] < 0) {
                vy[i] = Math.abs(vy[i]);
            }
        }
    }
    for (var i = 0; i < 5; i++) {
        acx[i] = acy[i] = 0;
    }
}

function hypot(x, y) {
    return Math.sqrt(x * x + y * y);
}

function Stop(ids) {
    document.getElementById("returnBut" + ids).style.boxShadow = "0px 0px 10px 10px blue";
    nowStop = ids;
    stopped[ids] = true;
  

}
function Stop1() {
    clearTimeout(timeOut1);
    document.getElementById("apibut").style.boxShadow = "0px 0px 10px 10px red";
    for (var i = 0; i < 2; i++) {
        stopped[i] = true;
        document.getElementById("returnBut" + i).style.boxShadow = "0px 0px 10px 10px blue";
    }
}
function Stop2() {
    clearTimeout(timeOut2);
    document.getElementById("enginebut").style.boxShadow = "0px 0px 10px 10px red";
    for (var i = 2; i < 5; i++) {
        document.getElementById("returnBut"+i).style.boxShadow = "0px 0px 10px 10px blue";
        stopped[i] = true;
    }
}
function Goon(ids) {
    if (ids < 5) {
        stopped[ids] = false;
        document.getElementById("returnBut" + ids).style.boxShadow = "";
        nowStop = -1;
    }
    else {
        if (ids == 5) {
            document.getElementById("apibut").style.boxShadow = "";
           timeOut1= setTimeout(Goon5, 3000);
        }
        else {
            if (ids == 6) {
                document.getElementById("enginebut").style.boxShadow = "";
              timeOut2=  setTimeout(Goon6, 3000);
            }
        }
    }
}
function Goon5() {
    timeOut1 = -1;
    for (var i = 0; i < 2; i++) {
        stopped[i] = false;
        document.getElementById("returnBut" + i).style.boxShadow = "";
    }
    if (nowStop >=0) {
        stopped[nowStop] = true;
        document.getElementById("returnBut" + nowStop).style.boxShadow = "0px 0px 10px 10px blue";
    }
   
}
function Goon6() {
    timeOut2 = -1;
    for (var i = 2; i < 5; i++) {
        stopped[i] = false;
        document.getElementById("returnBut" + i).style.boxShadow = "";
    }
    if (nowStop >= 0) {
        stopped[nowStop] = true;
        document.getElementById("returnBut" + nowStop).style.boxShadow = "0px 0px 10px 10px blue";
    }
}
function HomeGoto(ids) {
    if (stopped[ids] == true) {
        GotoID = ids;

        document.getElementById("bkk").hidden = false;
        setTimeout(Exit, 40);
     
        setTimeout(Jump, 500);


    }
}
function Exit(){
    document.getElementById("bkk").className = "bkg bkg2";
}
function Jump() {
    switch (GotoID) {
        case 0:
            window.location.href = "directx.html";
            break;
        case 1:
            window.location.href = "opengl.html";
            break;
        case 2:
            window.location.href = "unity.html";
            break;
        case 3:
            window.location.href = "creation.html";
            break;
        case 4:
            window.location.href = "unreal.html";
            break;
    }
}
