const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/user");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL:
				"https://nestinn-ly09.onrender.com/auth/google/callback",
			// callbackURL: "/auth/google/callback",
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const existingUser = await User.findOne({ googleId: profile.id });
				if (existingUser) {
					return done(null, existingUser);
				}
				const newUser = new User({
					username: profile.emails[0].value,
					googleId: profile.id,
					email: profile.emails[0].value,
					name: profile.displayName,
				});
				await newUser.save();
				done(null, newUser);
			} catch (err) {
				done(err);
			}
		},
	),
);
