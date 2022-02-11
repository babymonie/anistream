var express = require('express');
var app = express();
var cors = require('cors');
app.get('/',function(req,res){
    res.send('dababy')
})
const {StreamEpisode,StreamEpisodeDub,StreamMovie,StreamMovieDub,DownloadEpisode,DownloadEpisodeDub,DownloadMovie,DownloadMovieDub} = require('anstrm');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/streamepisode/:name/:episode', async (req, res) =>  {
    var name = req.params.name;
    var episode = req.params.episode;
    var url = await StreamEpisode(name,episode);
    res.send(url);
});
app.get('/streamepisode/dub/:name/:episode', async (req, res) => {
    var name = req.params.name;
    var episode = req.params.episode;
    var url = await StreamEpisodeDub(name,episode);
    res.send(url);
});
app.get('/streammovie/:name', async (req, res) => {
    var name = req.params.name;
    var url = await StreamMovie(name);
    res.send(url);
});
app.get('/streammovie/dub/:name', async (req, res) =>{
    var name = req.params.name;
    var url = await StreamMovieDub(name);
    res.send(url);
});
app.get('/download/:name/:episode', async (req, res) => {
    var name = req.params.name;
    var episode = req.params.episode;
    var url = await DownloadEpisode(name,episode);
    res.send(url);
});
app.get('/download/:name', async (req, res) => {
    var name = req.params.name;
    var url = await DownloadMovie(name);
    res.send(url);
});
app.get('/download/dub/:name/:episode', async (req, res) => {
    var name = req.params.name;
    var episode = req.params.episode;   
    var url = await DownloadEpisodeDub(name,episode);
    res.send(url);
});
app.get('/download/dub/:name', async (req, res) => {
    var name = req.params.name;
    var url = await DownloadMovieDub(name);
    res.send(url);
});
app.get("/find" , async (req,res) => {
    res.sendFile(__dirname + '/find.html');
});
app.listen(3000);
console.log('API running on port 3000');
