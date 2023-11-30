import { Location } from "../models/Location.model.js";

/**
 * Retrieves all locations based on the provided query parameters.
 */
const getAllLocations = async (queryParams) => {
    let filter = {};
    if (queryParams.name) {
        filter.name = {$regex: '.*' + queryParams.name + '.*'};
    }

    if (queryParams.description) {
        filter.description = {$regex: '.*' + queryParams.description + '.*'};
    }

    return Location.find(filter);
};

/**
 * Retrieves a single location by its ID.
 */
const getLocationById = async (id) => {
    const location = await Location.findById(id);

    if (!location) {
        throw new Error('Location not found');
    }

    return location;
};

/**
 * Creates a new location using the provided data.
 */
const createLocation = async (data) => {
    const location = new Location(data);
    return location.save();
};

/**
 * Updates a location partially using the provided data and ID.
 */
const updateLocation = async (id, requestBody) => {
    const location = await Location.findOneAndUpdate({_id: id}, requestBody, {new: true});

    if (!location) {
        throw new Error('Location not found');
    }

    return location;
};

/**
 * Deletes a location based on its ID.
 */
const deleteLocation = async (id) => {
    const isLocationFound = await Location.findByIdAndDelete(id);

    if (!isLocationFound) {
        throw new Error('Location not found');
    }
};

export { getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation };
