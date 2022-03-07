const path = require('path');
const router = require('express').Router();

// Route for main index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// Route for the animals html page
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
// Route for the zookeepers html page
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('/aquarium', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/aquarium.html'));
});

// Route wildcard to catch any random inputs (/about or /contact or /membership, etc) and return the homepage (index.html)
// THIS ROUTE MUST ALWAYS COME LAST OR IT WILL MESS UP THE NAMED ROUTES ABOVE
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;