const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Welcome from master branch');
=======
    res.send('Welcome from branch test');
>>>>>>> test
})

module.exports = router;