const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });
  
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });
  
// * is a wildcard- any route that wasn't previously defined will fall under this request (/about, /contact, /members will be the same); Order of routes matter!  * should always come last!
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;