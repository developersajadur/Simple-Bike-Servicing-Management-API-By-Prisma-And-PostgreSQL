import { Router } from "express";
import { customerController } from "./customer.controller";


const router = Router();

router.post("/customers", customerController.createCustomerIntoDb)
router.get("/customers", customerController.getAllCustomersFromDbWithQuery)
router.get("/customers/:id", customerController.getSingleCustomerFromDb)
router.put("/customers/:id", customerController.updateCustomerIntoDb)
router.delete("/customers/:id", customerController.softDeleteCustomerFromDb)


export const customerRoute = router;