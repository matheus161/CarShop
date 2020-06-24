const app = require("./src/app.js");
const mongoose = require("mongoose");
const env = require("./env.js")
require("dotenv/config");


const start = async () => {
    await mongoose.connect(process.env.MONGOURI, 
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
    app.listen(process.env.PORT, (err) => {
      if (err) {
        return console.log("err: ", err);
      }
      return console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  };

  
  start();
  