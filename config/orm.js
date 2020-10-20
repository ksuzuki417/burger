const connection = require("../config/connection.js");

const orm = {
 //Select All ORM function
    selectAll: function(tableName) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    },
 //Insert One ORM function
    insertOne: function(tableName, whatToAdd, val1) {
        const queryString = "INSERT INTO ?? (??) VALUES ?";
        console.log(queryString);
        connection.query(queryString, [tableName, whatToAdd, val1], function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    },
 //Update One ORM function
    updateOne: function(tableName, whatToUpdate, boolean, condition) {
        const queryString = "UPDATE ?? SET ?? = ?? WHERE ?";
        console.log(queryString);
        connection.query(queryString, [tableName, whatToUpdate, boolean, condition], function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;