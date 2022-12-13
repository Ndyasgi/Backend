import express from "express";
import {
    getTrip,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip
} from "../controller/TripController.js";

const router = express.Router();

router.get('/trip', getTrip);
router.get('/trip/:id', getTripById);
router.post('/trip', createTrip);
router.patch('/trip/:id', updateTrip);
router.delete('/trip/:id', deleteTrip);

export default router;