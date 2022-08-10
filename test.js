// test.js
// get all news
const client = require("./client");

// client.GetAllStudent({}, (error, student) => {
//   // if (!error) throw error;
//   console.log(student);
// });

// add a student
// client.addStudent(
//   {
//     mssv: '1653098',
//     lastName: "Tu",
//     firstName: "Minh",
//     year: "6",
//   },
//   (error, student) => {
//     if (error) throw error;
//     console.log("Successfully created a news.");
//     console.log(student);
//   }
// );

// edit a student
// client.editStudent(
//   {
//     mssv: '18127219', // match 
//     lastName: "Thao edited.",
//     firstName: "Nguyen edited.",
//     year: "Year edited.",
//   },
//   (error, student) => {
//     if (error) throw error;
//     console.log("Successfully edited a news.");
//   }
// );

// delete a student
// client.deleteStudent(
//   {
//     id: '18127219',
//   },
//   (error, student) => {
//     if (error) throw error;
//     console.log(student);
//     console.log("Successfully deleted a student item.");
   
//   }
// );


client.getStudent(
  {id: 18126020},(error, student) =>{
    if(error) throw error;
    console.log(student);
  }
)