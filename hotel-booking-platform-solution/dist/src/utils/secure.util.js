import bcrypt from "bcryptjs";
async function encrypt(value) {
    const encrypted = await bcrypt.hash(value, 10);
    return encrypted;
}
async function decrypt(newValue, existed) {
    const isMatched = await bcrypt.compare(newValue, existed);
    return isMatched;
}
export { encrypt, decrypt };
//# sourceMappingURL=secure.util.js.map