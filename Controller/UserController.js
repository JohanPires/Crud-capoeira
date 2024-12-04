const User = require("../Model/User");

exports.createUser = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    school_id: req.body.school_id,
    refNum: req.body.refNum,
  });

  user.save();

  return res.send(200);
};

exports.getAllUsers = async (req, res, next) => {
  User.find().then((users) => {
    res.status(200).send(users);
  });
};

exports.getOneUser = async (req, res, next) => {
  User.find({ _id: req.params.id })
    .then((user) => {
      console.log(user);
      res.status(200).send(user);
    })
    .catch((err) => res.status(404).json({ err }));
};

exports.updateUser = async (req, res, next) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          school_id: req.body.school_id,
          refNum: req.body.refNum,
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error during update" });
  }
};

exports.deleteUser = async (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur supprimée !" }))
    .catch((error) => res.status(401).json({ error }));
};
