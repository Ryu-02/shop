"use strict";

const path = require("path");

const adminController = require("../controllers/admin");

const express = require("express");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
