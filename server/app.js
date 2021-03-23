const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a route for "/" that will return the invite data with the user counts for both going and not going.
// Create a route for "/going" that will pass all those going to the event.
// Create a route for "/notgoing" that will pass all those not going to the event.
// Create a POST route for "/mark-invitee"
// Take the information POST about the user and store it in memory (i.e. in an array / object)
// Don't forget to mark the user as going or not going

const goingUsers = [];
const notGoingUsers = [];

app.get("/user", (req, res) => {
  axios.get("https:randomuser.me/api/").then((resp) => {
    const randomPerson = resp.data.results[0];
    // console.log(randomPerson)
    const newPerson = {
      id: randomPerson.email,
      phone: randomPerson.phone,
      email: randomPerson.email,
      first: randomPerson.name.first,
      last: randomPerson.name.last,
      thumbnail: randomPerson.picture.thumbnail,
    };
    res.json({
      user: newPerson,
      goingCount: goingUser.length,
      notGoingCount: notGoingUsers.length,
    });
  });
});

app.get("/going", (req, res) => {
  res.json(goingUsers);
});

app.get("/notgoing", (req, res) => {
  res.json(notGoingUsers);
});
app.get("/testing", (req, res) => {
  //   axios.get("https://randomuser.me/api/").then((resp) => {
  //     console.log(resp.data.results[0]);
  //   });
  res.json({ hello: true });
});

app.post("/mark-invitee", (req, res) => {
  const incomingUser = req.body;
  const userGoing = incomingUser.going;
  if (userGoing) {
    goingUsers.push(incomingUser);
  } else {
    notGoingUsers.push(incomingUser);
  }
  res.json({ message: "user added to invites", user: incomingUser });
});

app.listen(3001, (req, res) => {
  console.log("listening on port 3001");
});
