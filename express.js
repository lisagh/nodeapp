const express = require("express");
const app = express();

const courses = [
  { id: 1, course: courseA },
  { id: 2, course: courseB },
  { id: 3, course: courseC }
];
app.get("/", (req, res) => {
  res.send("hello courses");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//create single route
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  res.send(req.query);
});

const port = process.env.port || 4040;
app.listen(port, () => console.log(`listen to port ${port}`));
