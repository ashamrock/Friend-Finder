var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var friendList = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "score": "25"
  },
  {
    "name":"Giant Panda",
    "photo":"https://www.sciencenews.org/wp-content/uploads/2019/01/013019_JR_panda-diet_feat.jpg",
    "score": "38"
  },
  {
    "name":"Mr Nobody",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/1200px-Blank_portrait%2C_male_%28rectangular%29.png",
    "score": "5"
  },
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friendList", function(req, res) {
  return res.json(friendList);
});

app.get("/api/friendList/:friends", function(req, res) {
  var friend = req.params.friends;
  console.log(friend);
});

app.post("/api/friendList", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  friendList.push(newFriend);
  res.json(newFriend);
});

