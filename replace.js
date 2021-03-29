function getNextChar(char, alfabet) {
    var index = alfabet.indexOf(char);
    if (index == (alfabet.length - 1)) {
        char = alfabet[0];
    } else if (index > -1) {
        char = alfabet[index + 1];
    }
    return char;
}

function replaceChar(message, alfabet) {
    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
        newMessage += getNextChar(message[i], alfabet);
    }
    return newMessage;
}

function replace(message) {
    const alfabet = "abcdefghijklmnñopqrstuvwxyz";
    const alfabetUpper = alfabet.toUpperCase();
    message = replaceChar(message, alfabet);
    message = replaceChar(message, alfabetUpper);
    return message;
}
module.exports = replace;