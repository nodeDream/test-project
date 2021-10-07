const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome from master branch');
})

module.exports = router;