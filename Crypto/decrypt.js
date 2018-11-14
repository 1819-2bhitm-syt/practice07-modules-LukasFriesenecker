let decrypt = function(encrypted, passwort) {
    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', passwort);

    try {
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        try {
            decrypted += decipher.final('utf8');
            console.log(decrypted);
        } catch {
            console.log("Error! Falsches Passwort!")
        }
    }catch{
        console.log("Error! Falscher HASH-Code!");
    }
}

module.exports = decrypt;