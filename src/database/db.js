const mongoose = require("mongoose");
const MONGOURI = "mongodb+srv://zebulgado:L4WHKcNxR4uAwAtL@cluster0.u9g9a.mongodb.net/Negromonte";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;