const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "courseA" },
  { id: 2, name: "courseB" },
  { id: 3, name: "courseC" }
];
app.get("/", (req, res) => {
  res.send("hello courses");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

//create single route
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the given id has not matched course");
  res.send(course);
});

const port = process.env.port || 4040;
app.listen(port, () => console.log(`listen to port ${port}`));
