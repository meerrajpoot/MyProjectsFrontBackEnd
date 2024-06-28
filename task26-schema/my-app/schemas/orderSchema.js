
export default {
    type: 'object',
    properties: {
        user: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' },
        products: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    product: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' },
                    quantity: { type: 'number' }
                },
                required: ['product', 'quantity'],
                additionalProperties: false
            }
        },
        totalAmount: { type: 'number' },
        orderDate: { type: 'string', format: 'date-time' }
    },
    required: ['user', 'products', 'totalAmount'],
    additionalProperties: false
};
