import { Schema, model } from 'mongoose';
/* import joi from 'joi'; */

const userSchema = new Schema({
    firstName: { type: String, required: true, min: 3, max: 50 },
    lastName: { type: String, required: true, min: 3, max: 100 },
	email: { type: String, required: true },
	cpf: { type: String, required: true, min: 11, max: 11 },
	password: { type: String, required: true, min: 8, max: 200 },
	role: { type: String, enum: ['usuário', 'moderador', 'admin'], required: true, default: 'usuário' },
    imageURL: { type: String, default: 'https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar.png' }
}, { timestamps: true });

export const User = model('User', userSchema);