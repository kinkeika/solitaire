var crypto = require("crypto");

module.exports = {
    generateKey: function(passphrase) {
        // If the user supplies a passphrase, we derive a key from that.
        if (passphrase) {

        }
        // The user did not supply a passphrase, so we will generate random key
        // from scratch.

        // Create an unshuffled deck, literally the numbers 1-54 in sequence.
        key = Array.apply(0, Array(54)).map(function (_, i) { return i + 1; });

        // Shuffle the key using values from the crypto library.
        var ci = key.length, temp, ri;

        while (0 !== ci) {
            ri = Math.floor((crypto.randomBytes(1)[0] / 255) * ci);
            ci -= 1;

            temp = key[ci];
            key[ci] = key[ri];
            key[ri] = temp;
        }

        return key;
    },

    validateKey: function(key) {
        // The key is an array and should have spades as 1-13, hearts as 14-26,
        // diamonds as 27-39, clubs as 40-52, joker A as 53 and joker B as 54.
        // Validate the key before continuing.
        numbersHad = {
            s1: false, s2: false, s3: false, s4: false, s5: false,
            s6: false, s7: false, s8: false, s9: false, s0: false,
            sj: false, sq: false, sk: false,

            h1: false, h2: false, h3: false, h4: false, h5: false,
            h6: false, h7: false, h8: false, h9: false, h0: false,
            hj: false, hq: false, hk: false,

            d1: false, d2: false, d3: false, d4: false, d5: false,
            d6: false, d7: false, d8: false, d9: false, d0: false,
            dj: false, dq: false, dk: false,

            c1: false, c2: false, c3: false, c4: false, c5: false,
            c6: false, c7: false, c8: false, c9: false, c0: false,
            cj: false, cq: false, ck: false,

            ja: false, jb: false,

            clean: true
        }

        if (Object.prototype.toString.call(key) === "[object Array]") {
            if (key.length !== 54) {
                return [false, "Key length is not 64"];
            }

            // This function will check if the card has already been seen, and
            // if it has then it will mark the deck as dirty, causing the deck
            // to be invalid. This avoides duplicates.
            var checkIfHadAndHave = function(id) {
                if (numbersHad[id]) {
                    numbersHad.clean = false
                } else {
                    numbersHad[id] = true
                }
            }
            for (var i = 0; i < key.length; i++) {
                if (typeof key[i] !== "number") {
                    return [false, "key[" + i + "] is not a number."]
                }

                switch (key[i]) {
                    case 1:
                        checkIfHadAndHave("s1");
                        break;
                    case 2:
                        checkIfHadAndHave("s2");
                        break;
                    case 3:
                        checkIfHadAndHave("s3");
                        break;
                    case 4:
                        checkIfHadAndHave("s4");
                        break;
                    case 5:
                        checkIfHadAndHave("s5");
                        break;
                    case 6:
                        checkIfHadAndHave("s6");
                        break;
                    case 7:
                        checkIfHadAndHave("s7");
                        break;
                    case 8:
                        checkIfHadAndHave("s8");
                        break;
                    case 9:
                        checkIfHadAndHave("s9");
                        break;
                    case 10:
                        checkIfHadAndHave("s0");
                        break;
                    case 11:
                        checkIfHadAndHave("sj");
                        break;
                    case 12:
                        checkIfHadAndHave("sq");
                        break;
                    case 13:
                        checkIfHadAndHave("sk");
                        break;
                    case 14:
                        checkIfHadAndHave("h1");
                        break;
                    case 15:
                        checkIfHadAndHave("h2");
                        break;
                    case 16:
                        checkIfHadAndHave("h3");
                        break;
                    case 17:
                        checkIfHadAndHave("h4");
                        break;
                    case 18:
                        checkIfHadAndHave("h5");
                        break;
                    case 19:
                        checkIfHadAndHave("h6");
                        break;
                    case 20:
                        checkIfHadAndHave("h7");
                        break;
                    case 21:
                        checkIfHadAndHave("h8");
                        break;
                    case 22:
                        checkIfHadAndHave("h9");
                        break;
                    case 23:
                        checkIfHadAndHave("h0");
                        break;
                    case 24:
                        checkIfHadAndHave("hj");
                        break;
                    case 25:
                        checkIfHadAndHave("hq");
                        break;
                    case 26:
                        checkIfHadAndHave("hk");
                        break;
                    case 27:
                        checkIfHadAndHave("d1");
                        break;
                    case 28:
                        checkIfHadAndHave("d2");
                        break;
                    case 29:
                        checkIfHadAndHave("d3");
                        break;
                    case 30:
                        checkIfHadAndHave("d4");
                        break;
                    case 31:
                        checkIfHadAndHave("d5");
                        break;
                    case 32:
                        checkIfHadAndHave("d6");
                        break;
                    case 33:
                        checkIfHadAndHave("d7");
                        break;
                    case 34:
                        checkIfHadAndHave("d8");
                        break;
                    case 35:
                        checkIfHadAndHave("d9");
                        break;
                    case 36:
                        checkIfHadAndHave("d0");
                        break;
                    case 37:
                        checkIfHadAndHave("dj");
                        break;
                    case 38:
                        checkIfHadAndHave("dq");
                        break;
                    case 39:
                        checkIfHadAndHave("dk");
                        break;
                    case 40:
                        checkIfHadAndHave("c1");
                        break;
                    case 41:
                        checkIfHadAndHave("c2");
                        break;
                    case 42:
                        checkIfHadAndHave("c3");
                        break;
                    case 43:
                        checkIfHadAndHave("c4");
                        break;
                    case 44:
                        checkIfHadAndHave("c5");
                        break;
                    case 45:
                        checkIfHadAndHave("c6");
                        break;
                    case 46:
                        checkIfHadAndHave("c7");
                        break;
                    case 47:
                        checkIfHadAndHave("c8");
                        break;
                    case 48:
                        checkIfHadAndHave("c9");
                        break;
                    case 49:
                        checkIfHadAndHave("c0");
                        break;
                    case 50:
                        checkIfHadAndHave("cj");
                        break;
                    case 51:
                        checkIfHadAndHave("cq");
                        break;
                    case 52:
                        checkIfHadAndHave("ck");
                        break;
                    case 53:
                        checkIfHadAndHave("ja");
                        break;
                    case 54:
                        checkIfHadAndHave("jb");
                        break;
                    default:
                        return [false, "key[" + i + "] is an invalid number"]
                }
            }

            if (!numbersHad.clean) {
                return [false, "Duplicates exist in the key."]
            }

            // The deck is completely clean and we can return true.
            return [true]
        } else {
            return [false, "Key is not array"];
        }
    },

    keystream: function(key, values) {
        // Throw if the key is invalid or values is not a number.
        if (!this.validateKey(key)[0]) { throw new Error("Invalid key"); }
        if (typeof values !== "number") { throw new Error("Invalid values arg")}

        // Generate as many values as is required.
        var genvalues = [];
        for (var i = 1; genvalues.length !== values; i++) {
            // Get the index of joker A.
            var ja = key.findIndex(function(value) { return value === 53; });

            // If it's the bottom card of the deck, then it needs to go just
            // below the top card.
            if (ja === 53) {
                key.splice(ja, 1);
                key.splice(1, 0, 53);
            } else {
                // Else you just swap it with the card beneath.
                key.splice(ja, 1);
                key.splice(ja + 1, 0, 53);
            }

            // Do the same again with joker B, this time moving it two spaces
            // down unless that would cause it to become the first card.
            var jb = key.findIndex(function(value) { return value === 54; });

            if (jb === 52) {
                key.splice(jb, 1);
                key.splice(1, 0, 54);
            } else if (jb === 53) {
                key.splice(jb, 1);
                key.splice(2, 0, 54);
            } else {
                key.splice(jb, 1);
                key.splice(jb + 1, 0, 53);
            }

            // Perform the triple cut. All the jokers before joker a, exclusive,
            // need to be swapped with all the jokers after joker b, exclusive.
            var jf = key.find(function(value) {
                return value === 53 || value === 54;
            });
            ja = key.findIndex(function(value) {
                return value === 53 || value === 54;
            });
            var cardsprea = key.splice(0, ja);

            if (jf === 53) {
                jb = key.findIndex(function(value) { return value === 54; });
            } else if (jf === 54) {
                jb = key.findIndex(function(value) { return value === 53; });
            }

            // Iterate the array in reverse so that items are unshifted onto the
            // key in the right order.
            for (var j = cardspostb.length - 1; j >= 0; j--) {
                key.unshift(cardspostb[j]);
            }

            // For the pushing we do it in the usual order.
            for (var k = 0; k < cardsprea.length; k++) {
                key.push(cardsprea[k]);
            }

            // Now that we have done the triple cut, we need to do a count cut.
            // We need to determine the value of the bottom card, count that
            // many cards from the top, and place them just above the bottom.

            // If the bottom card is a joker we do nothing at all, because the
            // number of cards to move is 53 and the bottom card doesn't move.
            if (key[53] !== 53 && key[53] !== 54) {
                // Now that we know that the card isn't a joker, we can do the
                // cut.
                var cardscut = key.splice(0, key[53])
                for (var l = 0; l < cardscut.length; l++) {
                    key.splice(52, 0, cardscut[l]);
                }
            }

            // Now we need to determine the output card. If it's a joker, all
            // this code has been wasted and we need to go through the whole
            // process again, else we add the card to the keystream buffer to
            // be returned to the user at the end of generation.
            var output = key[1];
            if (output !== 53 && output !== 54) {
                genvalues.push(output);
            }
        }

        return genvalues;
    }
}