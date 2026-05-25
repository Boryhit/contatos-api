import contatos from "../data/contatoData.js";
import { emailUsedByDifferentUser } from "./createContato.js";

export default function updateContato(req, res) {
    const id = Number(req.params.id);
    const contato = contatos.find(contato => contato.id === id);
    const body = req.body;
    
    if (!contato) {
        return res.status(404).json({ error: "Contato não encontrado."});
    }
    
    let emailUsed = emailUsedByDifferentUser(req.body.email, id);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
    
    contato.name = body.name || contato.name;
    if (emailUsed) {
        return res.status(400).json({ error: "O email já está em uso por outro contato." });
    }
    if (!emailValido) {
        return res.status(400).json({ error: "O email fornecido é inválido." });
    }
    contato.email = body.email || contato.email;
    contato.telefones = body.telefones || contato.telefones;

    return res.status(200).json(contato);
}