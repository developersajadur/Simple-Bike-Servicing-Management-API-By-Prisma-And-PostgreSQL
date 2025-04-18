import { Router } from "express";
import { bikeController } from "./bike.controller";


const router = Router();

router.post("/bikes", bikeController.createBikeIntoDb)
router.get("/bikes", bikeController.getAllBikesFromDbWithQuery)
router.get("/bikes/:id", bikeController.getSingleBikeFromDb)
router.put("/bikes/:id", bikeController.updateBikeIntoDb)
router.delete("/bikes/:id", bikeController.softDeleteBikeFromDb)




export const bikeRoute = router;