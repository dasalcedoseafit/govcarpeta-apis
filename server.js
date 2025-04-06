/* Definicion Servidor Express*/
var mongoose = require("mongoose");
const express = require("express"),
  http = require("http");
var bodyParser = require("body-parser");
const app = express();
var swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./routes/swagger.json");
const indexRouter = require("./routes/apphome.route");
const apiRouter = require("./routes/apis.route");
var cors = require('cors');

allowedOrigins=[
  'http://localhost:8100',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:5000',
  'capacitor://localhost',
  '*',
  'https://govcarpeta-apis-4905ff3c005b.herokuapp.com',
  'http://govcarpeta-apis-4905ff3c005b.herokuapp.com'
]

const corsOptions = {
  origin: (origin, callback) =>{

    if (allowedOrigins.includes(origin)|| !origin){
      callback(null,true);

    }
    else{
      callback(new Error('Origin is not allowed by Cors GovCarpeta: '+origin))
    }
  }
  
}

var options = {
  swaggerOptions: {
    validatorUrl: null,
  },
};

/* SetUp MongoDB Connection*/
var mongoDB =
  "mongodb+srv://dsalcedo:davijuda01@dass.k8gzq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  dbName: 'govcarpetaDB'
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.set
db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

/*Configura app Context*/
app.use(bodyParser.json());
app.use('*',cors(corsOptions));
app.set("port", process.env.PORT || 8080);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", indexRouter);
app.use("/apis", apiRouter);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

http.createServer(app).listen(app.get("port"), "0.0.0.0", function () {
  console.log("Express server listening on port " + app.get("port"));
});
