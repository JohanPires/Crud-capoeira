const Ressource = require("../Model/Ressource");

exports.createRessource = (req, res, next) => {
  const ressource = new Ressource({
    title: req.body.title,
    url: req.body.url,
    type: req.body.type,
  });

  ressource.save();

  return res.send(200);
};

exports.getAllRessource = (req, res, next) => {
  Ressource.find()
    .then((ressource) => {
      res.status(200).send(ressource);
    })
    .catch((err) => console.log(err));
};

exports.getOneRessource = (req, res, next) => {
  Ressource.find({ _id: req.params.id })
    .then((ressource) => {
      res.status(200).send(ressource);
    })
    .catch((err) => res.status(404).json({ err }));
};

exports.updateRessource = async (req, res, next) => {
  try {
    const result = await Ressource.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          url: req.body.url,
          type: req.body.type,
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

exports.deleteRessource = async (req, res, next) => {
  Ressource.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur supprimée !" }))
    .catch((error) => res.status(401).json({ error }));
};
