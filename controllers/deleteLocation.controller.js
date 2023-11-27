import {deleteLocation} from "../services/location.service.js";

export async function deleteLocationController(req, res) {
    try {
        const id = req.params.id;
        deleteLocation(id)
        res.status(200).json({'status': 'success'})
    } catch (e) {
        res.status(500).json({
            'status': 'fail',
            'message': e.message
        })
    }
}

