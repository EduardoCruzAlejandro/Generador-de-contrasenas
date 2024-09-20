

let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let parrafo = document.getElementById('parrafo');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,<.>/?';

document.getElementById('limpiar').style.display= "none"; //ocultar boton limpiar
document.getElementById('copy').style.display= "none";

function generator(){
    
let num = (parseInt(cantidad.value));

    if(num<8){
        alert("No cumple con el minimo");
    }
    else{
     let password='';

        for(let i=1; i<=num;i++){

            let cacterAleatorio = cadenaCaracteres[Math.floor(Math.random()*cadenaCaracteres.length)];
            password+=cacterAleatorio;
        }
        
        contrasena.value=password;//mostramos contrasena en pantalla
        document.getElementById('limpiar').style.display= "flex"; //mostrar boton limpiar
        document.getElementById('copy').style.display= "flex";
        fuerte(contrasena);//determinamos que la contrasena sea fuerte o devil
    }

}

function fuerte(){
    //constantes para evaluar que contenga cada caracteristica de una contra fuerte
    const longitudMinima = 8;
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    const tieneNumero = /\d/;
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;

    
    let contra=document.getElementById('contrasena').value;
    let elementoHTML = document.querySelector('#parrafo'); //seleccionamos el elemento donde ira el texto

    if(contra.length < longitudMinima) {
        elementoHTML.innerHTML = "Contrasena devil, demasiado corta, minimo 12 caracteres";
        return;
    }
    if (!tieneMayuscula.test(contra)) {
        generator();//volvemos a genera contrasenas
        return;       
    }
    if (!tieneMinuscula.test(contra)) {
        generator();//volvemos a genera contrasenas
        return; 
    }
    if (!tieneNumero.test(contra)) {
        generator();//volvemos a genera contrasenas
        return; 
    }
    if (!tieneCaracterEspecial.test(contra)) {
        generator();//volvemos a genera contrasenas
        return; 
    }
    //console.log("contrasena fuerte");
    
    elementoHTML.innerHTML = "Contrasena fuerte"; //se imprime el texto en elemento seleccionado

}

//funcion para limpiar contenedores
function limpiar(){
    document.querySelector('#contrasena').value ='';//borramos la contrasena
    document.querySelector('#cantidad').value = '';//borramos la cantidad
    document.getElementById('limpiar').style.display= "none"; //ocultar otra vez boton limpiar
}
//funcion copiar del boton copy
function copiar() { 

    let text=contrasena.value; //camputaramos la contra
    navigator.clipboard.writeText(text).then(() => {  //usamos el API clipboard y usamos una promise 
        alert('Texto copiado al portapapeles'); //mandamos un alert que se ha copiado en el porta papeles
    })
}

