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

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" })
    }
    USER.findOne({ email: email }).then((saveUser) => {
        if (!saveUser) {
            return res.status(422).json({ error: "Invalid email" });
        }
        //matching hashing password with bcrypt.js
        bcrypt.compare(password, saveUser.password).then((match) => {
            if (match) {
                return res.status(200).json({ message: "Logged in Successfully" })
            } else {
                return res.status(422).json({ error: "Invalid Password" });
            }

        }).catch((err) => {
            return res.status(422).send(err);
        })
       
    })

})

module.exports = router;