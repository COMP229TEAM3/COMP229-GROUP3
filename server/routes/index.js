let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

// Helper function for guard purposes
function requireAuth(req, res, next) {
    // Check if the user is logged in
    if (!req.isAuthenticated()) 
    {
        return res.redirect('/login');
    } 
    else 
    {
        next();
    }
}

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Business Contact List Us page. */
router.get('/businesscontactlist', indexController.displayBusinesscontactlistPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);



/* GET route for displaying Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST route for processing Login Page -  */
router.post('/login', indexController.processLoginPage );

/* GET route for displaying Register Page */
router.get('/register', indexController.displayRegisterPage);

/* POST route for processing Register Page -  */
router.post('/register', indexController.processRegisterPage );

/* GET to perform UserLogout - */
router.get('/logout', indexController.performLogout );

/* GET route for displaying ADD Page - CREATE OPERATION */
router.get('/add', requireAuth, indexController.displayAddPage);

module.exports = router;
