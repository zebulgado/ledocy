const express = require('express');
const User  = require('../model/User');
const router = express.Router();
const Constants = require('../../public/language/pt-br')

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: Constants.LANGUAGE.REGISTER_FAILED})
    }
})

module.exports = app => app.use('/user', router);