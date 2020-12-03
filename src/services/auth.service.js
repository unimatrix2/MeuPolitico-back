import jwt from 'jsonwebtoken';

import * as authRepo from '../repositories/auth.repository';
import { encrypt, verify } from '../utils/passwordManager';
import AppError from '../errors/AppError';


const verifyExistingUser = async (cpf, email) => {
    const user = await authRepo.findUser(cpf);
    if (user) {
        if (user.cpf === cpf && user.email === email) { throw new AppError({ message: 'Usuário já existe', type: 'Registro-Usuario-Existe', status: 400 }) }
        else if (user.cpf === cpf) { throw new AppError({ message: 'CPF já cadastrado', type: 'Registro-CPF-Existe', status: 400 }) }

    }

}

export const register = async body => {
    try {
        const userExists = await verifyExistingUser(body.cpf, body.email);
        if (!userExists) {
            const newUser = { ...body, password: encrypt(body.password) };
            const othersEmailError = await authRepo.saveUser(newUser);
            if (othersEmailError) { throw new AppError({ message: 'E-Mail já cadastrado', type: 'Registro-Email-Existe', status: 400 }) }
        }
    } catch (error) { throw new AppError(error) }
}

export const authenticateUser = async credentials => {
    const userFromDb = await authRepo.findUser(credentials.cpf);
    if (!userFromDb) { throw new AppError({ message: 'Credenciais inválidas', type: 'Acesso-Credencial-Invalida', status: 400 }) };
    const isPasswordValid = verify(credentials.password, userFromDb.password);
    if (!isPasswordValid) { throw new AppError({ message: 'Credenciais inválidas', type: 'Acesso-Credencial-Invalida', status: 400 }) };

    const token = jwt.sign(
        { id: userFromDb._id },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.EXPIRATION_AUTH_TOKEN }
    );

    return token;
}