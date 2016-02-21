var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("This is home.")
});

router.get('/list', function (req, res, next) {
    var universities = ['sut', 'iut', 'tu', 'kntu'];
    response = "<table border='1'>"
    for(var i = 0; i < universities.length; i ++)
    {
        response += "<tr> <td>" + "<a href='" + universities[i] + "'>" + universities[i] + "</a> </td> </tr>"
    }
    response = response + "</table>"
    res.send(response)
});

module.exports = router;
