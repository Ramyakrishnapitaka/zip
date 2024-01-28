var score=0;
function decrease(){
    score=score-1;
    document.getElementById("box").textContent=score;
}
function increase(){
    score=score+1;
    document.getElementById("box").textContent=score;
}
function Show(){
    document.getElementById("hide").style.display="block";
     
    
}
