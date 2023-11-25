const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { toHex } = require("ethereum-cryptography/utils");



const privateKey = toHex(secp256k1.utils.randomPrivateKey());
const publicKey = "0x" + toHex(secp256k1.getPublicKey(privateKey)).slice(-40);
console.log("private key: ", privateKey);
console.log("public key: ", publicKey);