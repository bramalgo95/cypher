// Create function to encode message
function cypher (myString) {
    
    // Create variable to store encoded message
    let cypherString = "";

    for (let i = 0; i < myString.length; i++) {
        // If character is uppercase letter
        if (myString[i].toUpperCase() === myString[i] && myString[i].toLowerCase() !== myString[i]) {
            
            let asciiInput = myString.charCodeAt(i);
            // uppercase letters in ASCII are from 65 to 90
            if (asciiInput + 15 <= 90) {
                let asciiOutput = asciiInput + 15;
                let codedChar = String.fromCharCode(asciiOutput);
                
                cypherString += codedChar;
            }
            else {
                let asciiOutput = (asciiInput + 15) - 90 + 64;
                let codedChar = String.fromCharCode(asciiOutput);
                
                cypherString += codedChar;
            }
        }
        
        // If character is lowercase letter
        else if (myString[i].toLowerCase() === myString[i] && myString[i].toUpperCase() !== myString[i]) {
            
            let asciiInput = myString.charCodeAt(i);
            // lowercase letters in ASCII are from 97 to 122
            if (asciiInput + 15 <= 122) {
                let asciiOutput = asciiInput + 15;
                let codedChar = String.fromCharCode(asciiOutput);
                
                cypherString += codedChar;
            }
            else {
                let asciiOutput = (asciiInput + 15) - 122 + 96;
                let codedChar = String.fromCharCode(asciiOutput);
                
                cypherString += codedChar;
            }
        }
        
        // Any other character 
        else {
            cypherString += myString[i];
        }
    }

// function return the new encoded message
return cypherString;  
}

let messg = prompt("Please enter message you want to encode.");
let codedMessage = cypher(messg);

console.log(`Encoded message : ${codedMessage}`);
