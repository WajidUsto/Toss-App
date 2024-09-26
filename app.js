
let head = document.querySelector("#btn1")
let tails = document.querySelector("#btn2")
let result = document.querySelector("#result")
let img = document.querySelector("#img")
let num;
function toss(para) {
    num = Math.ceil(Math.random(num) * 2)
    if (para === 1 && num === 1 || para === 2 && num === 2) {
        result.innerHTML = "The Winner Is Heads!"
        console.log("You Win The Toss!" + num);
        
    } else {
        console.log("You Loss The Toss!" + num);
        result.innerHTML = "The Winner Is Tails!"
    }
    if (num === 1) {
        img.src = "./imgs/head.png"
    } else if (num === 2) {
        img.src = "./imgs/tails.png"
    }
}











