import MUser from "../../db/user.schema.js";

export async function updateUser(id, name, email, telefones) {
    const updateUser = await MUser.findByIdAndUpdate(
        id, { name, email, telefones },
        { new: true, runValidators: true }
    );
    if (!updateUser) {
        throw new Error("Usuário não encontrado");
    }
    return updateUser;
}

export async function updateName(id, name) {
    const updateName = await MUser.findByIdAndUpdate(
        id, { name },
        { new: true, runValidators: true }
    );
    if (!updateName) {
        throw new Error("Usuário não encontrado");
    }
    return updateName;
}

export async function updateEmail(id, email) {
    const updateEmail = await MUser.findByIdAndUpdate(
        id, { email },
        { new: true, runValidators: true }
    );
    if (!updateEmail) {
        throw new Error("Usuário não encontrado");
    }
    return updateEmail;
}

export async function updatePhones(id, telefones) {
    const updatePhones = await MUser.findByIdAndUpdate(
        id, { telefones },
        { new: true, runValidators: true }
    );
    if (!updatePhones) {
        throw new Error("Usuário não encontrado");
    }
    return updatePhones;
}