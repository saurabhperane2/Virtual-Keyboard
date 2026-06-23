let body = document.querySelector("body");
let inputText = document.querySelector("#inputText");
let letters = document.querySelectorAll("#letter");
let backSpace = document.querySelector("#backSpace");
let spaceBar = document.querySelector("#spaceBar");
let keyboard = document.querySelector(".keyboard");
let clearAll = document.querySelector("#clearAll");
let tab = document.querySelector("#tab");
let capsLock = document.querySelector("#capsLock");
let counter = 0;
keyboard.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
letters.forEach((letter) => {
        letter.addEventListener("click", () => {
            letter.style.transition = "transform 0.5s ease";
            letter.style.transform = "scale(0.9)";
            inputText.innerText += letter.innerText;
            setTimeout(() => {
                letter.style.transform = "scale(1)";
            }, 500);
        });
});
backSpace.addEventListener("click", () => {
    backSpace.style.transition = "transform 0.5s ease";
    backSpace.style.transform = "scale(0.9)";
    inputText.innerText = inputText.innerText.slice(0, -1);
    setTimeout(() => {
        backSpace.style.transform = "scale(1)";
    }, 500);
});
spaceBar.addEventListener("click", () => {
    spaceBar.style.transition = "transform 0.5s ease";
    spaceBar.style.transform = "scale(0.9)";
    inputText.innerText += " ";
    setTimeout(() => {
        spaceBar.style.transform = "scale(1)";
    }, 500);
});
clearAll.addEventListener("click", () => {
    clearAll.style.transition = "transform 0.5s ease";
    clearAll.style.transform = "scale(0.9)";
    inputText.innerText = "";
    setTimeout(() => {
        clearAll.style.transform = "scale(1)";
    }, 500);
});
tab.addEventListener("click", () => {
    tab.style.transition = "transform 0.5s ease";
    tab.style.transform = "scale(0.9)";
    inputText.innerText += "    ";
    setTimeout(() => {
        tab.style.transform = "scale(1)";
    }, 500);
});
capsLock.addEventListener("click", () => {
    capsLock.style.transition = "transform 0.5s ease";
    capsLock.style.transform = "scale(0.9)";
    if(counter % 2 == 0){
        letters.forEach((letter) => {
            letter.innerText = letter.innerText.toString();
            letter.innerText = letter.innerText.toLowerCase();
            console.log(letter.innerText);
        });
        ++counter;
    }
    else{
        letters.forEach((letter) => {
            letter.innerText = letter.innerText.toString();
            letter.innerText = letter.innerText.toUpperCase();
            console.log(letter.innerText);
        });
        ++counter;
    }
    setTimeout(() => {
        capsLock.style.transform = "scale(1)";
    }, 500);
});
