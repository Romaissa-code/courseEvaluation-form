const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: 3306,
  password: "Romaissa25",
  database: "coursedatabase",
});

// app.get("/", (req, res) => {
//   db.query(
//     "INSERT INTO courseevaluation (instructor_name,module,an1,an2,an3,an4,an5,an6,an7,an8,an9,an10,an11,an12,an13,student_effort,student_work,message) VALUES ('namane','MODULE','G','G','G','G','G','G','G','G','G','G','G','G','G',7,'0-11','HELLO')",

//     (err, result) => {
//       res.send("hello world");
//     }
//   );
// });
app.post("/api/insert", (req, res) => {
  const {
    instructor_name,
    module,
    an1,
    an2,
    an3,
    an4,
    an5,
    an6,
    an7,
    an8,
    an9,
    an10,
    an11,
    an12,
    an13,
    student_effort,
    student_work,
    message,
  } = req.body.formdata;

  db.query(
    "INSERT INTO courseevaluation (instructor_name,module,an1,an2,an3,an4,an5,an6,an7,an8,an9,an10,an11,an12,an13,student_effort,student_work,message) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      instructor_name,
      module,
      an1,
      an2,
      an3,
      an4,
      an5,
      an6,
      an7,
      an8,
      an9,
      an10,
      an11,
      an12,
      an13,
      student_effort,
      student_work,
      message,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("sucess");
      }
    }
  );
});
app.listen(3001, () => {
  console.log("port 3001");
});
