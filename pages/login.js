const own=document.querySelectorAll("#owner");
const cli=document.querySelectorAll("#client");
const ccc=document.querySelectorAll("#cc");
const ooo=document.querySelectorAll("#oo");
const oww=document.querySelectorAll("#owww");
const cll=document.querySelectorAll("#clll");
const nth=document.querySelectorAll("#nothing");
own[0].addEventListener("click", function () {
    
    cli[0].classList.toggle("client");
    ccc[0].classList.toggle("cc");
    nth[0].classList.toggle("nothing1");
    oww[0].classList.toggle("owww1")
});
cli[0].addEventListener("click", function () {
    
    own[0].classList.toggle("owner");
    ooo[0].classList.toggle("oo");
    nth[0].classList.toggle("nothing1");
    cll[0].classList.toggle("clll1")
})
