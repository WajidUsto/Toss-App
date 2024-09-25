
let head = document.querySelector("#btn1")
let tails = document.querySelector("#btn2")
let result = document.querySelector("#result")
let img = document.querySelector("#img")
let num;
function toss(para) {
    num = Math.ceil(Math.random(num) * 2)
    if (para === 1 && num === 1 || para === 2 && num === 2) {
        result.innerHTML = "You Win The Toss!"
        console.log("You Win The Toss!" + num);
        
    } else {
        console.log("You Losse The Toss!" + num);
        result.innerHTML = "You Losse The Toss!"
    }
}


















