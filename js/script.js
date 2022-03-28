/*
Descripción: Evalúa el login checa si contenido
Parámetros:none


*/ 

  function setLogin (){
      try {
          var user = document.getElementById("user").value;
          var pass = document.getElementById("pass").value;
          /*alert("Usuario: " + user + " password: " + pass);*/
          /*user == ""? alert("Usuario: " + user + " password: " + pass) :  alert("sawaredo");*/
          if(user == ""){
              var inputUser = document.getElementById("user");
              inputUser.classList.remove("correct-input");
              inputUser.classList.add("error-input");
          }
      } catch (error) {
          console.log(error);
      }
  }

  function correct (){
      try {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user != ""){
            var inputUser = document.getElementById("user");
            inputUser.classList.add("correct-input");
        }
          
      } catch (error) {
        console.log(error);
      }
  }

  function getValues(){
      try {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;

        if(user == "mac" && pass== "2022"){
            alert("Bienvenido!!");
        }
        
      } catch (error) {
          console.log(error);
      }
  }