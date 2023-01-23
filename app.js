var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);

// btnTranslate.addEventListener("click", function clickEventHandler() {
//     console.log("clicked");
// });

function clickHandler() {
    outputDiv.innerText = "Welcome! " + txtInput.value;  
};

btnTranslate.addEventListener("click", clickHandler)