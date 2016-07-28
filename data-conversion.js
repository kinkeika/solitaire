module.exports = {
    letterToNumber: function(letter) {
        switch (letter) {
            case "a":
            case "A":
                return 1;
            case "b":
            case "B":
                return 2;
            case "c":
            case "C":
                return 3;
            case "d":
            case "D":
                return 4;
            case "e":
            case "E":
                return 5;
            case "f":
            case "F":
                return 6;
            case "g":
            case "G":
                return 7;
            case "h":
            case "H":
                return 8;
            case "i":
            case "I":
                return 9;
            case "j":
            case "J":
                return 10;
            case "k":
            case "K":
                return 11;
            case "l":
            case "L":
                return 12;
            case "m":
            case "M":
                return 13;
            case "n":
            case "N":
                return 14;
            case "o":
            case "O":
                return 15;
            case "p":
            case "P":
                return 16;
            case "q":
            case "Q":
                return 17;
            case "r":
            case "R":
                return 18;
            case "s":
            case "S":
                return 19;
            case "t":
            case "T":
                return 20;
            case "u":
            case "U":
                return 21;
            case "v":
            case "V":
                return 22;
            case "w":
            case "W":
                return 23;
            case "x":
            case "X":
                return 24;
            case "y":
            case "Y":
                return 25;
            case "z":
            case "Z":
                return 26;
            default:
                throw new Error("Invalid letter");
        }
    },

    numberToLetter: function(number) {
        switch (number) {
            case 1:
                return "A";
            case 2:
                return "B";
            case 3:
                return "C";
            case 4:
                return "D";
            case 5:
                return "E";
            case 6:
                return "F";
            case 7:
                return "G";
            case 8:
                return "H";
            case 9:
                return "I";
            case 10:
                return "J";
            case 11:
                return "K";
            case 12:
                return "L";
            case 13:
                return "M";
            case 14:
                return "N";
            case 15:
                return "O";
            case 16:
                return "P";
            case 17:
                return "Q";
            case 18:
                return "R";
            case 19:
                return "S";
            case 20:
                return "T";
            case 21:
                return "U";
            case 22:
                return "V";
            case 23:
                return "W";
            case 24:
                return "X";
            case 25:
                return "Y";
            case 26:
                return "Z";
            default:
                throw new Error("Invalid number");
        }
    },

    cardNumberToFriendlyName: function(card) {
        switch (card) {
            case 1:
                return "Ace of Clubs";
            case 2:
                return "2 of Clubs";
            case 3:
                return "3 of Clubs";
            case 4:
                return "4 of Clubs";
            case 5:
                return "5 of Clubs";
            case 6:
                return "6 of Clubs";
            case 7:
                return "7 of Clubs";
            case 8:
                return "8 of Clubs";
            case 9:
                return "9 of Clubs";
            case 10:
                return "10 of Clubs";
            case 11:
                return "Jack of Clubs";
            case 12:
                return "Queen of Clubs";
            case 13:
                return "King of Clubs";
            case 14:
                return "Ace of Diamonds";
            case 15:
                return "2 of Diamonds";
            case 16:
                return "3 of Diamonds";
            case 17:
                return "4 of Diamonds";
            case 18:
                return "5 of Diamonds";
            case 19:
                return "6 of Diamonds";
            case 20:
                return "7 of Diamonds";
            case 21:
                return "8 of Diamonds";
            case 22:
                return "9 of Diamonds";
            case 23:
                return "10 of Diamonds";
            case 24:
                return "Jack of Diamonds";
            case 25:
                return "Queen of Diamonds";
            case 26:
                return "King of Diamonds";
            case 27:
                return "Ace of Hearts";
            case 28:
                return "2 of Hearts";
            case 29:
                return "3 of Hearts";
            case 30:
                return "4 of Hearts";
            case 31:
                return "5 of Hearts";
            case 32:
                return "6 of Hearts";
            case 33:
                return "7 of Hearts";
            case 34:
                return "8 of Hearts";
            case 35:
                return "9 of Hearts";
            case 36:
                return "10 of Hearts";
            case 37:
                return "Jack of Hearts";
            case 38:
                return "Queen of Hearts";
            case 39:
                return "King of Hearts";
            case 40:
                return "Ace of Spades";
            case 41:
                return "2 of Spades";
            case 42:
                return "3 of Spades";
            case 43:
                return "4 of Spades";
            case 44:
                return "5 of Spades";
            case 45:
                return "6 of Spades";
            case 46:
                return "7 of Spades";
            case 47:
                return "8 of Spades";
            case 48:
                return "9 of Spades";
            case 49:
                return "10 of Spades";
            case 50:
                return "Jack of Spades";
            case 51:
                return "Queen of Spades";
            case 52:
                return "King of Spades";
            case 53:
                return "Joker A";
            case 54:
                return "Joker B";
            default:
                throw new Error("Invalid card number");
        }
    },

    inputToStandardisedArray: function(input) {
        var inputtype;
        if (Object.prototype.toString.call(input) === "[object Array]") {
            inputtype = "array";
            // Iterate over each item in the provided array to ensure it is
            // valid, and convert nonconforming types to a number if possible.
            for (var i = 0; i < input.length; i++) {
                if (typeof input[i] === "number") {
                    if (input[i] < 1 || input[i] > 26) {
                        throw new Error("input[" + i + "] out of bounds.");
                    }
                } else if (typeof input[i] === "string") {
                    if (input[i].match(/^[a-zA-Z]$/)) {
                        input[i] == convert.letterToNumber(input[i]);
                    } else {
                        throw new Error("input[" + i + "] invalid string.");
                    }
                } else {
                    throw new Error("input[" + i + "] invalid type.");
                }
            }
        } else if (typeof input === "string") {
            inputtype = "string";
            // Drop non A-Z characters
            input = input.replace(/[^a-zA-Z]/g, "");

            // Convert the rest to an array of numbers and assign it to input.
            inputArray = [];
            for (var i = 0; i < input.length; i++) {
                inputArray[i] = convert.letterToNumber(input.charAt(i));
            }
            input = inputArray;
        } else {
            throw new Error("Unrecognised type of input");
        }
        return [input, inputtype];
    }
}