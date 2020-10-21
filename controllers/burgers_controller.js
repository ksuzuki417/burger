const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

//create the router for the app
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers_db: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({id: result.insertId });
    });
});

//Export the router
module.exports = router;