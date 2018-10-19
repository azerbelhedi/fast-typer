var score = 0;
var time = 10 ;
var play = true ;
function save(){
    alert("i am not  uploading  to fire base") ;
    score = 0;
    time = 20 ;
    document.getElementById("score").innerHTML = "score : " + score ;
    document.getElementById("time").innerHTML =  time ;
    play = true ;
}

setInterval(function(){
    if(time>0){
        time--;
        document.getElementById("time").innerHTML = time ;
    }
    else{
        play = false ;
    }
},1000);

document.addEventListener('keypress',function(){
    if(play){score++ ;}
    document.getElementById("score").innerHTML = "score : " + score ;
});


