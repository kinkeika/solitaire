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
    }
}