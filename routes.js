import {Router} from "express";
import {validateLocationInput} from "./middleware/validateLocationInput.js";
import {getLocationByIdController} from "./controllers/getLocationById.controller.js";
import {getLocationsController} from "./controllers/getLocations.controller.js";
import {postLocationController} from "./controllers/postLocation.controller.js";
import {patchLocationController} from "./controllers/patchLocation.controller.js";
import {deleteLocationController} from "./controllers/deleteLocation.controller.js";

const router = Router();

router.post('/', validateLocationInput, postLocationController);
router.patch('/:id', validateLocationInput, patchLocationController);
router.get('/',getLocationsController)
router.get('/:id', getLocationByIdController);
router.delete('/:id', deleteLocationController);

export {router};