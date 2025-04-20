const Joi = require("joi");

module.exports.hostelSchema = Joi.object({
	hostel: Joi.object({
		title: Joi.string().required(),
		description: Joi.string().required(),

		address: Joi.object({
			street: Joi.string().required(),
			city: Joi.string().required(),
			state: Joi.string().required(),
			country: Joi.string().required(),
			pinCode: Joi.string().required(),
		}).required(),

		forWhom: Joi.string()
			.valid("Boys", "Girls", "Parents with Students", "Co-ed")
			.required()
			.messages({
				"any.only": `"forWhom" must be one of Boys, Girls, Parents with Students, or Co-ed`,
				"string.base": `"forWhom" must be a string`,
				"any.required": `"forWhom" is required`,
			}),

		nearbyColleges: Joi.array()
			.items(Joi.string().trim().min(1).required()) // prevent empty strings
			.min(1)
			.max(4)
			.required(),

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

		owner: Joi.object().required(), // Owner must exist
		amenities: Joi.array().items(Joi.string().trim().min(1)).optional(),
	}).required(),
});

module.exports.reviewSchema = Joi.object({
	review: Joi.object({
		rating: Joi.number().min(1).max(5).required(),
		comment: Joi.string().min(3).max(2000).trim().required(),
	}).required(),
});
