import bcrypt from "bcryptjs";

async function encrypt(value: string) {
  const encrypted = await bcrypt.hash(value, 10);
  return encrypted;
}

async function decrypt(newValue: string, existed: string) {
  const isMatched = await bcrypt.compare(newValue, existed);
  return isMatched;
}

export { encrypt, decrypt };
