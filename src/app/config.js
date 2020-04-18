var mysql = require('mysql')

const Development = {
    //url to be used in link generation
    url: "http://localhost:3306",
    //mySQL connection settings
    database: {

        connectionLimit: 10,
        host     : "localhost",
        user     : "root",
        password : "1234",
        database: "aau",
        multipleStatements : true

    }}