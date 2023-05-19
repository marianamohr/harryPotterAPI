const harryPotterModel = require('../model/harryPotterModel')

const getAll = async () => {
    const personagens = await harryPotterModel.getAll();
    return personagens;
}

const getById = async (id) => {
    const personagem = await harryPotterModel.getById(id);
    return personagem;
  }

  const create = async (data) => {
    const idCreated = await harryPotterModel.create(data);
    return {id: idCreated, ... data};
  }

  module.exports = {getAll, getById, create}