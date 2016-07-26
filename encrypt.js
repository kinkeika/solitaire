convert = require("./data-conversion.js");

module.exports =  function(plaintext, key, options) {
    // Convert the plaintext into an array of numbers, one per character.
    if (Object.prototype.toString.call(plaintext) === "[object Array]") {
        // Iterate over each item in the provided array to ensure it is
        // valid, and convert nonconforming types to a number if possible.
        for (var i = 0; i < plaintext.length, i++) {
            if (typeof plaintext[i] === "number") {
                if (plaintext[i] < 1 || plaintext[i] > 26) {
                    throw new Error("plaintext[" + i + "] out of bounds.");
                }
            } else if (typeof plaintext[i] === "string") {
                if (plaintext[i].match(/^[a-zA-Z]$/)) {
                    plaintext[i] == convert.letterToNumber(plaintext[i]);
                } else {
                    throw new Error("plaintext[" + i + "] invalid string.");
                }
            } else {
                throw new Error("plaintext[" i + "] invalid type.");
            }
        }
    } else if (typeof plaintext === "string") {
        // Drop non A-Z characters
        plaintext.replace(/^[^a-zA-Z]/g, "");

        // Convert the rest to an array of numbers and assign it to plaintext.
        plaintextArray = [];
        for (var i = 0; i < plaintext.length; i++) {
            plaintextArray[i] = convert.letterToNumber(plaintext.charAt(i));
        }
        plaintext = plaintextArray;
    } else {
        throw new Error("Unrecognised type of plaintext");
    }

    
}