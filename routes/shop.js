"use strict";

const path = require("path");

const shopContorller = require("../controllers/shop");

const express = require("express");
const router = express.Router();

router.get("/", shopContorller.getIndex);
router.get("/products", shopContorller.getProduct);
router.get("/cart", shopContorller.getCart);
router.get("/checkout", shopContorller.getCheckout);

module.exports = router;
