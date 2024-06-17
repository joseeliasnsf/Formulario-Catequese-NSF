firebase.auth().onAuthStateChanged(function(user) {
    if (user && window.location.pathname !== '/pages/cadastro.html') {
      window.location.href = "../pages/cadastro.html";
    }
  });

function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value).then(response => {
        hideLoading()
        window.location.href = "pages/cadastro.html";
    }).catch(error => {
        hideLoading();
        alert("Email ou Senha invalidos");
        console.log('error', error)
    });
}

function registrar() {
    window.location.href = "pages/registrar.html";
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuario não encontrado";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha invalida";
    }
}

function recoverPassword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(document.getElementById('email').value).then(response => {
        hideLoading();
        alert("Email de recuperação enviado com sucesso");
    }).catch(error => {
        hideLoading();
        alert("Email ou Senha invalidos");
        console.log('error', error)
    });
}