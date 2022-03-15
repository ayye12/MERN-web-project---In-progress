import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000; //access to .env and add PORT

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client); //Pass the data from the database
    app.listen(port, () => {
      //app listen starting the webserver
      console.log(`listening on port ${port}`);
    });
  });
