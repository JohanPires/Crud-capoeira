const Event = require("../Model/Event");

exports.createEvent = (req, res, next) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    public: req.body.public,
    city: req.body.city,
    school_id: req.body.school_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  });

  event.save();

  return res.send(200);
};

exports.getAllEvent = async (req, res, next) => {
  Event.find().then((users) => {
    res.status(200).send(users);
  });
};

exports.getOneEvent = async (req, res, next) => {
  Event.find({ _id: req.params.id })
    .then((event) => {
      console.log(event);
      res.status(200).send(event);
    })
    .catch((err) => res.status(404).json({ err }));
};

exports.updateEvent = async (req, res, next) => {
  try {
    const result = await Event.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          category: req.body.category,
          public: req.body.public,
          city: req.body.city,
          school_id: req.body.school_id,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error during update" });
  }
};

exports.deleteEvent = async (req, res, next) => {
  Event.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Evenement supprimée !" }))
    .catch((error) => res.status(401).json({ error }));
};
