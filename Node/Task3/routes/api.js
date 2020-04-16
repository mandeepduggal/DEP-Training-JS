var express = require('express');
var router = express.Router();
var userdb = require('./user-details-db');

var postdb = require('./post-detail-db')
const crypto = require('crypto')
router.get('/user', authenticateUser, validateUser, function(req, res, next) {
    console.log("user")
    res.setHeader('content-type', 'application/json');
    let uname = req.cookies["username"];
    let data = userdb.filter((e) => e.uname === uname)
    console.log(data[0])

    return (data.length > 0) ? res.status(200).send({ "status": "ok", "userDetail": { "id": data[0].id, "email": data[0].email, "uname": data[0].uname } }) : res.status(400).send({ "status": "invalid" });
});


router.post('/auth', function(req, res, next) {
        res.setHeader('content-type', 'application/json');
        let data = userdb.filter((e) => e.uname === req.body["uname"] && e.password === req.body["password"]);
        (data.length > 0) ? next(): res.status(400).send({ "error": "Invalid UserName or Password" });
    }, setCoockies,
    function(req, res, next) {
        res.status(301).header({ Location: '/' }).send({ "status": "ok" });
    }
);

function setCoockies(req, res, next) {
    let data = userdb.filter((e) => e.uname === req.body["uname"] && e.password === req.body["password"]);

    data = JSON.stringify({ "uname": data[0].uname, "password": data[0].password });
    res.cookie("username", req.body["uname"]);
    res.cookie("auth_token", crypto.createHash('md5').update(data).digest('hex'));
    next();
}

function authenticateUser(req, res, next) {
    console.log("authenticate1");

    let cookies = req.cookies;
    if (cookies["username"] != undefined && cookies["auth_token"] != undefined) {
        next();
    } else {
        console.log("authenticate");
        // res.status(302).header({ Location: '/' }).send({ "status": "please login first" });
        res.status(400).send({ "status": "error", "error": "please login first" })
    }
}

function validateUser(req, res, next) {
    let cookies = req.cookies;
    try {
        let data = userdb.filter((e) => e.uname === cookies["username"]);
        data = JSON.stringify({ "uname": data[0].uname, "password": data[0].password });
        // console.log(data);
        if (cookies["auth_token"] === crypto.createHash('md5').update(data).digest('hex')) {
            console.log("validate complete")
            next();
        } else {
            console.log("validate");
            // res.status(302).header({ Location: '/' }).send({ "status": "please login with correct login details first" });
            res.status(400).send({ "status": "error", "error": "please login with correct login details first" })
        }
    } catch (ex) {
        console.log("validate");
        // res.status(302).header({ Location: '/' }).send({ "status": "please login with correct login details first" });
        res.status(400).send({ "status": "error", "error": "please login with correct login details first" })

    }

}

router.get('/logout', function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    res.clearCookie("username");
    res.clearCookie("auth_token");
    res.send({ "status": "ok" });
});

router.get('/posts', authenticateUser, validateUser, function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    data = postdb.getJSON().filter(e => e.uname === req.cookies["username"]);
    res.send(data);
});
// /posts/new

module.exports = router;