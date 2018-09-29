var center;
var clickable;
function AboutStart() {
    clickable = false;
    setTimeout(AboutStart2, 1500);
}
function AboutStart2() {
 for (var i = 0; i < 5; i++) {
        document.getElementById("pimg" + i).className = "pic" + i;
 }
 center = 0;
 document.getElementById("text0").className = "text";
}

function Turn(ids) {
    if ((ids - center + 5) % 5 == 1) {
        document.getElementById("text"+center).className = "hideText";
        var j = 3;
        document.getElementById("pimg" + (center + 3) % 5).className = "picS3";
        for (var i = (center+4)%5; i%5 != (center+3)%5; i++) {
            document.getElementById("pimg" + (i % 5)).className = "pic" + (j) % 5;
            j++;
      
        }
        document.getElementById("text"+ids).className = "text";
        center = ids;
    }
    if ((ids - center + 5) % 5 == 4) {
        document.getElementById("text"+center).className = "hideText";
        var j = 4;
        document.getElementById("pimg" + (center + 2) % 5).className = "picS4";
        for (var i = (center +3) % 5; (i+5) % 5 != (center +2) % 5; i++) {
            document.getElementById("pimg" + (i% 5)).className = "pic" + j % 5;
            j++;

        }
        document.getElementById("text"+ids).className = "text";
        center = ids;
    }
   
}