let encrypt = function(text, passwort) {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', passwort);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);

    return encrypted;
}

module.exports = encrypt;