const joi = require("joi")

exports.createValidator = joi.object({
    name: joi.string().min(3).max(20).required(),
    city: joi.string().min(3).max(50).required()
});
exports.updateValidator = joi.object({
    name: joi.string().min(3).max(20).optional(),
    city: joi.string().min(3).max(50).optional()
});


exports.validate = (schema, data) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    return {
      success: false,
      errors: error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    };
  }
  return { success: true, value };
};
