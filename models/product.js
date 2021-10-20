const mongoose = require('mongoose');

const product = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
            minlength: 3,
            maxlength: 30,
            trim: true
        },
        sku: {
            required: true,
            type: String,
            minlength: 3,
            maxlength: 30,
            trim: true
        },
        description: {
            required: true,
            type: String,
            minlength: 3,
            maxlength: 100,
            trim: true
        },
        slug: {
            required: true,
            type: String,
            minlength: 3,
            maxlength: 100,
        },
        details: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
        },
        total_reviews: {
            required: true,
            type: Number
        },
        price: {
            required: true,
            type: Number
        },
        category: {
            required: true,
            type: mongoose.Schema.Types.ObjectId
        },
        tags: {
            required: true,
            type: [String]
        }
    },
    { timestamps: false }
);


const ProductModel = mongoose.model("user", product);

module.exports = { ProductModel }
