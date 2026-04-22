// get the encode button
const button = document.getElementById("encodeBttn");

// add click event
button.addEventListener("click", function(){

    const cipher = document.getElementById("cipherType").value;


    //take the input string and keep it here
    const mesg = document.getElementById("input").value;
    const message = mesg.toUpperCase();
    
    //console.log(message)


    if(cipher === "a1z26"){

        let encryptedMesg = "";

        // map alphabet to ascii then subtract 64 (use abs value)
        for (let i = 0; i < message.length; i++) {
            let ch = message[i];
            let code = ch.charCodeAt(0) - 64;

            //handle " " spaces later
            // handle . , ? ! special symbols later

            encryptedMesg =  encryptedMesg + " " + code;
            //console.log(ch, code);
            //console.log(encryptedMesg)

            
        }

        const resultElement = document.getElementById("encryptedMesg");
            resultElement.textContent = encryptedMesg;

    }


    


});
