const verifySignUpController = require("../controller/app/api/verifySignUp.js");
const verifySignController = require("../controller/app/api/verifySign.js");
const statusController = require("../controller/app/api/status.js");
const verifyJwtTokenController = require("../controller/app/api/verifyJwtToken.js");

// module.exports = function (app) {
//   //User Auth
//   app.post("/api/auth/signup", [verifySignUpController.checkDuplicateUserNameOrEmail, verifySignUpController.checkRolesExisted], verifySignController.signup);

//   app.post("/api/auth/signin", verifySignController.signin);

//   //Status
//   app.get("/api/status", statusController.list);
//   app.get("/api/statususer", [verifyJwtTokenController.verifyToken], statusController.listStatusUser);
//   app.get("/api/status/:id", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.getById);
//   app.post("/api/status", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.add);
//   app.put("/api/status/:id", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.update);
//   app.delete("/api/status/:id", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.delete);
// };
module.exports = function (app) {
  //User Auth
  // app.post("/api/auth/signup", (req, res) => {
  //   [verifySignUpController.checkDuplicateUserNameOrEmail, verifySignUpController.checkRolesExisted], verifySignController.signup(req, res);
  // });
  app.post("/api/auth/signup", (req, res) => {
    {
      [verifySignUpController.checkDuplicateUserNameOrEmail, verifySignUpController.checkRolesExisted], verifySignController.signup(req, res);
    }
  });

  app.post("/api/auth/signin", (req, res) => {
    verifySignController.signin(req, res);
  });

  //Status
  app.get("/api/status", (req, res) => {
    statusController.list(req, res);
  });
  app.get("/api/statususer", (req, res) => {
    [verifyJwtTokenController.verifyToken], statusController.listStatusUser(req, res);
  });
  app.get("/api/status/:id", (req, res) => {
    [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.getById(req, res);
  });
  app.post("/api/status", (req, res) => {
    [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.add(req, res);
  });
  app.put("/api/status/:id", (req, res) => {
    [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.update(req, res);
  });
  app.delete("/api/status/:id", (req, res) => {
    [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], statusController.delete(req, res);
  });

  app.get("/", (req, res) => {
    res.send({
      status: "Succes",
      message: "SUCCUESSFULLY CONNECT TO LOCALHOST:5050",
    });
  });
};
