if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
let app = express();

const mongoose = require("mongoose");
const path = require("path");
const ExpressError = require("./utils/ExpressError");

// npm packages
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./passport-setup");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Routers
const hostelsRouter = require("./routes/hostels.js");
const reviewsRouter = require("./routes/reviews.js");
const usersRouter = require("./routes/users.js");
const reservationRoutes = require("./routes/reservations");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/nestinn";
const ATLAS_DB_URL = process.env.ATLAS_DB_URL;

main()
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(ATLAS_DB_URL);
}

// Session Configuration

const store = MongoStore.create({
	mongoUrl: ATLAS_DB_URL,
	crypto: {
		secret: process.env.SECRET,
	},
	touchAfter: 24 * 3600,
});

store.on("error", (err) => {
	console.log("Error in Atlas Mongo Store", err);
});

const sessionOptions = {
	store,
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
		maxAge: 7 * 24 * 60 * 60 * 1000,
		httpOnly: true,
	},
};

app.use(cookieParser());
app.use(session(sessionOptions));
app.use(flash());

// Passport Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use(
// 	session({
// 		secret: process.env.SECRET,
// 		resave: false,
// 		saveUninitialized: false,
// 	}),
// );

app.use(passport.initialize());
app.use(passport.session());

// Middleware for flash messages & user authentication
app.use((req, res, next) => {
	res.locals.currUser = req.user;
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	next();
});

// Routes
app.use("/hostels", hostelsRouter);
app.use("/hostels/:id/reviews", reviewsRouter);
app.use("/", usersRouter);
app.use("/reservations", reservationRoutes);

app.use("/", (req, res) => {
	res.redirect("/hostels");
});

// 404 Error Handler
app.all("*", (req, res, next) => {
	next(new ExpressError(404, "Page Not Found!"));
});

// Global Error Handler
app.use((err, req, res, next) => {
	console.log(err);
	let { statusCode = 500, message = "Something Went Wrong!" } = err;
	res.status(statusCode).render("error.ejs", { message });
});

// Start Server
app.listen(3000, () => {
	console.log("Server running on port 3000");
});
