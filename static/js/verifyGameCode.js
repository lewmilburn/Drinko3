function verifyGameCode(code) {
    return code.length === 6 && !isNaN(code);
}