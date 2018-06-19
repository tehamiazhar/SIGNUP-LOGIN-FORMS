var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var nameInput = document.getElementById("name");
var database = firebase.database();
var auth = firebase.auth();


function signup() {
    var email = emailInput.value;
    var password = passwordInput.value;
    var name = nameInput.value;


    auth.createUserWithEmailAndPassword(email, password)
        .then(function (user) {
             return user.updateProfile({displayName : name})
            .then(function(){
                 location = "login.html"
            })
        })
        .catch(function (error) {
            alert(error.message);
        })
}

function login(){
    var email = emailInput.value;
    var password = passwordInput.value;

auth.signInWithEmailAndPassword(email,password)
.then(function(user){
    console.log(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
       location = "home.html"
})
.catch(function(error){
    alert(error.message);
})
}


///////////////////////////////********home******************///////////////////////
var auth = firebase.auth();
var usrName = document.getElementById("usrName");
var usrEmail = document.getElementById("usrEmail");
var sender = document.getElementById("sender");
var dua = document.getElementById("dua");

var currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser);
usrName.innerHTML = currentUser.displayName;
usrEmail.innerHTML = currentUser.email;
auth.onAuthStateChange(function(user){
    console.log(user);

function submit(){
    var post = {
        sender : sender.value, 
        dua : dua.value
 }
 database.ref().child('post').push(post);
 sender.value = '';
 comment.value = '';
}



