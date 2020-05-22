function nosotros(){
    window.scrollTo({
        top: 600,
        behavior: 'smooth'
    });
}

function productos(){
    window.scrollTo({
        top: 1150,
        behavior: 'smooth'
    });
}

function planes(){
    window.scrollTo({
        top: 2650,
        behavior: 'smooth'
    });
}

function subir(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "gbamio99@gmail.com",
	Password : "Suscriworld1",
	To : 'gbamio99@gmail.com',
	From : "suscriworld@gmail.com",
	Subject : "Bienvendio a SuscriWorld",
	Body : "Gracias por ser parte de SuscriWorld",
	}).then(
        message => alert("mail sent successfully")
    );
}

const usuarios = [
    {
        email: 'mali@devf.mx',
        password: 'gatitos19',
        name: 'Malinali',
    },
];

function login(){

    // obtener el email y la contraseña
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // usar un form usuarios[i].email === email && p si sí, guardar en un variable let al usuario
        let usuario;
        const tamaño = usuarios.length;
        for (var i = 0; i < tamaño; i++){
            if(usuarios[i].email === email && usuarios[i].password === password){
                usuario = usuarios[i]
            }
        
        }

        console.log(email, password);

        if(usuario){
            alert("Ya iniciaste sesión")
            //location.href = "index.html"
        } else {
            alert("Algo esta mal :(")
        }
     
            // enviar el mensaje
    // si no existe el usuario, mandar alert de que no está registrado     
}