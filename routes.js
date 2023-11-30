import {Router} from "express";
import {validateLocationInput} from "./middleware/validateLocationInput.js";
import {
    deleteLocationController,
    getLocationByIdController,
    getLocationsController,
    patchLocationController,
    postLocationController
} from "./controllers/location.controller.js";


const router = Router();

router.post('/', validateLocationInput, postLocationController);
router.patch('/:id', validateLocationInput, patchLocationController);
router.get('/',getLocationsController)
router.get('/:id', getLocationByIdController);
router.delete('/:id', deleteLocationController);

export {router};