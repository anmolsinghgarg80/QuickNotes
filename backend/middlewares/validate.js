const Joi = require("joi");

exports.signupSchema = Joi.object({
  fullName: Joi.string()
      .required(),
  email: Joi.string()
      .email() // Simplified without deprecated tlds option
      .required()
      .min(6)
      .max(60),
  password: Joi.string()
      .required()
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')) // Fixed regex
      .messages({
          "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long."
      })
});

exports.loginSchema = Joi.object({
  email: Joi.string()
      .email() // Simplified without deprecated tlds option
      .required()
      .min(6)
      .max(60),
  password: Joi.string()
      .required()
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')) // Fixed regex
      .messages({
          "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long."
      })
});

exports.noteSchema = Joi.object({
    title: Joi.string()
        .required(),
    content: Joi.string()
        .required()
});
