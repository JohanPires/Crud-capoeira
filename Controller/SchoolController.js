const School = require("../Model/School");

exports.createSchool = (req, res, next) => {
  const school = new School({
    name: req.body.name,
    location: req.body.location,
  });

  school.save();

  return res.send(200);
};

exports.getAllSchool = async (req, res, next) => {
  School.find().then((school) => {
    res.status(200).send(school);
  });
};

exports.getOneSchool = async (req, res, next) => {
  School.find({ _id: req.params.id })
    .then((school) => {
      console.log(school);
      res.status(200).send(school);
    })
    .catch((err) => res.status(404).json({ err }));
};

exports.updateSchool = async (req, res, next) => {
  try {
    const result = await School.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          location: req.body.location,
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

exports.deleteSchool = async (req, res, next) => {
  School.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur supprimée !" }))
    .catch((error) => res.status(401).json({ error }));
};
