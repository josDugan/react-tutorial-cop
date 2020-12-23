'use strict';

const mysql = require('mysql');
const db = require('../config/db');

const connectionPoolService = {

    pool: null,

    init: function() {
        this.pool = mysql.createPool(db);
    },

    getPool: function() {
        return this.pool;
    }
}

module.exports = connectionPoolService;
