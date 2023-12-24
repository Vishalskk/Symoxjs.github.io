function gridbutton(){
document.getElementsByClassName("navdiv")[0].style.width="70px";
document.getElementById("gridbutton2").style.display="block";
document.getElementById("gridbutton").style.display="none";
    var a = document.getElementsByTagName("h4");
    for(i=0;i<=a.length;i++){
        a[i].style.display="none";
}
}
function gridbutton2(){
document.getElementsByClassName("navdiv")[0].style.width="255px";
document.getElementById("gridbutton2").style.display="none";
document.getElementById("gridbutton").style.display="block";
var a = document.getElementsByTagName("h4");
for(i=0;i<=a.length;i++){
    a[i].style.display="block";
}
    
}
let viewprofiletimeout = setTimeout(vptm,2000);
function viewprofile(){
location.replace("index.html");
}

function darklightthemes(){
    document.getElementById("navdivid").style.backgroundColor="#030f16";
    document.getElementById("navbar").style.backgroundColor="white";
    document.getElementById("themesun").style.display="block";
    document.getElementById("div21").style.backgroundColor="white";
    document.getElementById("div22").style.backgroundColor="white";
    document.getElementById("div31ka1").style.backgroundColor="white";
    document.getElementById("div31ka2").style.backgroundColor="white";
    document.getElementById("div31ka3").style.backgroundColor="white";
    document.getElementById("div41ka1").style.backgroundColor="white";
    document.getElementById("div41ka2").style.backgroundColor="white";
    document.getElementById("secondmaindivid").style.backgroundColor="white";
    document.getElementById("forbgcolor").style.backgroundColor="whitesmoke";
    document.getElementById("gridbutton2").style.Color="white";

     var nextdsahdivs = document.getElementsByClassName("div1");
    for(v=0;v<=nextdsahdivs.length;v++){
        nextdsahdivs[v].style.backgroundColor="white";
    }
    // document.getElementById("ghantibutton2").style.display="none";
    



}

function acro1downclk(){
    document.getElementById("acro1").style.display="block";
    document.getElementById("firstupchevron").style.display="none";
    document.getElementById("firstupchevronDOP").style.display="block";
}

function acro1upclk(){
    document.getElementById("acro1").style.display="none";
    document.getElementById("firstupchevronDOP").style.display="none";
    document.getElementById("firstupchevron").style.display="block";
}








function acro2downclk(){
    document.getElementById("acro2").style.display="block";
    document.getElementById("secdownchevron").style.display="none";
    document.getElementById("secupchevron").style.display="block";
}

function acro2upclk(){
    document.getElementById("acro2").style.display="none";
    document.getElementById("secupchevron").style.display="none";
    document.getElementById("secdownchevron").style.display="block";
}




function toggleContent(containerId, chevronUpId, chevronDownId) {
    var container = document.getElementById(containerId);

    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      document.getElementById(chevronDownId).style.display = "none";
      document.getElementById(chevronUpId).style.display = "block";
    } else {
      container.style.display = "none";
      document.getElementById(chevronUpId).style.display = "none";
      document.getElementById(chevronDownId).style.display = "block";
    }
  }


  
