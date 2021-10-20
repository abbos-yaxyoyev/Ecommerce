const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new mongoose.Schema(
    {
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        state: {
            required: true,
            type: String,
            minlength: 3,
            maxlength: 100,
            trim: true
        },
        line_items: {
            type: [{ type: Schema.ObjectId, ref: 'Product' }]
        },
        shipping_address: {
            required: true,
            type: {}
        },
        details: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
        },
        sub_total: {
            required: true,
            type: Number
        }
    },
    { timestamps: false }
);


const OrdertModel = mongoose.model("Product", order);

module.exports = { OrdertModel }
