import joi  from "joi";

export function validateLocationInput(req, res, next){
    const {body} = req
    const Schema = joi.object({
        name: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().default("default.png"),
        coordinates: joi.object({
            longitude: joi.number().required(),
            latitude: joi.number().required(),
        }).required(),
    });

    const {error} = Schema.validate(body)

    if (error) {
        return res.status(400).json({
            message: error.details[0]
        });
    }

    next()
}