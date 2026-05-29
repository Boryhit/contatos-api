import { createUser } from "../repository/write/user.repository.write.js";
import { getAllUsers, getUserById, getUserByName, getUserByEmail, getUserByPhone } from "../repository/read/user.repository.read.js";
import { updateUser, updateName, updateEmail, updatePhones } from "../repository/update/user.repository.update.js";
import { deleteUser } from "../repository/delete/user.repository.delete.js";

export async function createUserService(user) {
    try {
        if (!user.name || !user.email || !user.telefones) {
            throw new Error("Dados inválidos.");
        }
        if (user.telefones.length === 0) {
            throw new Error("Telefones inválidos.");
        }

        const newUser = await createUser(user);
        return newUser;
    } catch (error) {
        console.error("Erro ao criar usuário", error);
        throw error;
    }
}

export async function getAllUsersService() {
    try {
        const users = await getAllUsers();
        return users;
    } catch (error) {
        console.error("Erro ao buscar todos os usuários", error);
        throw error;
    }
}

export async function getUserByIdService(id) {
    try {
        const user = await getUserById(id);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário por ID", error);
        throw error;
    }
}

export async function getUserByNameService(name) {
    try {
        const user = await getUserByName(name);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário por nome", error);
        throw error;
    }
}

export async function getUserByEmailService(email) {
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário por email", error);
        throw error;
    }
}

export async function getUserByPhoneService(phone) {
    try {
        const user = await getUserByPhone(phone);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário por telefone", error);
        throw error;
    }
}

export async function updateUserService(id, user) {
    try {
        if (!user.name || !user.email || !user.telefones) {
            throw new Error("Dados inválidos.");
        }
        if (user.telefones.length === 0) {
            throw new Error("Telefones inválidos.");
        }

        const updatedUser = await updateUser(id, user.name, user.email, user.telefones);
        return updatedUser;
    } catch (error) {
        console.error("Erro ao atualizar usuário", error);
        throw error;
    }
}

export async function updateNameService(id, name) {
    try {
        const updatedName = await updateName(id, name);
        return updatedName;
    } catch (error) {
        console.error("Erro ao atualizar nome do usuário", error);
        throw error;
    }
}

export async function updateEmailService(id, email) {
    try {
        const updatedEmail = await updateEmail(id, email);
        return updatedEmail;
    } catch (error) {
        console.error("Erro ao atualizar email do usuário", error);
        throw error;
    }
}

export async function updatePhonesService(id, telefones) {
    try {
        const updatedPhones = await updatePhones(id, telefones);
        return updatedPhones;
    } catch (error) {
        console.error("Erro ao atualizar telefones do usuário", error);
        throw error;
    }
}

export async function deleteUserService(id) {
    try {
        const deleteUser = await deleteUser(id);
        return deleteUser;
    } catch (error) {
        console.error("Erro ao excluir usuário", error);
        throw error;
    }
}