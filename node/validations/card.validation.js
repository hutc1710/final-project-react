const Joi = require("joi");

function validateCard(card) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(225),
    phone: Joi.string().min(9).max(13),
    image: Joi.string().min(2).max(1024).required(),
    description: Joi.string().min(2).max(1024).required(),
    price: Joi.string().min(1).max(1024).required(),
    creationDate: Joi.string(),
  });

  return schema.validate(card);
}

function validateUpdateCard(card) {
  const schema = Joi.object({
    image: Joi.string().min(2).max(1024),
    description: Joi.string().min(2).max(1024),
    price: Joi.string().min(1).max(1024).required(),
    creationDate: Joi.string(),
  });

  return schema.validate(card);
}

module.exports = {
  validateCard,
  validateUpdateCard,
};
