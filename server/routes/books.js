const express = require('express');
const router = express.Router();
const BookRepository = require('../database/book-repository');
const connectionPoolService = require('../database/connection-pool');

const repository = new BookRepository(connectionPoolService);

// Save a book
router.post('/', function(req, res) {
    console.log('post body', req.body);
    
    repository.save(req.body, err => {
        if (err) {
            res.status(500).json({'error': err + ''});
        }
        else {
            res.sendStatus(200);
        }
    });
});

router.get('/', function (req, res) {
    console.log('getting books');

    repository.getAll((err, result) => {
        if (err) {
            res.status(500).json({'error': err + ''});
        }
        else {
            res.status(200).json(result);
        }
    });
});

router.get('/:id', function(req, res) {
    console.log('GET', 'ID', req.params.id);
    
    repository.get(req.params.id, (err, result) => {
        if (err) {
            res.status(500).json({'error': err + ''});
        }
        else {
            res.status(200).json(result);
        }
    });
});

router.put('/:id', function(req, res) {
    console.log('PUT', 'ID', req.params.id, 'BODY', req.body);

    repository.update(req.params.id, req.body, err => {
        if (err) {
            res.status(500).json({'error':err + ''});
        }
        else {
            res.sendStatus(200);
        }
    })
});

router.delete('/:id', function(req, res) {
    console.log('DELETE', 'ID', req.params.id);

    repository.delete(req.params.id, err => {
        if (err) {
            res.status(500).json({'error': err + ''});
        }
        else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;
