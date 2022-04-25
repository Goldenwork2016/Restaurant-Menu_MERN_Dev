const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { DB_URL, DB_USERNAME, DB_PASSWORD ,DB_CLUSTER , DB_NAME  } = process.env;

exports.connect = () => {
 let uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
  mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
   }).then(
    (res) => {
      console.log("Database connection successful");
    }
  ).catch((err) => {
    console.log(err);
   err => console.error();
  });
};