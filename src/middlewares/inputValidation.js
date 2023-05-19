const wizardsSchema = require("./joiSchema");

const inputValidation = (req, res, next) => {
    const { name, house, ancestry, patronus } = req.body;
  const  result  = wizardsSchema.validate({ name, house, ancestry, patronus });
    console.log(result);
    if (result.error) {
        return res.status(400).json({message: result.error.message});
      }
  next();
};

module.exports = inputValidation;
