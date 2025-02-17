const Joi = require("joi");

module.exports.listingSchema = Joi.object({
	listing: Joi.object({
		title: Joi.string().required(),
		description: Joi.string().required(),

		address: Joi.object({
			street: Joi.string().required(),
			city: Joi.string().required(),
			state: Joi.string().required(),
			country: Joi.string().required(),
			zipCode: Joi.string().required(),
		}).required(),

		price: Joi.number().required().min(0),

		images: Joi.array()
			.items(
				Joi.object({
					url: Joi.string().uri().required(),
					filename: Joi.string().required(),
				}),
			)
			.min(1)
			.required(),

		owner: Joi.string().required(), // Owner must exist

		geometry: Joi.object({
			type: Joi.string().valid("Point").required(),
			coordinates: Joi.array().items(Joi.number()).length(2).required(),
		}).required(),

		amenities: Joi.array().items(Joi.string()).optional(),
	}).required(),
});

module.exports.reviewSchema = Joi.object({
	review: Joi.object({
		rating: Joi.number().min(1).max(5).required(),
		comment: Joi.string().min(3).max(2000).trim().required(),
	}).required(),
});
