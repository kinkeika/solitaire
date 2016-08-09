# solitaire

This is a node.js library for the [Solitaire][spec] cipher.

## Work in Progress
The code is functional but is not very clean. A cleaned up verison is coming
soon as a 1.0.0

## Command line utility

This module is intended to be used programmatically. There is a command line
utility ([npm][cli-npm]/[github][cli-git]) that wraps this module for standalone
usage.

## Security

This module implements the [Solitaire][spec] cipher. Any vulnerabilities in the
Solitaire cipher will apply to this module.

This module has not been extensively tested, but no security vulnerabilities
specific to this module have been found.

Calling `solitaire.keys.generateKey()` with no arguments will generate a random
key. The deck is shuffled according to the Fisher-Yates algorithm using random
data of cryptographic quality from the `crypto` library built in to node.js.

[spec]: https://www.schneier.com/academic/solitaire/
[cli-npm]: https://npmjs.com/package/solitaire-cli
[cli-git]: https://github.com/defectivebit/solitaire-cli