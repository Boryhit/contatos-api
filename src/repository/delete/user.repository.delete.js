import MUser from "../../db/user.schema.js";

export async function deleteUser(id) {
    const deleteUser = await MUser.findByIdAndDelete(id);
    if (!deleteUser) {
        throw new Error("Usuário não encontrado!");
    }
    return { message: "Usuário excluído com sucesso!" };
}