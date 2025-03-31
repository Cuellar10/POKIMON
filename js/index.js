function Loguear (){
  let username = document.getElementById('Username').value

    let password = document.getElementById('Clave').value
        if(username='Andres' && password =='123456'){                                                                
            alert('Usuario válido')
            localStorage.setItem("usuarioValido", "true")
            window.location.href = "../index.html";
        }else{  
            alert('Usuario incorrecto')
        }   
}