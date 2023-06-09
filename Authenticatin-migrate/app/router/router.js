const verifySignUpController = require("../controller/app/api/verifySignUp.js");
const verifySignController = require("../controller/app/api/verifySign.js");
const statusController = require("../controller/app/api/status.js");
const verifyJwtTokenController = require("../controller/app/api/verifyJwtToken.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  //User Auth
  app.post("/api/auth/signup", [verifySignUpController.checkDuplicateUserNameOrEmail, verifySignUpController.checkRolesExisted], verifySignController.signup);

  app.post("/api/auth/signin", (req, res) => {
    verifySignController.signIn(req, res);
  });

  //Status
  app.get("/api/status", (req, res) => {
    statusController.list(req, res);
  });
  app.get("/api/statususer", [verifyJwtTokenController.verifyToken], (req, res) => {
    statusController.listStatusUser(req, res);
  });
  app.get("/api/status/:id", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], (req, res) => {
    statusController.getById(req, res);
  });
  app.post("/api/status", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], (req, res) => {
    statusController.add(req, res);
  });
  app.put("/api/status/:id", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], (req, res) => {
    statusController.update(req, res);
  });
  app.delete("/api/status/:id", [verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], (req, res) => {
    statusController.delete(req, res);
  });
};
