convert = require("./data-conversion.js");
keys = require("./keys.js");

module.exports = function(ciphertext, key, options) {
    // Convert the ciphertext into an array of numbers, one per character.
    var converted = convert.inputToStandardisedArray(ciphertext);
    ciphertext = converted[0];
    var inputtype = converted[1];

    // Now that we know we have valid ciphertext, we need to validate the key.
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
    stream = keys.keystream(key, ciphertext.length);

    // Subtract every value to the ciphertext modulo 26.
    for (var i = 0; i < ciphertext.length; i++) {
        ciphertext[i] = ((ciphertext[i] - stream[i]) % 26) + 1;
    }

    // Now give the user the output in their preferred format. If they specified
    // a format in an options object, use that, otherwise give it to them in the
    // format they gave it to us.
    var createStringFromArray = function(array) {
        var output = "";
        for (var i = 0; i < array.length; i++) {
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
                return ciphertext;
            } else {
                return createStringFromArray(ciphertext);
            }
        }
    } else if (inputtype === "array") {
        return ciphertext;
    } else {
        return createStringFromArray(ciphertext);
    }
}