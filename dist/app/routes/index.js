"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_route_1 = require("../modules/Customer/customer.route");
const bike_route_1 = require("../modules/Bike/bike.route");
const serviceRecord_route_1 = require("../modules/ServiceRecord/serviceRecord.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/',
        route: customer_route_1.customerRoute,
    },
    {
        path: '/',
        route: bike_route_1.bikeRoute,
    },
    {
        path: '/',
        route: serviceRecord_route_1.serviceRecordRoute,
    },
];
moduleRoutes.forEach((item) => router.use(item.path, item.route));
exports.default = router;
