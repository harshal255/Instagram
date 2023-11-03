const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');

router.get('/auth', (req, res) => {
    res.send("Hello auth")
})

router.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;
    //for server side valiation (if mission any user feild)
    if (!name || !email || !username || !password) {
        res.status(422).json({ error: "Please add all the fields" });
        return;
    }

    //can't save repeated users email
    USER.findOne({ $or: [{ email: email }, { username: username }] }).then((saveduser) => {
        if (saveduser) {
            return res.status(422).json({ error: "User Already Exist with that email or username" });
        }

        //password salting
        bcrypt.hash(password, 12).then((hasedpassword) => {
            const user = new USER({
                name,
                email,
                username,
                password: hasedpassword
            })
            user.save()
                .then(user => { res.json({ message: "saved successfully" }) })
                .catch(err => { console.log(err) });


        })

    });

})

module.exports = router;