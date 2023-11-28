import {getLocationById} from "../services/location.service.js";

export async function getLocationByIdController(req, res) {
    try {
        const id = req.params.id;
        const location = await getLocationById(id);
        res.json({
            'status': 'success',
            'data': location
        })
    } catch (e) {
        res.status(500).json({
            'status': 'fail',
            'message': e.message
        })
    }
}
