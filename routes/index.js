var express = require('express');
const User = require('../models/user');
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const signedUsers = await User.findAll();
    res.render('index', { title: 'Petition', signedUsers });
  } catch (error) {
    next(error);
  }
});

router.post('/sign', async function(req, res, next) {
  try {
    const { email, fname, lname, country, address } = req.body;
    const newUser = await User.create({ email, firstName: fname, lastName: lname, country, streetAddress: address });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error fetching signed users');
  }
});

module.exports = router;
