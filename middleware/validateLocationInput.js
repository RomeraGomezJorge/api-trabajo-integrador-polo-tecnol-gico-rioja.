import joi from "joi";

export function validateLocationInput(req, res, next) {
    const { body } = req;
    const Schema = joi.object({
        name: joi.string().required(),
        description: joi.string(),
        image: joi.string().default("default.png"),
        address: joi.object({
            street: joi.string().required(),
            city: joi.string().required(),
            state: joi.string().required(),
            postal_code: joi.string().required(),
            country: joi.string().required(),
        }).required(),
        contact: joi.object({
            phone: joi.string(),
            email: joi.string(),
        }),
        additional_info: joi.object({
            website: joi.string(),
            days_of_operation: joi.array().items(joi.string()).required(),
            business_hours: joi.object({
                opening: joi.string().required(),
                closing: joi.string().required(),
            }).required(),
            coordinates: joi.object({
                latitude: joi.number().required(),
                longitude: joi.number().required(),
            }).required(),
            social_media: joi.object({
                facebook: joi.string(),
                twitter: joi.string(),
                linkedin: joi.string(),
            }),
        }),
    });

    const { error } = Schema.validate(body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
        });
    }

    next();
}
