
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

  const hide = {
    email: '',
    password: ''
  }
  
  firebase.initializeApp(config);

   
   firebase.auth().onAuthStateChanged(function(user) {
    ///.
    alert(user.email)
   $("#hideMe").addClass("hidden");
   $(".create").addClass("hidden");
 $( "#reveal" ).fadeIn( "fast", function() {
   
  });
  $("#logout").removeClass("hidden");
});

$("#forgot").click(()=>{
 
   function sendPasswordReset() {
      var email = document.getElementById('email').value;
      if(email.length < 1) {
        var t = prompt('Whats your email?')
        email = t
      }
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
    sendPasswordReset()
});

$("#logout").click(()=>{
 var t = confirm("Are you sure you want to Log out")
 if(t === false) {
   return false;
 } 
firebase.auth().signOut().then(function() {
  // Sign-out successful.

  location.href = "signup.html"

}, function(error) {
  // An error happened.
});
})
  
$("#submit").click((event)=>{
event.preventDefault();
const email = $("#email").val() || hide.email; 
const first = $("#first").val(); 
const message = $("#message").val(); 
const phone = $("#phone").val(); 
const password = $("#password").val() || hide.password; 
console.log(email)
 
       
firebase.auth().signInWithEmailAndPassword(email, password)
.then(user => {
 $("#hideMe").addClass("hidden");
 $( "#reveal" ).fadeIn( "slow", function() {
    // Animation complete
  });
  firebase.database().ref(first +' sent a message').push({
    message,
    phone,

 })
   if(message.length > 0) {
     $("#message").val(' '); 
     alert("Message Sent Successfully");
     
   }
 
}).catch(function(error){
  alert(error + ' ' + '')
   //$("#email").append("<span style='color:red'>"+error+"</span>");
    console.log(error);
})
return false;
});

  });