let text;
let passwort;
let encrypted;

text="„You will never guess this text!"
passwort="hallo123";

console.log("***VERSCHLÜSSELUNG***");
const encrypt = require("./encrypt.js");
encrypted = encrypt(text, passwort);

console.log("");

console.log("***ENTSCHLÜSSELUNG***");
const decrypt = require("./decrypt.js");
decrypt(encrypted, passwort);