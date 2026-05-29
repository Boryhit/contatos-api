import MUser from "../../db/user.schema.js";

export async function createUser(user) {
    const newUser = await MUser.insertOne(user);
    return newUser;
}