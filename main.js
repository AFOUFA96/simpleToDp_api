require("./api/helpers/string.helper");

const express = require("express");

const app = express();

const cors = require("cors");
const corsOptions = {
    origin : ["http://localhost:3000"],
    credentials: true // pour les cookies
};
app.use(cors(corsOptions));
app.use(express.json()); 

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// const routers = require('./api/routers');
// for(const route in routers){
//     app.use(`/${route}`, new routers[route]().router);
// }
const dbService = require('./api/services/db.service');
dbService.initialize();

const appConfig = require("./api/configs/app.config.js");
app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}.`); // ` : back tic
});