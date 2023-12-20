import {Location} from "../models/Location.model.js";

/**
 * Retrieves all locations based on the provided query parameters.
 */
const getAllLocations = async (queryParams) => {
    try {
        let filter = {};
        if (queryParams.name) {
            filter.name = {$regex: '.*' + queryParams.name + '.*'};
        }

        if (queryParams.description) {
            filter.description = {$regex: '.*' + queryParams.description + '.*'};
        }

        return Location.find(filter);
    } catch (e) {
        throw e;
    }
};

/**
 * Retrieves a single location by its ID.
 */
const getLocationById = async (id) => {
    try {
        const location = await Location.findById(id);

        if (!location) {
            throw new Error('Location not found');
        }

        return location;
    } catch (e) {
        throw e;
    }
};

/**
 * Creates a new location using the provided data.
 */
const createLocation = async (data) => {
    try {
        const location = new Location(data);
        return location.save();
    } catch (e) {
        throw e;
    }
};

/**
 * Updates a location partially using the provided data and ID.
 */
const updateLocation = async (id, requestBody) => {
    try {
        const location = await Location.findOneAndUpdate({_id: id}, requestBody, {new: true});

        if (!location) {
            const error = new Error('Location not found')
            Object.assign(error, {code: 404})
            throw error;
        }

        return location;
    } catch (e) {
        throw e;
    }
};

/**
 * Deletes a location based on its ID.
 */
const deleteLocation = async (id) => {
    try {
        const isLocationFound = await Location.findByIdAndDelete(id);

        if (!isLocationFound) {
            throw new Error('Location not found');
        }
    } catch (e) {
        throw e;
    }
};

export {getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation};
