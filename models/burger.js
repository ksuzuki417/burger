var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers",  function(res) {
            cb(res);
        });
    },
    insertOne: function(whatToAdd, val1, cb) {
        orm.insertOne("burgers", whatToAdd, val1, function(res) {
            cb(res);
        });
    },
    updateOne: function(whatToUpdate, condition, cb) {
        orm.updateOne("burgers", whatToUpdate, condition, function(res) {
            cb(res);
        });
    },
}


module.exports = burger;