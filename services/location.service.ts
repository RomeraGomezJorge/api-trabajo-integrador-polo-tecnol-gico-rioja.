import { ILocation } from "../interfaces/ILocation";
import { ILocationFilter } from "../interfaces/IFilterLocation";
import {Location} from "../models/Location.model";

/**
 * Retrieves all locations based on the provided query parameters.
 */
const getAllLocations = async (queryParams:ILocationFilter):Promise<ILocation[]> => {
    try {
        let filter:ILocationFilter = {};

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
const getLocationById = async (id:string):Promise<ILocation> => {
    try {
        const location = await Location.findById(id);

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
 * Creates a new location using the provided data.
 */
const createLocation = async (data:ILocation):Promise<ILocation> => {
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
const updateLocation = async (id:string, requestBody:ILocation):Promise<ILocation> => {
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
const deleteLocation = async (id:string) => {
    try {
        const isLocationFound = await Location.findByIdAndDelete(id);

        if (!isLocationFound) {
            const error = new Error('Location not found')
            Object.assign(error, {code: 404})
            throw error;            
        }

    } catch (e) {
        throw e;
    }
};

export {getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation};
