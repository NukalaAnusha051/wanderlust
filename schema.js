/*const Joi = require('joi');

// Define the Joi validation schema for a `listing`
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().uri().allow('') // Validates that `image` is a valid URI if provided
    }).required()
});


module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required()

})*/
const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required().max(100).messages({
            'string.empty': 'Title is required.',
            'string.max': 'Title must not exceed 100 characters.'
        }),
        description: Joi.string().required().max(500).messages({
            'string.empty': 'Description is required.',
            'string.max': 'Description must not exceed 500 characters.'
        }),
        location: Joi.string().required().max(100).messages({
            'string.empty': 'Location is required.',
            'string.max': 'Location must not exceed 100 characters.'
        }),
        country: Joi.string().required().max(100).messages({
            'string.empty': 'Country is required.',
            'string.max': 'Country must not exceed 100 characters.'
        }),
        price: Joi.number().required().min(0).messages({
            'number.empty': 'Price is required.',
            'number.min': 'Price must be at least 0.'
        }),
        image: Joi.string().uri().optional().messages({
            'string.uri': 'Image must be a valid URI.'
        })
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5).messages({
            'number.empty': 'Rating is required.',
            'number.min': 'Rating must be at least 1.',
            'number.max': 'Rating must be at most 5.'
        }),
        comment: Joi.string().required().max(300).messages({
            'string.empty': 'Comment is required.',
            'string.max': 'Comment must not exceed 300 characters.'
        })
    }).required()
});
