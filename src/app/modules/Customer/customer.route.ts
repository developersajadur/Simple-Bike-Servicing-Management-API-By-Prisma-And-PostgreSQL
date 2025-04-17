import { Router } from "express";
import { customerController } from "./customer.controller";


const router = Router();

router.post("/customer", customerController.createCustomerIntoDb)
router.get("/customers", customerController.getAllCustomersFromDbWithQuery)


export const customerRoute = router;