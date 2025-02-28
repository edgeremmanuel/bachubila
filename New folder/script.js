var manuBtn = document.getElementById("manuBtn")
var sideNav = document.getElementById("sideNav")
var manu = document.getElementById("manu")

sideNav.style.right = "-250";

manuBtn.onclick = function name() {
    if (sideNav.style.right == "-250") {
        sideNav.style.right = "0";
        menu.src="img\close.png";
        
    }
    else{sideNav.style.right = "-250";}
   
}