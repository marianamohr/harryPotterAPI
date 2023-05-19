const connection = require("./connection");

const getAll = async () => {
  const [personagens] = await connection.execute(`SELECT * FROM harry_potter.wizards;`);
  return personagens;
};

const getById = async (id) => {
  const [personagem] = await connection.execute(
    `SELECT * FROM  harry_potter.wizards WHERE id = ?;`,
    [id]
  );
  console.log(personagem);
  return personagem;
};
const create = async ({ name, house, ancestry, patronus }) => {
  const [{ insertId }] = await connection.execute(
    "INSERT INTO harry_potter.wizards (name, house, ancestry, patronus) " + " VALUES (?, ?, ?, ?);",
    [name, house, ancestry, patronus]
  );
  console.log(insertId);
  return insertId;
};

module.exports = { getAll, getById, create };