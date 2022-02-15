//Create a Normal Server>>>>>>

const express = require('express');

const app = express();

app.listen(5500, function(){
    console.log("Listening on port 5500")
})


//2. Create a simple Route>>>>

//1 part done>>>
app.post("/", function (req, res) {
    res.send("Welcome to home page");
});

//2 get the details of all data>>>
app.get("/users", function (req, res) {
    res.send(users);
});

app.get("/users", async (req, res) => {
    const user = await User.find({ email: "cmanwelli@constantcontact.com" })
      .lean()
      .exec();
    console.log(user);
    res.status(200).json({ data: user });
})