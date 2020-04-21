var express = require('express');
var router = express.Router();
var userdb = require('./user-details-db');
var cookieManage = require('./cookieManage');
var postdb = require('./post-detail-db')
const crypto = require('crypto')

router.get('/user', cookieManage["authenticateUser"], cookieManage["validateUser"], function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    let uname = req.cookies["username"];
    let data = userdb.filter((e) => e.uname === uname)
    if (data.length > 0) {
        res.status(200).send({
            "status": "ok",
            "userDetail": {
                "id": data[0].id,
                "email": data[0].email,
                "uname": data[0].uname
            }
        })
    } else {
        res.status(400).send({ "status": "invalid" });
    }
});

router.post('/auth', function(req, res, next) {
        res.setHeader('content-type', 'application/json');
        let data = userdb.filter((e) => e.uname === req.body["uname"] && e.password === req.body["password"]);
        (data.length > 0) ? next(): res.status(400).send({ "error": "Invalid UserName or Password" });
    }, cookieManage["setCoockies"],
    function(req, res, next) {
        res.status(301).header({ Location: '/' }).send({ "status": "ok" });
    }
);

router.get('/signout', function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    res.clearCookie("username");
    res.clearCookie("auth_token");
    res.status(301).header({ Location: '/login' }).send({ "status": "ok" });
});

router.get('/posts', function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    data = postdb.getJSON().filter(e => e.uname === req.cookies["username"]);
    data = data.reverse()
    console.log("POSTS :- ", data)
    res.send(JSON.stringify(data));
});

router.post('/posts/new', cookieManage["authenticateUser"], cookieManage["validateUser"], function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    let cookies = req.cookies;
    data = { "uname": cookies["username"], "post": req.body["message"] };
    postdb.putJSON(data);
    res.send({ "status": "ok" })
});

module.exports = router;