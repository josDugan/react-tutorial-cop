const express = require('express');
const router = express.Router();

const connectionPoolService = require('../database/connection-pool');

router.get('/', function (req, res, next) {

    const book = {
        'author': 'Charles Dickens',
        'title': 'Great Expectations',
        'published': '1861-09-01'
    };

    connectionPoolService.getPool().query('insert into books set ?', book, (err, result) => {
        if (err) throw err;

        console.log(result);
    });

    res.send('here are some other books!');
});

module.exports = router;
