import { Router } from "express";
import { customerController } from "./customer.controller";


const router = Router();

router.post("/customer", customerController.createCustomerIntoDb)


export const customerRoute = router;