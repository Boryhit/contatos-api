import MUser from "../../db/user.schema.js";

export async function getAllUsers() {
    const users = await MUser.find({});
    return users;
}

export async function getUserById(id) {
    const user = await MUser.findById(id);
    return user;
}

export async function getUserByName(name) {
    const user = await MUser.find({ name: name });
    return user;
}

export async function getUserByEmail(email) {
    const user = await MUser.find({ email: email });
    return user;
}

export async function getUserByPhone(telefone) {
    const user = await MUser.findOne({ telefones: [telefone] });
    return user;
}