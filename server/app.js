var createError = require("http-errors");
var express = require("express");
var cors = require('cors')
const dotenv = require("dotenv") ;
dotenv.config({ path: __dirname+'/.env' });
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");



var app = express();
const connection = require("./config/db")
const bodyParser = require('body-parser')
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const multer  = require('multer')
const user = require("./models/userDetails")
const upload = multer({
storage:multer.diskStorage({
	destination:function (req,file,cb) {
		cb(null,"uploads")
	},
filename:function (req,file,cb){
 cb(null,file.fieldname+"-"+Date.now()+",jpg")
}

})

}).single("user_file")

app.post("/uploads",upload, (req,res,next)=>{

 res.status(200).send(` ${req.file.filename} file upload successfully`)

	

})

app.use("/api", indexRouter);
 
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

});
var port = 4001

app.listen(port,()=>{

	console.log(`server listening on ${port}`)
})

module.exports = app;