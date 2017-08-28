var admin = require("firebase-admin");
 var firebase = require("firebase")

  const config = {
    apiKey: "AIzaSyAZDqIo30PmyB-DM_VRzGdbwUj4mRy1OeY",
    authDomain: "login-798ee.firebaseapp.com",
    databaseURL: "https://login-798ee.firebaseio.com",
    projectId: "login-798ee",
    storageBucket: "login-798ee.appspot.com",
    messagingSenderId: "837937485461"
  };
 //console.log(firebase)
 firebase.initializeApp(config);

// Get a database reference to our posts
var db = firebase.database();
var ref = db.ref("user");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
    console.log("hey")
  console.log(snapshot);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});