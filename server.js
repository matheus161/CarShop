const app = require("./src/app.js");
const mongoose = require("mongoose");
const env = require("./env.js")

const start = async () => {
    await mongoose.connect(env.db.mongoURI, env.db.options);
    app.listen(process.env.port || 8080 , (err) => {
      if (err) {
        return console.log("err: ", err);
      }
      return console.log(`Server running at ${env.app.port}`);
    });
  };
  
  start();
  