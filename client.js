const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const { closeClient } = require("grpc");
const PROTO_PATH = "./student.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const StudentService = grpc.loadPackageDefinition(packageDefinition).StudentService;

const client = new StudentService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.GetAllStudent({}, (error, student) => {
  // if (!error) throw error;
  console.log(student);
});

// client.getStudent({id: '18126020'}, (error, student) => {
//   console.log(student);
// });

module.exports = client;
