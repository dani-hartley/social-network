const { User, Thought } = require('../models');

const userController = {
   //find all users
   getAllUsers(req, res) {
       User.find({})
       .populate({
           path: 'thoughts',
           select: '-__v'
       })
       .select('-__v')
       .then(dbUserData => res.json(dbUserData))
       .catch(err => {
           console.log(err);
           res.sendStatus(400);
       });
   },
   // get user by id
   getUserById({ params }, res) {
       User.findOne({ _id: params.id })
       .populate({
           path: 'thoughts',
           select: '-__v'
       })
       .select('-__v')
       .then(dbUserData => {
           if(!dbUserData) {
               res.status(404).json({ message: "No user found with this id!" });
               return;
           }
           res.json(dbUserData);
       })
       .catch(err => res.json(err));
   },
   //create a new user
   createUser({ body }, res) {
       User.create(body)
       .then(dbPizzaData => res.json(dbPizzaData))
       .catch(err => res.json(err));
   },
}