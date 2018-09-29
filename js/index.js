var numId;
function start3D() {
    numId = 1;
    document.getElementById("pic11").className = "endPos1 totalPic";
    document.getElementById("pic12").className = "endPos2 totalPic";
    document.getElementById("pic13").className = "endPos3 totalPic";
    setTimeout(Func1, 3000);

}
function Func1() {

    document.getElementById("textarea").hidden = false;
    setTimeout(Func2, 5000);
}
function Func2() {
    document.getElementById("showp").innerText = "But maybe you are unfamiliar with their origin";
    setTimeout(Func3, 5000);
}
function Func3() {
    document.getElementById("showp").innerText = "Now,let me show you the world of game programming";

    setTimeout(Func4, 5000);
}
function Func4() {
    document.getElementById("showp").innerText = "--a New World for You";
    document.getElementById("pic11").className = "quickEnd totalPic";
    document.getElementById("pic22").hidden = false;
    document.getElementById("pic32").hidden = false;
    document.getElementById("pic23").hidden = false;
    document.getElementById("pic33").hidden = false;
    document.getElementById("pic24").hidden = false;
    document.getElementById("pic34").hidden = false;
    document.getElementById("pic25").hidden = false;
    document.getElementById("pic35").hidden = false;
    document.getElementById("gifpic").hidden = false;
    document.getElementById("pic12").hidden = true;
    document.getElementById("pic13").hidden = true;
    setTimeout(Func5, 2000);
}
function Func5() {
    document.getElementById("pic21").hidden = false;
    document.getElementById("pic31").hidden = false;
    document.getElementById("pic11").hidden = true;
    document.getElementById("skipa").hidden = true;
    setTimeout(Func6, 40);
}
function Func6() {
    if (numId >= 6) {
        document.getElementById("textarea").hidden = true;
        document.getElementById("arrow1").hidden = false;
        document.getElementById("arrow2").hidden = false;
    }
    else {
        document.getElementById("pic2" + numId).className = "leftPic leftPosE" + numId;
        document.getElementById("pic3" + numId).className = "rightPic rightPosE" + numId;
        numId++;
        setTimeout(Func6, 300);
    }
}
function HideWindow() {
    document.getElementById("bkk").className = "bkg bkg2";
    setTimeout(Go, 1000);
   
}
function Go() {
    window.location.href = "html/HtmlPage1.html";
}