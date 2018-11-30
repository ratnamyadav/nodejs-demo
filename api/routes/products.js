const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests /products'
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requests /products',
        createdProduct: product
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id == 'special') {
        res.status(200).json({
            message: 'Handling GET requests special /products/:id'
        })
    } else {
        res.status(200).json({
            message: 'Handling GET requests /products/:id'
        })
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product'
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product'
    })
});

module.exports = router;