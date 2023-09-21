const express = require('express');
const router = express.Router();

// Define routes
router.get('/', async(req, res) => {
  res.send('Hello, this is the homepage');
});

router.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Export the router
module.exports = router;