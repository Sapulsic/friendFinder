var friends = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends", function (req,res) {
        console.log("yo")
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        if (friends.length < 5) {
            friends.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
};