//ANIMACION PARA AGREGAR EL APARTADO DE REGISTRO
// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//  });


 function login(event) {
    event.preventDefault(); 

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Validación de nombre de usuario y contraseña (para ejemplo)
    if (username === "root" && password === "1234") {
      alert("Inicio de sesión exitoso!");
      window.location.href = "/html/index.html"; // Redirige a index.html
    } else {
      alert("Nombre de usuario o contraseña incorrectos. ¡Inténtalo de nuevo!");
      location.reload(); // Recarga la página
    }
  }