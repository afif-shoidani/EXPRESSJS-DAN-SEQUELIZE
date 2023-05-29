const User = require("../../../models/user.js");
const config = require("../../../config/configRoles.js");
const ROLEs = config.ROLEs;

// module.exports = {
//   checkDuplicateUserNameOrEmail(req, res, next) {
//     User.findOne({
//       where: {
//         id: req.body.id,
//       },
//     }).then((user) => {
//       if (user) {
//         res.status(400).send({
//           auth: false,
//           id: req.body.id,
//           message: "Error",
//           errors: "Id is already taken!",
//         });
//         return;
//       }

//       User.findOne({
//         where: {
//           email: req.body.email,
//         },
//       }).then((user) => {
//         if (user) {
//           res.status(400).send({
//             auth: false,
//             id: req.body.id,
//             message: "Error",
//             errors: "Email is already taken!",
//           });
//           return;
//         }
//         next();
//       });
//     });
//   },
module.exports = {
  checkDuplicateUserNameOrEmail(req, res, next) {
    User.findOne({
      where: {
        id: req.body.id,
      },
    })
      .then((user) => {
        if (user) {
          res.status(400).send({
            auth: false,
            id: req.body.id,
            message: "Error",
            errors: "Id is already taken!",
          });
          return;
        }

        User.findOne({
          where: {
            email: req.body.email,
          },
        })
          .then((userByEmail) => {
            if (userByEmail) {
              res.status(400).send({
                auth: false,
                id: req.body.id,
                message: "Error",
                errors: "Email is already taken!",
              });
              return;
            }
            next();
          })
          .catch((err) => {
            // Tangani kesalahan saat mencari pengguna berdasarkan email
            res.status(500).send({
              message: "Internal Server Error",
              error: err.message,
            });
          });
      })
      .catch((err) => {
        // Tangani kesalahan saat mencari pengguna berdasarkan id
        res.status(500).send({
          message: "Internal Server Error",
          error: err.message,
        });
      });
  },

  checkRolesExisted(req, res, next) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLEs.includes(req.body.roles[i].toUpperCase())) {
        res.status(400).send({
          auth: false,
          id: req.body.id,
          message: "Error",
          errors: "Does NOT exist Role = " + req.body.roles[i],
        });
        return;
      }
    }
    next();
  },
};
// module.exports = {
//   checkDuplicateUserNameOrEmail: async (req, res, next) => {
//     try {
//       const user = await User.findOne({
//         where: {
//           id: req.body.id,
//         },
//       });

//       if (user) {
//         return res.status(400).send({
//           auth: false,
//           id: req.body.id,
//           message: "Error",
//           errors: "Id is already taken!",
//         });
//       }

//       const userByEmail = await User.findOne({
//         where: {
//           email: req.body.email,
//         },
//       });

//       if (userByEmail) {
//         return res.status(400).send({
//           auth: false,
//           id: req.body.id,
//           message: "Error",
//           errors: "Email is already taken!",
//         });
//       }

//       next();
//     } catch (err) {
//       return res.status(500).send({
//         message: "Internal Server Error",
//         error: err.message,
//       });
//     }
//   },

//   checkRolesExisted: (req, res, next) => {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLEs.includes(req.body.roles[i].toUpperCase())) {
//         return res.status(400).send({
//           auth: false,
//           id: req.body.id,
//           message: "Error",
//           errors: "Does NOT exist Role = " + req.body.roles[i],
//         });
//       }
//     }
//     next();
//   },
// };
