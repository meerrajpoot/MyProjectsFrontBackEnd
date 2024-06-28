
export default {
    type: 'object',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'number' },
        category: { type: 'string' },
        stock: { type: 'number' },
        createdAt: { type: 'string', format: 'date-time' }
    },
    required: ['name', 'description', 'price', 'category', 'stock'],
    additionalProperties: false
};
