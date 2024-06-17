firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        alert("Você não esta logado");
        window.location.href = "../index.html";
    }
})
