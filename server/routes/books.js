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

router.get('/:id', function(req, res) {
    console.log('GET', 'ID', req.params.id);
    
    res.sendStatus(200);
});

router.put('/:id', function(req, res) {
    console.log('PUT', 'ID', req.params.id, 'BODY', req.body);

    res.sendStatus(200);
});

router.delete('/:id', function(req, res) {
    console.log('DELETE', 'ID', req.params.id);

    res.sendStatus(200);
});

module.exports = router;
