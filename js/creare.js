const titleInput = document.getElementById('titlul');
const imgInput = document.getElementById('link-img');
const longInput = document.getElementById('desc-lung');
const shortInput = document.getElementById('desc-scurt');
const createBtn = document.getElementById('creare-btn');
const form = document.getElementById('creare-form');

createBtn.onclick = function(e) {
    e.preventDefault();
    // alert("ok");
    if (form.checkValidity() == false) {
        form.reportValidity();
    } else {
        let data = new Date();

        //logica de transmitere in BD

        let postare = {
            title: titleInput.value,
            img: imgInput.value,
            short: shortInput.value,
            long: longInput.value,
            likes: [],
            username: user.displayName,
            created: data.getTime()
        }

        form.reset();

        postariDb.add(postare).then(function() {
            alert("Postarea  a fost adaugata !");
            window.location = "postari.html";

        })


        alert("Postarea a fost adaugata !");

    }
}

auth.onAuthStateChanged(function(fuser) {
        if (isAdmin() == false) {
            window.location = "../index.html";
        }
    })
    // titlul
    // imagine url
    // descriere pe scurt
    // textul postarii
    // likes -> []
    // created TmesStam 1231451234432233
    // username