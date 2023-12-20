import {
    createLocation,
    deleteLocation,
    getAllLocations,
    getLocationById,
    updateLocation
} from "../services/location.service.js";

/**
 * Retrieves all locations based on the provided query parameters.
 */
async function getLocationsController(req, res) {
    try {
        const queryParams = req.query;
        const locations = await getAllLocations(queryParams);
        return res.json({
            'status': 'success',
            'data': locations
        });
    } catch (e) {
        return res.status(e.code?? 500).json({
            'status': 'error',
            'message': e.message
        });
    }
}

/**
 * Retrieves a single location by its ID.
 */
async function getLocationByIdController(req, res) {
    try {
        const id = req.params.id;
        const location = await getLocationById(id);
        res.json({
            'status': 'success',
            'data': location
        });
    } catch (e) {
        return res.status(e.code?? 500).json({
            'status': 'error',
            'message': e.message
        });
    }
}

/**
 * Creates a new location using the provided data.
 */
async function postLocationController(req, res) {
    try {
        const data = req.body;
        const location = await createLocation(data);
        return res.status(201).json({
            'status': 'success',
            'data': location
        });
    } catch (e) {
        return res.status(e.code?? 500).json({
            'status': 'error',
            'message': e.message
        });
    }
}

/**
 * Updates a location partially using the provided data and ID.
 */
async function patchLocationController(req, res) {
    try {
        const data = req.body;
        const id = req.params.id;
        const location = await updateLocation(id, data);
        return res.json({
            'status': 'success',
            'data': location
        });
    } catch (e) {

        return res.status(e.code?? 500).json({
            'status': 'error',
            'message': e.message
        });
    }
}

/**
 * Deletes a location based on its ID.
 */
async function deleteLocationController(req, res) {
    try {
        const id = req.params.id;
        deleteLocation(id);
        res.status(200).json({'status': 'success'});
    } catch (e) {
        res.status(e.code?? 500).json({
            'status': 'error',
            'message': e.message
        });
    }
}

export {
    getLocationsController,
    getLocationByIdController,
    postLocationController,
    patchLocationController,
    deleteLocationController
};
