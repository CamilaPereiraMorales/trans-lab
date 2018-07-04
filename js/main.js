//con esto tomo el numero de codigo que ingrese el usuario
let input = document.querySelector('input');
function getBip(num){

        // 13 is enter
          // code for enter
          input.addEventListener("keypress",(enter)=>{
            let key = enter.which || enter.keyCode;
            if (key === 13) {
            


          fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`) 
            .then(response => response.json())
            .then(data => {
                let numeroTarjeta =[`N&ordm; tarjeta bip! `];
                let saldoTarjeta = [`Saldo  tarjeta`];
                let fechaSaldo = [`Fecha saldo`];
                
                console.log(data);
                
             })
            }
    
        })
    }
     console.log(getBip('77108068'))        
//{"N&ordm; tarjeta bip! ": "77108068", Estado de contrato: "Contrato Activo", Saldo  tarjeta: "$220", Fecha saldo: "13/06/2018 11:09"}

//Necesito guardar el correo y la clave
function guardarCorreo() {
  if((document.getElementById("login-username").value === '')) {
    alert("Reingresa tu mail")
  } else{
      let email = document.getElementById("login-username").value;
      
      localStorage.setItem("mail",email,);
  }
}

    
     
     
         
 
        
           
      
    
    