$(document).ready(function(){
    //alert("wats up")
  const config = {
    apiKey: "AIzaSyAZDqIo30PmyB-DM_VRzGdbwUj4mRy1OeY",
    authDomain: "login-798ee.firebaseapp.com",
    databaseURL: "https://login-798ee.firebaseio.com",
    projectId: "login-798ee",
    storageBucket: "login-798ee.appspot.com",
    messagingSenderId: "837937485461"
  };
  firebase.initializeApp(config);
  
         function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      location.href = 'form.html'
      // [END sendemailverification]
    }
$("#submit").click((event)=>{
event.preventDefault();
const email = $("#email").val()  
const password = $("#password").val()
const name = $("#name").val()
const error1 = "Passwords do not match"

if(password !== $("#confirm").val()) {
    alert(error1)
}
console.log(email)
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(()=>{
    sendEmailVerification();
    alert("You have successfuly Signed up")
})
.catch(function(error){
  alert(error)
   $("#email").append("<span style='color:red'>"+error+"</span>");
    console.log(error);
})
return false;
})

  });




firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});