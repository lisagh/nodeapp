const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
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
  const { error } = ValidateCourse(req.body);

  console.log(error);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  // look up the course
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the given id has not matched course");

  const { error } = ValidateCourse(req.body);

  console.log(error);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

//create single route
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the given id has not matched course");
  res.send(course);
});

const port = process.env.port || 4040;
app.listen(port, () => console.log(`listen to port ${port}`));

function ValidateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("the given id has not matched course");

  const index = courses.indexOf(course);
  //remove an object from the course array
  courses.splice(index, 1);

  res.send(course);
});
