import contatos from "../data/contatoData.js";

export default function createContato(req, res) {
  const body = req.body;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);

  if (!body.name || !body.email) {
    return res.status(400).json({ error: "Verifique os dados enviados." });
  }

  let emailUsed = emailUsedByDifferentUser(body.email, null);
  
  const newContato = { 
    id: Date.now(),
    createdAt: new Date().toISOString(),
    name: body.name,
    email: body.email,
    telefones: body.telefone ? [body.telefone] : []
  };
  if (emailUsed) {
    return res.status(400).json({ error: "O email já está em uso por outro contato." });
  }
  if (!emailValido) {
    return res.status(400).json({ error: "O email fornecido é inválido." });
  }
  contatos.push(newContato);
  return res.status(201).json(newContato);
}

export function emailUsedByDifferentUser(email, id) {

    for (let i = 0; i < contatos.length; i++) {

        if (
            contatos[i].email === email &&
            contatos[i].id !== parseInt(id)
        ) {
            return true;
        }
    }
    return false;
}