var express = require('express');
var router = express.Router();
var fs = require("fs")
var path = require("path");

router.get('/', function(req, res, next) {
    res.send("This is kntu.")
});

router.get('/students/list', function(req, res, next) {
    var content = fs.readFileSync(get_file_path(), 0)
    console.log(content);
    res.send("student list of kntu and content is " + content)
});

router.post('/students/register', function(req, res, next){
    var first_name = req.body.firstname;
    var last_name = req.body.lastname;
    var password = req.body.password;
    console.log(first_name);
    console.log(last_name);
    res.send('register' + first_name)
    fs.appendFileSync(get_file_path(), first_name + "-" + last_name + ";" + "\n")
});

function get_file_path()
{
    return path.join(__dirname, '..', 'data/student-info.txt');
}

module.exports = router;