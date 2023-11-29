import {getAllLocations} from "../services/location.service.js";

export async function getLocationsController(req, res) {

    try {
        const queryParams = req.query
        const locations = await getAllLocations(queryParams)
        return res.json({
            'status':'success',
            'data': locations
        })
    } catch (e) {
        res.status(500).json({
            'status': 'fail',
            'message': e.message
        })
    }

}
