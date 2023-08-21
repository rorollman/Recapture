//Graph popup code
var modal = document.getElementById("myModal");

var img = document.getElementById("graph");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
}

function learnClick(){
    const element = document.getElementById("firstspacer");
    element.scrollIntoView({ behavior: "smooth"});
}

function legScroll(){
    const element = document.getElementById("lastspacer");
    element.scrollIntoView({ behavior: "smooth"});
}
