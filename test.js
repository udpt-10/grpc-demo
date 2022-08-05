// test.js
// get all news
const client = require("./client");

client.GetAllStudent({}, (error, student) => {
  // if (!error) throw error;
  console.log(student);
});

// add a news
client.addStudent(
  {
    mssv: 3,
    lastName: "Title news 3",
    firstName: "Body content 3",
    year: "Image URL here",
  },
  (error, student) => {
    if (error) throw error;
    console.log("Successfully created a news.");
    console.log(student);
  }
);

// edit a news
client.editStudent(
  {
    mssv: 1712180,
    lastName: "Body content 2 edited.",
    firstName: "Image URL edited.",
    year: "Title for 2 edited.",
  },
  (error, student) => {
    if (error) throw error;
    console.log("Successfully edited a news.");
  }
);

// delete a news
// client.deleteStudent(
//   {
//     mssv: 1712180,
//   },
//   (error, student) => {
//     if (error) throw error;
//     console.log("Successfully deleted a student item.");
//   }
// );
