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

    // CREATE the new list item
    const li = document.createElement("li");
    li.textContent = taskValue;

    // DISPLAY it in the To-Do list
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(li);

    // RESET the input so it's ready for the next task
    document.getElementById("taskInput").value = "";

});