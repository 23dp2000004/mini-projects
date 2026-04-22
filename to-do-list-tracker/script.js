// Get the button
const button = document.getElementById("addTaskBttn");

// Add click event
button.addEventListener("click", function() {

    // Get the value from the input field
    const taskValue = document.getElementById("taskInput").value;

    // print to console
    console.log("Input value is:", taskValue);

    // if empty task
    if (taskValue === "") {
        console.log("Empty input - stopping");
        return; 
    }

    // Create elements 

    // list elements
    const li = document.createElement("li"); 

    const span = document.createElement("span"); 
    span.textContent = taskValue; 

    // done button
    const doneBttn = document.createElement("button"); 
    doneBttn.textContent = "Done"; 

    // Add click event for done button
        doneBttn.addEventListener("click", function() {

        const doneList = document.getElementById("done-list");

        // get the text from span
        const text = span.textContent;

        // create new li (text only)
        const newLi = document.createElement("li");
        newLi.textContent = text;

        // add to done list
        doneList.appendChild(newLi);

        // remove original task
        li.remove();
    });

    // discard button
    const discardBttn = document.createElement("button"); 
    discardBttn.textContent = "Discard"; 

    // Add click event for discard button
        discardBttn.addEventListener("click", function() {

        const discardList = document.getElementById("discarded-list");

        // get the text from span
        const text = span.textContent;

        // create new li (text only)
        const newLi = document.createElement("li");
        newLi.textContent = text;

        // add to done list
        discardList.appendChild(newLi);

        // remove original task
        li.remove();
    });

    

    // edit button
    const editBttn = document.createElement("button"); 
    editBttn.textContent = "Edit";

    // Add click event for Edit Button
    editBttn.addEventListener("click", function() {

        const currentText = span.textContent;

        const newText = prompt("Edit your task:", currentText);

        // if user cancels → do nothing
        if (newText === null) {
            return;
        }

        // if empty → also do nothing (optional rule)
        if (newText === "") {
            return;
        }

        // update text
        span.textContent = newText;
    });

    // remove button
    const removeBttn = document.createElement("button");
    removeBttn.textContent = "Remove";

    // Add click event for remove Button
    removeBttn.addEventListener("click", function() {
        li.remove();
    });

    // Append elements into li 
    li.appendChild(span); 
    li.appendChild(editBttn);
    li.appendChild(doneBttn); 
    li.appendChild(discardBttn); 
    li.appendChild(removeBttn); 
    

    // DISPLAY it in the To-Do list
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(li);

    // RESET the input so it's ready for the next task
    document.getElementById("taskInput").value = "";

});