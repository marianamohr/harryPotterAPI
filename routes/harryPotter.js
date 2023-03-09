const express = require("express");
let personagens = require("../data/personagens");
// dcdc

const router = express();

router.get("/", async (req, res) => {
  res.status(200).json(personagens);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const filtred = personagens.find((item) => item.id === Number(id));
  if (!filtred) {
    return res.status(404).json({ message: "Personagem não encontrado" });
  }
  return res.status(200).json(filtred);
});

router.post("/", async (req, res) => {
  const data = req.body;
  const personagem = { ...data, id: personagens[personagens.length -1].id + 1 };
  return res.status(201).json(personagem);
});

router.put("/:id", async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const filtred = personagens.find((item) => item.id === Number(id));
   const index = personagens.findIndex((item) => item.id === Number(id));
  if (index < 0) {
    return res.status(404).json({ message: "Personagem não encontrado" });
  }
  const idAtual = personagens[index].id;
  const personagem = { ...data, id: idAtual };
  personagens[index] = personagem;
  return res.status(200).json(personagem);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const personagensFIltred = personagens.filter((item) => item.id !== Number(id));
  personagens = personagensFIltred;
  
  return res.status(204).send();
});

module.exports = router;
