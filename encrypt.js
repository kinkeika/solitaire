convert = require("./data-conversion.js");
keys = require("./keys.js");

module.exports =  function(plaintext, key, options) {
    // Convert the plaintext into an array of numbers, one per character.
    var inputtype;
    if (Object.prototype.toString.call(plaintext) === "[object Array]") {
        inputtype = "array";
        // Iterate over each item in the provided array to ensure it is
        // valid, and convert nonconforming types to a number if possible.
        for (var i = 0; i < plaintext.length; i++) {
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
                throw new Error("plaintext[" + i + "] invalid type.");
            }
        }
    } else if (typeof plaintext === "string") {
        inputtype = "string";
        // Drop non A-Z characters
        plaintext = plaintext.replace(/[^a-zA-Z]/g, "");

        // Convert the rest to an array of numbers and assign it to plaintext.
        plaintextArray = [];
        for (var i = 0; i < plaintext.length; i++) {
            plaintextArray[i] = convert.letterToNumber(plaintext.charAt(i));
        }
        plaintext = plaintextArray;
    } else {
        throw new Error("Unrecognised type of plaintext");
    }

    // Now that we know we have valid plaintext, we need to validate the key.
    // Fourtanately this is abstracted.
    if (!keys.validateKey(key)[0]) { throw new Error("Invalid key") }

    // We also need to validate the options object.
    if (options) {
        if (options.output) {
            if (options.output !== "array" && options.output !== "string") {
                throw new Error("Invalid options.output value");
            }
        }
    }

    // Now we can generate the keystream, this is also abstracted.
    stream = keys.keystream(key, plaintext.length);

    // Add every value to the plaintext modulo 26.
    for (var i = 0; i < plaintext.length; i++) {
        plaintext[i] = ((plaintext[i] + stream[i]) % 26) + 1;
    }

    // Now give the user the output in their preferred format. If they specified
    // a format in an options object, use that, otherwise give it to them in the
    // format they gave it to us.
    var createStringFromArray = function(array) {
        var output = "";
        for (var i = 0; i < array.length; i++) {
            console.log(array[i])
            output += convert.numberToLetter(array[i]);
            // Seperate the ciphertext into 5 character groups per tradition
            if (i === 4) {
                output += " ";
            } if (output.length > 6 &&
                 (output.length - output.lastIndexOf(" ")) === 6) {
                output += " ";
            }
        }
        // It's possible there could be a trailing space, remove it
        if (output.charAt(output.length - 1) === " ") {
            output = output.substr(0, output.length - 1);
        }
        return output;
    }

    if (options) {
        if (options.output) {
            if (options.output === "array") {
                return plaintext;
            } else {
                return createStringFromArray(plaintext);
            }
        }
    } else if (inputtype === "array") {
        return plaintext;
    } else {
        return createStringFromArray(plaintext);
    }
}