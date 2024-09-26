

let result = document.querySelector("#result")
let fuc
function toss(toss) {
    fuc = Math.ceil(Math.random(fuc) * 2)
    if (toss === 1 && fuc === 1 || toss === 2 && fuc === 2) {
        result.innerHTML = "You Winn!"
        console.log("You Winn!" + fuc);
    } else{
        result.innerHTML = "You Losse!"
        console.log("You Losse!" + fuc);
    }
}



// console.log(Num);

// let abc = Math.ceil(Math.random() * 5)

// console.log(abc);


// console.log(Math.ceil(Math.random(num) * 2));
