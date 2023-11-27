import {createLocation} from "../services/location.service.js";

export async function postLocationController(req, res) {
    try {
        const data = req.body;
        const location = await createLocation(data)
        return res.status(201).json({
            'status':'success',
            'data': location
        })
    } catch (e) {
        res.status(500).json({
            'status': 'fail',
            'message': e.message
        })
    }
}

