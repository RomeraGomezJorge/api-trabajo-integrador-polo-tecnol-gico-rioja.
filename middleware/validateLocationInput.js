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
            email: joi.string().email(),
        }),
        additional_info: joi.object({
            website: joi.string().uri(),
            days_of_operation: joi.array().items(
                joi.string().valid(
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                )
            ).required(),
            business_hours: joi.object({
                opening: joi.string()
                    .required()
                    .regex(/^([01]\d|2[0-3]):[0-5]\d$/)
                    .message('Opening time should be in HH:MM format'),
                closing: joi.string()
                    .required()
                    .regex(/^([01]\d|2[0-3]):[0-5]\d$/)
                    .message('Closing time should be in HH:MM format'),
            }).required(),
            coordinates: joi.object({
                latitude: joi.number().required(),
                longitude: joi.number().required(),
            }).required(),
            social_media: joi.object({
                facebook: joi.string().uri(),
                twitter: joi.string().uri(),
                linkedin: joi.string().uri(),
            }),
        }),
    }).options({ abortEarly: false }); // Para que devuelva todos los errores en lugar de detenerse en el primer error.

    const { error } = Schema.validate(body);

    if (error) {
        return res.status(400).json({
            message: error.details.map(detail => detail.message),
        });
    }

    next();
}
