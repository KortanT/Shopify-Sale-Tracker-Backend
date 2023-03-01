const express = require('express');
const router = express.Router();


router.get('/', (req, resp, next) => {
    resp.status(200).json({
        message: "get success"
    })
})

router.post('/', (req, resp, next) => {
    resp.status(200).json({
        message: "post success"
    })
})

module.exports = router;