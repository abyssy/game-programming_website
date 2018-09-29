var menuMoving = 0;
var MenuState = 1;
var dest;
function Show() {
    document.getElementById("bkk").className = "bkg bkg22";
    setTimeout(Close, 1000);
}
function Close() {
    document.getElementById("bkk").hidden = true;
}
function OpenMenu() {
    if (menuMoving > 0) {

    }
    else {
        menuMoving = 1;
        document.getElementById("openButton").className = "hideButton";
        document.getElementById("homeButton").className = "MenuButton2";
        document.getElementById("aboutButton").className = "MenuButton3";
        document.getElementById("contactButton").className = "MenuButton4";
        MenuState = 0;
        setTimeout(MoveEnd, 1000);
    }
}
function CloseMenu() {
    if (menuMoving>0) {

    }
    else {
      
        menuMoving = 1;                                 
        document.getElementById("closeButton").className = "hideButton";
        document.getElementById("homeButton").className = "hideButton2";
        document.getElementById("aboutButton").className = "hideButton3";
        document.getElementById("contactButton").className = "hideButton4";
        MenuState = 1;
        setTimeout(MoveEnd, 1000);
    }
}
function Exit() {
    document.getElementById("bkk").className = "bkg bkg2";
}
function Goto(desc) {
    dest = desc;

    document.getElementById("bkk").hidden = false;
    setTimeout(Exit, 40);

    setTimeout(Hide, 500);
}
function Hide() {
    window.location.href = dest;
}
function MoveEnd() {
    menuMoving = 0;
    if (MenuState == 0) {
        document.getElementById("closeButton").className = "MenuButton";
    }
    else {
        document.getElementById("openButton").className = "MenuButton";
    }
}
function Load() {
    setTimeout(MenuStart, 1000);
    setTimeout(Show, 500);
}
function MenuStart() {
    document.getElementById("openButton").className = "MenuButton";
   
}