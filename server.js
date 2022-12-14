const grpc = require("@grpc/grpc-js"); //npm install --save grpc
const PROTO_PATH = "./student.proto";
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const studentProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server(); // create server instance

var student = [
  { mssv: "18126020", lastName: "Khanh", firstName: "Tran", year: "4" },
  { mssv: "18127219", lastName: "Thao", firstName: "Nguyen", year: "4" },
  {mssv: "1652005", lastName: "Cong", firstName: "Nguyen", year: "6" }
];

server.addService(studentProto.StudentService.service, {
  GetAllStudent: (_, callback) => {
    console.log(student);
    callback(null, { student });

  },
  getStudent: (_, callback) => {
    const studentId = _.request.id;
    const studentItem = student.find(({ mssv }) => studentId == mssv);

    callback(null,studentItem);
  },
  deleteStudent: (_, callback) => {
    const studentId = _.request.id;
    student = student.filter(({ mssv }) => mssv !== studentId);
    callback(null, {});
  },
  editStudent: (_, callback) => {
    const studentId = _.request.mssv;      //require mssv of student
    const studentItem = student.find(({ mssv }) => studentId == mssv); //mothod loops
    console.log(studentItem);
    studentItem.lastName = _.request.lastName;
    studentItem.firstName = _.request.firstName;
    studentItem.year = _.request.year;
    callback(null, studentItem);
  },
  addStudent: (call, callback) => {
    let _student = { ...call.request };
    student.push(_student);
    console.log(_student);
    console.log('was created')
    callback(null, _student);
  },
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server at port:", port);
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  }
);
