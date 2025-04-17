import { Router } from "express";
import { customerRoute } from "../modules/Customer/customer.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/",
        route: customerRoute
    },
]


moduleRoutes.forEach((item) => router.use(item.path, item.route))

export default router;