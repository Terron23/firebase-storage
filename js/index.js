
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
    alert("You can now begin Sending Messages");
   $("#hideMe").addClass("hidden");
 $( "#reveal" ).fadeIn( "slow", function() {
    // Animation complete
  });
  });
  
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
}).catch(function(error){
  alert(error)
   $("#email").append("<span style='color:red'>"+error+"</span>");
    console.log(error);
})
return false;
})

  });