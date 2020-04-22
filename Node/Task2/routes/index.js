var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/userdetails', function(req, res, next) {

    let userDetail = [{
            "fullName": "ABC XYZ",
            "email": "abc@gmail.com",
            "address": "ABC, ASDFG"
        },
        {
            "fullName": "User1",
            "email": "user1@gmail.com",
            "address": "user1, XYZ"
        },
        {
            "fullName": "User2",
            "email": "user2@gmail.com",
            "address": "user2, XYZ"
        }
    ];
    for (let i = 0; i < userDetail.length; i++) {
        if (userDetail[i].fullName == req.query.name) {
            res.setHeader("Content-Type", "application/json");
            res.send({ "status": "ok", "userDetails": userDetail[i] });
            return;
        }
    }
    res.send({ "status": "error", "message": "User not found" });

});

module.exports = router;
