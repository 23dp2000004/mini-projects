// get the encode button
const buttonE = document.getElementById("encodeBttn");

// add click event
buttonE.addEventListener("click", function(){

    const cipher = document.getElementById("cipherType").value;
    //console.log(cipher)


    //take the input string and keep it here
    const mesg = document.getElementById("input").value;
    const message = mesg.toUpperCase();
    
    //console.log(mesg)


    if(cipher === "a1z26"){

        let encryptedMesg = "";

        // map alphabet to ascii then subtract 64 (use abs value)
        for (let i = 0; i < message.length; i++) {
            let ch = message[i];


            if (ch >= 'A' && ch <= 'Z'){

                let codeNum = ch.charCodeAt(0) - 64;
                let fcode = codeNum.toString().padStart(2, "0");

                
                encryptedMesg += fcode;
                //console.log(ch, code);
                //console.log(encryptedMesg)

            }
            else{
                encryptedMesg += ch;
            }
        }

        const resultElement = document.getElementById("encryptedMesg");
            resultElement.textContent = encryptedMesg;

        // send the encryped message to the decoders input
        document.getElementById("encryptedInput").value = encryptedMesg;

    }


});


// get decoder button
const buttonD = document.getElementById("decodeBttn")

// add click event
buttonD.addEventListener("click", function(){

    const cipher = document.getElementById("decipherType").value;
    //console.log(cipher);

    //take the input string and keep it here
    const mesg = document.getElementById("encryptedInput").value;
    //console.log(mesg);

    if(cipher === "a1z26"){

        let decryptedMesg = "";

        // map number to alphabet and take care of padded 0s
        for (let i = 0; i < mesg.length; i++) {
            let ch = mesg[i];

            if(ch >= '0' && ch <= '9'){

                let pair = mesg[i] + mesg[i+1]; //string form: "01"
                let num = Number(pair); //number: 1

                if (num >= 1 && num <= 26){

                    let codeNum = num + 64; //now we have ascii value
                    let alphabet = String.fromCharCode(codeNum);

                    decryptedMesg += alphabet;
                    //console.log(decryptedMesg)

                    i++
                }
            }   
            else{
                decryptedMesg += ch;
            }


        }

        const resultElement = document.getElementById("decodedMesg");
            resultElement.textContent = decryptedMesg;

    }




})