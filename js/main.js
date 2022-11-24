function login(){
    usuario = document.getElementById("username").value;
    senha = document.getElementById("password").value;

    if(usuario == ""){
        alert('Digite o seu usuário!')
    }if(senha == ""){
        alert("Digite sua senha...")
    }else{
        window.location.replace("../index.html")
    }
}