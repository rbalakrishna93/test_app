var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/page1', function(req, res) {
    res.render('page1');
});

router.get('/page2', function(req, res) {
    res.render('page2');
});

router.get('/page3', function(req, res) {
    res.render('page3');
});

router.get('/page4/', function(req, res) {
    res.render('page4');
});

router.get('/page5', function(req, res) {
    res.render('page5');
});

router.get('/page6', function(req, res) {
    res.render('page6');
});

router.get('/directly/to/page7/', function(req, res) {
    res.render('page7');
});

router.get('/unbalancedtags', function(req, res) {
    res.render('unbalancedtags');
});


router.get('/stack', function(req, res) {
    res.render('stackoverflow');
});

router.get('/sitemap1', function(req, res) {
    res.header('Content-Type', 'application/xml');
    res.render('sitemap1');
});

router.get('/sitemap', function(req, res) {
    res.header('Content-Type', 'application/xml');
    res.render('sitemap');
});

router.get('/fetchTimeout', function(req, res) {
    setTimeout(function() {next(res);},20000);
     
});
function next(res){
	res.render('page8');
}

module.exports = router;
