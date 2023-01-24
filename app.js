//This will get the button
var btnTranslate = document.querySelector("#btn-translate");

//This will get the input
var txtInput = document.querySelector("#txt-input");

//This will get the output
var outputDiv = document.querySelector("#output");

//This is the server URL because we want to talk to the server
var serverURL = "https://api.funtranslations.com/translate/minion.json"

//This takes the server URL and adds querry parames and key values
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

//This will show alert when error occures
function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server! Try again after some time")
}

 //What to do when click happens
function clickHandler() {
   var inputText = txtInput.value; 

//calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //Shows the output
    })
    .catch(errorHandler)
};

//This will do the functionality when click happens
btnTranslate.addEventListener("click", clickHandler)