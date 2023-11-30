import {
    createLocation,
    deleteLocation,
    getAllLocations,
    getLocationById,
    updateLocation
} from "../services/location.service.js";

async function getLocationsController(req, res) {

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


async function getLocationByIdController(req, res) {
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

async function postLocationController(req, res) {
    try {
        const data = req.body;
        const location = await createLocation(data)
        return res.status(201).json({
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


async function patchLocationController(req, res) {
    try {
        const data = req.body
        const id = req.params.id
        const location = await updateLocation(id, data)
        return res.json({
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


async function deleteLocationController(req, res) {
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

export {getLocationsController,getLocationByIdController,postLocationController,patchLocationController,deleteLocationController};
