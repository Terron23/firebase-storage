
  $(document).ready(function(){
  const config = {
    apiKey: "AIzaSyAZDqIo30PmyB-DM_VRzGdbwUj4mRy1OeY",
    authDomain: "login-798ee.firebaseapp.com",
    databaseURL: "https://login-798ee.firebaseio.com",
    projectId: "login-798ee",
    storageBucket: "login-798ee.appspot.com",
    messagingSenderId: "837937485461"
  };

  
  firebase.initializeApp(config);

const input = $("#filebutton")

$(input).change((a)=>{
var file = a.target.files[0]

var uploadNow = firebase.storage().ref('\images'+file.name);

// Points to 'images'
var imagesRef = uploadNow.child('images');
console.log(file.name)
var progress = uploadNow.put(file).then(()=>{
  alert(file.name +" has uploaded sucessfully")
})


})
  
$("#submit").click((event)=>{
event.preventDefault();
const email = $("#email").val(); 
const first = $("#first").val(); 
const message = $("#message").val(); 
const phone = $("#phone").val();  
const input = $("#input").val(); 
console.log(email, first, message, phone);
 
  firebase.database().ref(first +' sent a message').push({
    message,
    email,
    phone,

 })
   if(message.length > 0) {
     $("#message").val(' '); 
     alert("Message Sent Successfully");
     
   }

})


});

