const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new mongoose.Schema(
    {
        product_id: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        title: {
            required: true,
            type: String,
            minlength: 3,
            maxlength: 100,
            trim: true
        },
        text: {
            required: true,
            type: String,
            maxlength: 400,
            trim: true
        },
        rating: {
            required: true,
            type: Number
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            required: true,
            type: String,
            minlength: 6,
            maxlength: 30,
            trim: true
        },
        voter_ids: {
            type: [{ type: Schema.ObjectId, ref: 'User' }]
        },
    },
    { timestamps: false }
);


const OrdertModel = mongoose.model("Product", order);

module.exports = { OrdertModel }
