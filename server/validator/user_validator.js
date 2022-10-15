const Joi = require("joi");

exports.validateUserSchema = (schema) => {
  return async (req, res, next) => {
    try {
      const val = await schema.validateAsync(req.body);
      req.body = val;
      next();
    } catch (err) {
      const messages = err.details.map((i) => i.message).join(",");

      res.status(422).json({
        success: false,
        errors: [messages],
      });
    }
  };
};

exports.userSchema = Joi.object().keys({
  name: Joi.string().required(),
  position: Joi.string().required(),
  officeNo: Joi.string().required(),
  mobileNo: Joi.string().required(),
  smsNo: Joi.string().required(),
  email: Joi.string().email().required(),
});
