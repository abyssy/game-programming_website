var areaValue;
function ContactLoad() {
    document.getElementById("formarea").value = "write down your suggestions here";
   
    areaValue = 0;
}
function FocusArea() {
    var area = document.getElementById("formarea");
    if (areaValue == 0) {
        area.value = "";
        areaValue = 1;
        area.style.color = "black";
    }
}
function LoseArea() {
    var area = document.getElementById("formarea");

    if (area.value == "") {
        areaValue = 0;
        area.style.color = "grey";
        area.value = "write down your suggestions here";
    }
}
function CheckEmail() {
    var text = document.getElementById("formemail").value;
    var test = /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/;
    if (text == "") {

    }
    else
        if (test.exec(text)) {
            document.getElementById("emailp").style.color = "green";
            document.getElementById("emailp").innerText = " accept";
        }
        else {
            document.getElementById("emailp").style.color = "red";
            document.getElementById("emailp").innerText = "wrong format!";
        }
}
function CheckTotal() {
    if (document.getElementById("formtext").value == "") {
        document.getElementById("namep").style.color = "red";
        document.getElementById("namep").innerText = " required!";
    }
    if (document.getElementById("formnumber").value == "") {
        document.getElementById("nump").style.color = "red";
        document.getElementById("nump").innerText = " required!";
    }
    if (document.getElementById("formemail").value == "") {
        document.getElementById("emailp").style.color = "red";
        document.getElementById("emailp").innerText = " required!";
    }
    if (document.getElementById("formtelephone").value == "") {
        document.getElementById("phonep").style.color = "red";
        document.getElementById("phonep").innerText = " required!";
    }
    var sex = document.getElementsByName("sex");
    var oksex = false;
    for (var i = 0; i < 2; i++) {
        if (sex[i].checked == true) {
            oksex = true;
        }
    }
    if (oksex == false) {
        document.getElementById("sexp").innerText = " required!";
    }
}
function CheckPhone() { 
    var test = /^[0-9]*$/;
    var text = document.getElementById("formtelephone").value;
    if (text == "") {

    }
    else
        if (test.exec(text)) {
            document.getElementById("phonep").style.color = "green";
            document.getElementById("phonep").innerText = " accept";
        }
        else {
            document.getElementById("phonep").style.color = "red";
            document.getElementById("phonep").innerText = "wrong format!";
        }
}
function resetAll() {
    document.getElementById("phonep").innerText = "";
    document.getElementById("emailp").innerText = "";
    document.getElementById("sexp").innerText = "";
    document.getElementById("nump").innerText = "";
    LoseArea();
}
function CheckAge() {
    var test = /([0-9]){1,3}/;
    var text = document.getElementById("formnumber").value;
    text = text.replace(test, text);
    if (text == "") {

    }
    else
        if (test.exec(text)) {
            document.getElementById("nump").style.color = "green";
            document.getElementById("nump").innerText = " accept";
        }
        else {
            document.getElementById("nump").style.color = "red";
            document.getElementById("nump").innerText = "wrong format!";
        }
}