import {Location} from "../models/Location.model.js";

const getAllLocations = async () => {
    return Location.find({});
};

const getLocationById = async (id) => {

    const location = await Location.findById(id)

    if (!location) {
        throw new Error('Location not found');
    }

    return location;
};

const createLocation = async (body) => {
    const location = new Location(body);
    return location.save();
};

const updateLocation = async (id, data) => {
    const {name, description, image, coordinates} = data;
    const location = await getLocationById(id);

    location.name = name ;
    location.description = description ;
    location.image = image ;
    location.coordinates.longitude = coordinates.longitude ;
    location.coordinates.latitude = coordinates.latitude ;

    await location.save();

    return location
};

const deleteLocation = async (id) => {

    const status = await Location.findByIdAndDelete(id);

    if (!status) {
        throw new Error('Location not found');
    }
};
export {getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation};
