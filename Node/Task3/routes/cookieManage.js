var express = require('express');
var router = express.Router();
var userdb = require('./user-details-db');
const crypto = require('crypto')

function setCoockies(req, res, next) {
    let data = userdb.filter((e) => e.uname === req.body["uname"] && e.password === req.body["password"]);

    data = JSON.stringify({ "uname": data[0].uname, "password": data[0].password });
    res.cookie("username", req.body["uname"]);
    res.cookie("auth_token", crypto.createHash('md5').update(data).digest('hex'));
    next();
}

function authenticateUser(req, res, next) {
    let cookies = req.cookies;
    if (cookies["username"] != undefined && cookies["auth_token"] != undefined) {
        next();
    } else {
        res.status(401).send({ "status": "error", "error": "please login first" });
    }
}

function validateUser(req, res, next) {
    let cookies = req.cookies;
    try {
        let data = userdb.filter((e) => e.uname === cookies["username"]);
        data = JSON.stringify({ "uname": data[0].uname, "password": data[0].password });
        if (cookies["auth_token"] === crypto.createHash('md5').update(data).digest('hex')) {
            next();
        } else {
            res.status(400).send({ "status": "error", "error": "please login with correct login details first" })
        }
    } catch (ex) {
        res.status(400).send({ "status": "error", "error": "please login with correct login details first" })
    }

}

module.exports = {
    "setCoockies": setCoockies,
    "authenticateUser": authenticateUser,
    "validateUser": validateUser
}