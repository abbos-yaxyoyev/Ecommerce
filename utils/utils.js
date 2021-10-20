const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi);

async function validateUcer(user) {
    const userValidated = Joi.object({
        name: Joi.string().required().min(3).max(30),
        lastName: Joi.string().required().min(3).max(30),
        username: Joi.string().required().min(6).max(30),
        email: Joi.string().required().min(7).max(100).email(),
        password: Joi.string().required().min(6).max(100),
        address: Joi.array().required().min(6).max(100),
    })
    return await userValidated.validate(user);
}

async function validateProduct(product) {
    const productValidated = Joi.object({
        name: Joi.string().required().min(3).max(30),
        sku: Joi.string().required().min(3).max(30),
        description: Joi.string().required().min(3).max(100),
        slug: Joi.string().required().min(3).max(100),
        details: Joi.objectId().required(),
        total_reviews: Joi.number().required(),
        price: Joi.number().required(),
        category: Joi.objectId().required(),
        tags: Joi.array().required()
    })
    return await productValidated.validate(product);
}

async function validateOrder(order) {
    const orderValidated = Joi.object({
        user_id: Joi.objectId().required(),
        state: Joi.string().required().min(3).max(100),
        line_items: Joi.array().items(Joi.objectId()),
        shipping_address: oi.object(),
        details: Joi.objectId().required(),
        sub_total: Joi.number().required()
    })
    return await orderValidated.validate(order);
}

async function validateReviews(reviews) {
    const reviewsValidated = Joi.object({
        product_id: Joi.objectId().required(),
        title: Joi.string().required().min(3).max(100),
        text: Joi.string().required().min(3).max(400),
        rating: Joi.number().required(),
        user_id: Joi.objectId().required(),
        username: Joi.string().required().min(6).max(30),
        state: Joi.string().required().min(3).max(100),
        voter_ids: Joi.array().items(Joi.objectId())
    })
    return await reviewsValidated.validate(reviews);
}

module.exports = {
    validateUcer,
    validateProduct,
    validateOrder,
    validateReviews
}