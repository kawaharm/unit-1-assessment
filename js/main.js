// VARIABLES
let button = document.querySelector("button");
let input = document.querySelector("input");
let count = document.querySelector("h1");
let currentNum = parseInt(count.innerText);
input.value = 1;

// LOAD DOM CONTENT FIRST
window.addEventListener("DOMContentLoaded", (e) => {

});

// COUNTER FUNCTION 
document.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") === "plus") {
        let inputValue = parseInt(input.value);
        currentNum += inputValue;
        count.innerText = currentNum;
    }
    else if (e.target.getAttribute("class") === "minus") {
        let inputValue = parseInt(input.value);
        currentNum -= inputValue;
        count.innerText = currentNum;
    }

    // CHANGE COUNT DISPLAY COLOR RED IF NEGATIVE
    if (currentNum < 0) {
        count.style.color = "red";
    } 
    else {
        count.style.color = "black";
    } 

})

// MOUSE OVER WILL INVERT BACKGROUND COLOR
document.addEventListener("mouseover", function(e) {
    if (e.target.getAttribute("class") === "plus" || 
        e.target.getAttribute("class") ==="minus") {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#ABB2B9";
    }
  });

document.addEventListener("mouseout", function(e) {
    if (e.target.getAttribute("class") === "plus" || 
        e.target.getAttribute("class") ==="minus") {
        e.target.style.backgroundColor = "#ABB2B9";
        e.target.style.color = "";
    }
  });

