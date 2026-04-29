// get the space where event is typing
const textarea = document.getElementById("note-content");

// get the counter
const counter = document.getElementById("char-count");

// add event for typing in textarea
textarea.addEventListener("input", function(){
    const text = textarea.value;
    const count = text.length;

    counter.textContent = "Characters: " + count + "/200";
    //counter.textContent = textarea.value.length + "/200";



});
