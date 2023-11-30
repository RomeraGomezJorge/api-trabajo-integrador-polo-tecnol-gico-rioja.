import {Location} from "../models/Location.model.js";

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

const getLocationById = async (id) => {

    const location = await Location.findById(id)

    if (!location) {
        throw new Error('Location not found');
    }

    return location;
};

const createLocation = async (requestBody) => {
    const location = new Location(requestBody);
    return location.save();
};

const updateLocation = async (id, requestBody) => {
    const location = await Location.findOneAndUpdate({_id: id}, requestBody, {new: true});

    if (!location) {
        throw new Error('Location not found');
    }

    return location
};

const deleteLocation = async (id) => {

    const isLocationFound = await Location.findByIdAndDelete(id);

    if (!isLocationFound) {
        throw new Error('Location not found');
    }
};
export {getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation};
