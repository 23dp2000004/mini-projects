// get the button
const button = document.getElementById("rollBttn");

// add click event
button.addEventListener("click", function(){

    const dice = document.getElementById("chooseDice").value;
    //dice here is the user chosen one

    let value

    if(dice === "d6single"){
        value = Math.floor(Math.random() * 6) + 1;
        // print to console
        console.log(value);
    }
    else if(dice === "d20single"){
        value = Math.floor(Math.random() * 20) + 1;
        // print to console
        console.log(value);
    }
    else if(dice === "d6double"){
        let value1 = Math.floor(Math.random() * 6) + 1;
        let value2 = Math.floor(Math.random() * 6) + 1;

        const sum = value1 + value2
        value = value1 + " + " + value2 + " = " + sum;
        // print to console
        console.log(value1, value2, value);

    }
    
    // make the html display the value
    const resultElement = document.getElementById("result");
    resultElement.textContent = value;

});