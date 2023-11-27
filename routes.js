import {Router} from "express";
import {getLocationsController} from "./controllers/getLocations.controller.js";
import {getLocationController} from "./controllers/getLocation.controller.js";
import {postLocationController} from "./controllers/postLocation.controller.js";
import {validateLocationInput} from "./middleware/validateLocationInput.js";
import {patchLocationController} from "./controllers/patchLocation.controller.js";
import {deleteLocationController} from "./controllers/deleteLocation.controller.js";

const router = Router();

router.get('/', getLocationsController);
router.post('/', validateLocationInput, postLocationController);
router.patch('/:id', validateLocationInput, patchLocationController);
router.get('/:id', getLocationController);
router.delete('/:id', deleteLocationController);

export {router};