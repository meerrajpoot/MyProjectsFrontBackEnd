// middleware/validateSchema.js
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv();
addFormats(ajv);

const validateSchema = (schema) => {
    return (req, res, next) => {
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            return res.status(400).send({ errors: validate.errors });
        }
        next();
    };
};

export default validateSchema;
