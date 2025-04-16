var count = 0;



function increase(){

    count += 1
    document.getElementById("number").innerHTML= count;

}


function decrease(){

    count -= 1
    document.getElementById("number").innerHTML= count;

}


function reset(){

    count = 0
    document.getElementById("number").innerHTML= count;

}