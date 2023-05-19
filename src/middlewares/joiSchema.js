const Joi = require('joi');

const wizardsSchema = Joi.object({
    name: Joi.string().min(2).max(45).required().label('name'),
    house: Joi.string().min(2).max(45).required().label('house'),
    ancestry: Joi.string().min(2).max(45).required().label('ancestry'),
    patronus: Joi.string().min(2).max(45).required().label('patronus'),
  }).messages({
    'string.empty': '{{#label}} cannot be empty',
    'string.min': '{{#label}} must be at least {{#limit}} characters',
    'string.max': '{{#label}} must be at least {{#limit}} characters',
    'any.required': '{{#label}} is required',
  });

  module.exports = wizardsSchema;