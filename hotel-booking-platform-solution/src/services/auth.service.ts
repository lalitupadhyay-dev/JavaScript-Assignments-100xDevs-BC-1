import { prisma } from "../configs/prisma.js";
import error from "../error/error.js";
import { encrypt, decrypt } from "../utils/secure.util.js";
import { generate } from "../utils/token.util.js";
import type {
  LoginSchema,
  SignupSchema,
} from "../validations/auth.validation.js";
import AppError from "../utils/class/AppError.util.js";
import { serviceSuccess } from "../utils/service.util.js";
// import { randomUUID } from "crypto";
import type { Role } from "../generated/prisma/enums.js";

// signup service
async function signup(userData: SignupSchema) {
  const isFound = await prisma.user.findFirst({
    where: { email: userData.email },
  });

  if (isFound) {
    const { message, code } = error.EMAIL_ALREADY_EXISTS;
    throw new AppError(message, code);
  }

  // encrypt password
  const encryptedPwd = await encrypt(userData.password);

  // create user in DB
  const createdUser = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: encryptedPwd,
      ...(userData.role !== undefined && { role: userData.role }),
      ...(userData.phone !== undefined && { phone: userData.phone }),
    },
  });

  // prepare data to send in response
  const { id, name, email, role, phone } = createdUser;

  return serviceSuccess({ id, name, email, role, phone }, 201);
}

// login service
async function login(userData: LoginSchema) {
  const user = await prisma.user.findFirst({
    where: { email: userData.email },
    omit: {
      phone: true,
      created_at: true,
    },
  });

  if (!user) {
    const { message, code } = error.INVALID_CREDENTIALS;
    throw new AppError(message, code);
  }

  // extracting the password
  const { password, ...rest } = user;

  // decrypt the password
  const isMatched = await decrypt(userData.password, password!);

  if (!isMatched) {
    const { message, code } = error.INVALID_CREDENTIALS;
    throw new AppError(message, code);
  }

  // generate JWT auth token
  const token = generate({ id: user.id, email: user.email, role: user.role });

  return serviceSuccess({ token: token, user: rest }, 200);
}

export { signup, login };
