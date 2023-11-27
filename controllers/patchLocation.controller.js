import {updateLocation} from "../services/location.service.js";

export async function patchLocationController(req, res) {
    try {
        const data = req.body
        const id = req.params.id
        const location = await updateLocation(id,data)
        return res.json({
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

