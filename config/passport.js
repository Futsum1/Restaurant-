const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Student = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {  // Verify CB
  // A user has logged in via Google OAuth
  console.log(profile);
  Student.findOne({ googleId: profile.id }, function (err, student) {
    if (err) return cb(err);
    if (student) {
      return cb(null, student);
    } else {
      // We have a new student!
      const newStudent = new Student({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatar: profile.photos[0].value
      });
      newStudent.save(function (err) {
        if (err) return cb(err);
        return cb(null, newStudent);
      });
    }
  });
}));

passport.serializeUser(function(student, done) {
  done(null, student.id);
});

passport.deserializeUser(function(id, done) {
  Student.findById(id, function(err, student) {
    return done(err, student);
  });
});