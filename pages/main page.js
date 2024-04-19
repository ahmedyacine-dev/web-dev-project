
const left=document.querySelectorAll("#left");
const right=document.querySelectorAll("#right");

const p1=document.querySelectorAll("#p1");
const p2=document.querySelectorAll("#p2");
const p3=document.querySelectorAll("#p3");


const search=document.querySelectorAll("#ssss");
const ser=document.querySelectorAll("#ww")
var i=1;
var j
search[0].addEventListener("click", function () {

    ser[0].classList.toggle("sor");
    search[0].classList.toggle("rrr");
})
right[0].addEventListener("click", function() {
    i++;
    
    
    if (i==2) {
        p1[0].classList.toggle("go1");
        p2[0].classList.toggle("come2");
        right[0].classList.toggle("tban");
        left[0].classList.toggle("tban1");
    }
    if (i==3) {
        p2[0].classList.toggle("go2");
        p3[0].classList.toggle("come3");
        right[0].classList.toggle("troh");
        

    }
    if(i>3){
        i=3;
    }
   
});
left[0].addEventListener("click", function() {
    i--;
    if (i==2) {
        p2[0].classList.toggle("go2");
        p3[0].classList.toggle("come3");
       
       right[0].classList.toggle("troh");
    }
    if (i==1) {
        p1[0].classList.toggle("go1");
        p2[0].classList.toggle("come2");
        left[0].classList.toggle("tban1");
       right[0].classList.toggle("tban");
      

    }
    if(i<1){
        i=1;
    }
});




