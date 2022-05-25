const firebaseConfig = {
    apiKey: "AIzaSyBNvLtujrDGkdSXkr_9ofiYIMP2UekeU9c",
    authDomain: "blog-school-1d836.firebaseapp.com",
    projectId: "blog-school-1d836",
    storageBucket: "blog-school-1d836.appspot.com",
    messagingSenderId: "839000185013",
    appId: "1:839000185013:web:9efa50071db303ad5e46fc",
    measurementId: "G-03BRSCD8Q1"
};

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

const yearElement = document.getElementById('year');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const postareBtn = document.getElementById('postare-btn');
const salutare = document.getElementById('username');

let user = null;
let admins = ["RUF8jrw3cwYTOhmjqp2L31R8sV33"];

// setam bazele firebase, ne conectam la serviciu
firebase.initializeApp(firebaseConfig);

// referinta la serviciul de autentificare
const auth = firebase.auth();

const db = firebase.firestore();
//referinta la baza de date
const postariDb = db.collection('postari');

// alegem providerul de logare -> Google
const provider = new firebase.auth.GoogleAuthProvider();

loginBtn.onclick = function() {
    console.log("logare...");
    auth.signInWithPopup(provider).then(function() { window.location.reload(); })

}
logoutBtn.onclick = function() {
    auth.signOut();
    window.location.reload();
}

function isAdmin() {
    let admin;

    if (user == null)
        return false;

    admin = admins.includes(user.uid); //true sau false
    return admin;
}

function formatDate(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let result = day + "-" + month + "-" + year;
    return result;

}



auth.onAuthStateChanged(function(fuser) {
    user = fuser;
    console.log(user);
    if (user != null) {
        // logat in sistem
        logoutBtn.style.display = "block";
        loginBtn.style.display = "none";
        // numele apare cand suntem logati
        salutare.innerHTML = "Salutare, " + user.displayName;

        if (isAdmin() == true) {
            postareBtn.style.display = 'block';

        } else {
            postareBtn.style.display = 'none';
        }
    } else {
        // nu e logat in sistem
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        postareBtn.style.display = 'none';
    }
    document.querySelector('body').style.display = 'block';
})
if (yearElement) {
    let date = new Date();

    yearElement.innerHTML = date.getFullYear() + " ©";
}