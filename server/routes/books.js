const express = require('express');
const router = express.Router();

const connectionPoolService = require('../database/connection-pool');

router.post('/', function(req, res) {
    console.log('post body', req.body);

    connectionPoolService.getPool().query('insert into books set ?', req.body, (err, result) => {
        if (err) throw err;

        console.log(result);
    });
});

router.get('/', function (req, res) {
    res.send('here are some other books!');
});

module.exports = router;
