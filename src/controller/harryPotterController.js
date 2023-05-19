const harryPotterService = require("../service/harryPotterService");

const getAll = async (req, res) => {
  const personagens = await harryPotterService.getAll();
  res.status(200).json(personagens);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const personagem = await harryPotterService.getById(id);
  return res.status(200).json(personagem);
};

const create = async (req, res) => {
  const data = req.body;
  const personagem = await harryPotterService.create(data);
  return res.status(201).json(personagem);
};

module.exports = { getAll, getById, create };
