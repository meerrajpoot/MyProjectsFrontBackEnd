// schemas/userSchema.js
export default {
    type: 'object',
    properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' }
    },
    required: ['name', 'email', 'password'],
    additionalProperties: false
};
