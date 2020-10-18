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
    insertOne: function(tableName, whatToAdd, boolean, val1, val2) {
        const queryString = "INSERT INTO ?? (??, ??) VALUE ?, ?";
        console.log(queryString);
        connection.query(queryString, [tableName, whatToAdd, boolean, val1, val2], function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    },
 //Update One ORM function
    updateOne: function(tableName, whatToUpdate, val1, whereToUpdate, val2) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [tableName, whatToUpdate, val1, whereToUpdate, val2], function(err, res) {
            if(err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;