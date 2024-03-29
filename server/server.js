const express = require("express");
var cookieParser = require("cookie-parser");
var createError = require("http-errors");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");
var loginRouter = require("./routes/login");
var profileRouter = require("./routes/profile");
var userDataRouter = require("./routes/users");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", loginRouter); 
app.use("/profile", profileRouter);
app.use("/users", userDataRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(5000, function () {
  console.log('Server is running on port 5000');
});
