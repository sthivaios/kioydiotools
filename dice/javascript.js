


let d1 = 0;
let d2 = 0;
let d3 = 0;
let total = 0;

document.getElementById("roll1").onclick = function(){
    console.log("Dice 1 Rolled By User");
    d1 = Math.random()*6;
    d1 = Math.ceil(d1);
    console.log("Dice 1 : " + d1);
    document.getElementById("res1").innerHTML = (d1);
    total = Number(d1) + Number(d2) + Number(d3);
    console.log("(D1, D2, D3, Total)  " + d1 + ", " + d2 + ", " + d3 + ", " + total);
    document.getElementById("restotal").innerHTML = (total);
}

document.getElementById("roll2").onclick = function(){
    console.log("Dice 2 Rolled By User");
    d2 = Math.random()*6;
    d2 = Math.ceil(d2);
    console.log("Dice 2 : " + d2);
    document.getElementById("res2").innerHTML = (d2);
    total = Number(d1) + Number(d2) + Number(d3);
    console.log("(D1, D2, D3, Total)  " + d1 + ", " + d2 + ", " + d3 + ", " + total);
    document.getElementById("restotal").innerHTML = (total);
}

document.getElementById("roll3").onclick = function(){
    console.log("Dice 3 Rolled By User");
    d3 = Math.random()*6;
    d3 = Math.ceil(d3);
    console.log("Dice 3 : " + d3);
    document.getElementById("res3").innerHTML = (d3);
    total = Number(d1) + Number(d2) + Number(d3);
    console.log("(D1, D2, D3, Total)  " + d1 + ", " + d2 + ", " + d3 + ", " + total);
    document.getElementById("restotal").innerHTML = (total);
}

document.getElementById("rollall").onclick = function(){
    console.log("All Dice Rolled By User");
    d1 = Math.random()*6;
    d1 = Math.ceil(d1);
    document.getElementById("res1").innerHTML = (d1);
    d2 = Math.random()*6;
    d2 = Math.ceil(d2);
    document.getElementById("res2").innerHTML = (d2);
    d3 = Math.random()*6;
    d3 = Math.ceil(d3);
    document.getElementById("res3").innerHTML = (d3);
    total = Number(d1) + Number(d2) + Number(d3);
    console.log("(D1, D2, D3, Total)  " + d1 + ", " + d2 + ", " + d3 + ", " + total);
    document.getElementById("restotal").innerHTML = (total);
}

document.getElementById("reset").onclick = function(){
    confirm = window.confirm("Reset all dice (set to 0)?")
    if(confirm){
        window.location.href = window.location.href
    }
}