const {User} = require('../models')


// simply test the linkage of controller and routes
// module.exports = {
//   register (req, res) {
//     res.send({
//         message: `Hello ${req.body.email}! Your user was registered! have fun!`
//     })
//   }
// }

// connect the database
 module.exports = {
     async register (req, res) {
         try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
         } catch (err) {
            // eg. email already exists
            res.status(400).send({
                error: 'this email account is already in use.'
            })
         }
     }
 }
