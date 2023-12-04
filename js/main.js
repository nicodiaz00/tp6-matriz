import { matrizPais } from "./matrices.js";
import { matrizDeCosas } from "./matrices.js";
import { matrizDosPorDos } from "./matrices.js";



//Escriba una función llamada reverseCountries, toma la matriz de países y sus ciudades, primero copia la matriz y devuelve el reverso de la matriz original.




function reverseCountries(){
    let matrizInversa = [];
    for(let i= matrizPais.length -1; i >= 0; i--){
        let array = matrizPais[i];
        matrizInversa.push(array)
    }
    return matrizInversa
}

//console.log(reverseCountries())

/*
Escriba una función que devuelva una matriz de nueve números aleatorios en
un rango de 0 a 25. Todos los números deben ser únicos.
*/

function matrizNumerica(){
    let matriz=[];
    let arrayNumero =[];
    let contador= 0;

    for(let i = 0; i <= 9; i++){ 
        function numAleatorio(){
            let numeroAleatorio = Math.floor(Math.random() * 26);
            return numeroAleatorio;
        }
        arrayNumero.push(numAleatorio());
        
        contador ++
        if(contador === 3){
            
            matriz.push(arrayNumero)
            contador = 0;
            arrayNumero=[]
            
        }
        
    }
    return matriz
}

//console.log(matrizNumerica())

/*
Escriba una función que verifique si todos los elementos de la matriz son del
mismo tipo de datos.
*/

function tipoElemento(){
    let matriz = matrizDeCosas
    for(let i = 0; i < matriz.length; i++){
        let array = matriz[i]
        for(let x = 0; x < array.length; x++){
            let elementosDelArray = array[x]
            console.log(array[x])
        }
    }
}

//tipoElemento()




function compararNumero(){
    let matrizdeNumeros=[]
    function numAleatorio(){
        let numeroAleatorio = Math.floor(Math.random() * 26);
        return numeroAleatorio;
    }
    
    let arrayDenumeros=[]
    while(arrayDenumeros.length < 9){
        let numeroRandom = numAleatorio();
        if(!arrayDenumeros.includes(numeroRandom)){
            arrayDenumeros.push(numeroRandom)
        }
    }
    for(let i=0; i< arrayDenumeros.length;i++){
        let elemento= arrayDenumeros[i]
        let array=[]
        

    }

    
    return arrayDenumeros
    
}

//console.log(compararNumero())

console.log(matrizDosPorDos[0][0])
console.log(matrizDosPorDos[0][1])
console.log(matrizDosPorDos[1][0])
console.log(matrizDosPorDos[1][1])

//CON ESTA FUNCION MUESTRO LOS ELEMENTOS QUE COMPONEN MI MATRIZ-
function recorrerMatriz(){
    let elemento;
    for(let i =0; i < matrizDosPorDos.length;i++){
        
        for(let j= 0; j < matrizDosPorDos.length;j++){
            
           elemento = matrizDosPorDos[i][j]
            console.log(elemento)
            
        }
        
    }
    
}

//recorrerMatriz()




function compararCadaElemento() {
    for (let i = 0; i < matrizDosPorDos.length; i++) {
        for (let j = 0; j < matrizDosPorDos[i].length; j++) {
            console.log("Elemento de la fila " + i + " y columna " + j + ": " + matrizDosPorDos[i][j]);
        }
    }
}

compararCadaElemento();

console.log(matrizDosPorDos[0])

console.log(matrizDosPorDos[1])

/*
Escriba una función que verifique si todos los elementos de la matriz son del
mismo tipo de datos.
*/

function tipoDedato(){
    let dato;
    let contadorNumber=0;
    let contadorString=0;
    let contadorObject=0;
    let contadorBoolean=0;
    for(let x = 0; x< matrizDeCosas.length;x++){
        for(let i= 0; i < matrizDeCosas.length; i++){
            dato=matrizDeCosas[x][i]
            
            let queDatoEs= typeof(dato)
            if(queDatoEs == 'number'){

                contadorNumber++;
            }else if(queDatoEs === 'string'){
                contadorString ++;
            }else if(queDatoEs === 'object'){
                contadorObject++
            } else if(queDatoEs === 'boolean'){
                contadorBoolean++
            }
            
            
        }
        
    }
    if(contadorNumber > 0 && contadorBoolean == 0 & contadorObject == 0 & contadorString== 0){
       return "la Matriz es numerica"
    }else if(contadorBoolean > 0 && contadorNumber == 0 & contadorObject == 0 & contadorString==0){
        return "la matriz es booleana"
    }else if(contadorString >0 && contadorBoolean == 0 && contadorObject == 0 && contadorNumber == 0){
        return "La matriz es de tipo string"
    }else if(contadorObject > 0 && contadorNumber == 0 && contadorString == 0 && contadorBoolean == 0){
        return "la matriz es de tipo objeto"
    }else{
        return "La matriz contiene distintos tipos de datos"
    }
    
           
}
//console.log(tipoDedato())

/*
Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de
colores RGB en una matriz.
*/

function arrayDeColorRgb(cantidadColores){
    function generarColor(){
        let numero = Math.floor(Math.random() * 256)
        return numero
    }
    let matrizColor=[];
    let arrayColor=[];
   

   for(let i=0; i < cantidadColores;i++){
    let color=generarColor()
    arrayColor.push(color)

    if(arrayColor.length==3){
        matrizColor.push(arrayColor)
        arrayColor=[];
    }
   }
    return matrizColor
    
}

//console.log(arrayDeColorRgb(100))


function matrizColoresRgb(cantidadDeColor){
    let matrizRgb=[];
    
    function generarColor(){
        let numero = Math.floor(Math.random() * 256)
        return numero
    }
    for(let i=0; i < cantidadDeColor;i++){
        let arrayRgb=[];
        for(let x=0; x < 3; x++){
            let color =generarColor()
            arrayRgb.push(color)
        }
        matrizRgb.push(arrayRgb)
    }
    return matrizRgb
}


//console.log(matrizColoresRgb(20))


//13. Escriba una función llamada promedio, toma un parámetro de matriz y devuelve el promedio de los elementos. Compruebe si todos los elementos de

let matrizNumero=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]

function promedio(matriz){
let numero=0;
let divisor =0;
    for(let i=0;i  <matriz.length;i ++){
        for(let x=0;x < matriz[i].length;x++){
            let elementoColumna = matriz[i][x]
            numero = numero + elementoColumna;
            divisor ++
            
        }

    }
    return numero / divisor
}
 //console.log(promedio(matrizNumero))
 
 
 /*
 Escriba una función llamada sumOfArrayItems, toma un parámetro de matriz y
devuelve la suma de todos los elementos. Compruebe si todos los elementos
de la matriz son tipos de números. Si no, dé una respuesta razonable.
*/

function sumOfArrayItems(matriz){
    let sumaElemento=0;
    for(let i=0;i< matriz.length;i++){
        for(let x=0; x< matriz[i].length;x++){
            let tipoElemento= matriz[i][x];
            if(typeof(tipoElemento) != 'number'){
                return "La matriz no se puede sumar"
            }else{
                sumaElemento = sumaElemento + tipoElemento
            }
        }
    }
    return sumaElemento
}

//console.log(sumOfArrayItems(matrizNumero))

/*
Escriba una función llamada modificarArray que tome la matriz como parámetro
y modifique el quinto elemento de la matriz y devuelva la matriz. Si la longitud
de la matriz es inferior a cinco, devuelve 'elemento no encontrado'.
*/
let matriztresXTres=[
    [1,1,1],
    [1,1,1],
    [1,1,1]
    
]

let matrizPrueba=[
    [1,2,3],

]
function modificarArray(matriz){
    let contador=0;
    for(let i=0;i <matriz.length;i++){
        for(let x=0;x < matriz[i].length;x++){
            contador++
            
        }        
    }if(contador < 5){
        return "elemento no encontrado"
    }
    else{
        contador =0;
        for(let i=0; i < matriz.length;i++){
            
            for(let x=0; x < matriz[i].length;x++){
                contador ++
                if( contador ===5){
                    matriz[i][x] = 20;
                    break;
                }
            }
        }
    }
    return matriz
    }
    



//console.log(modificarArray(matriztresXTres))

//console.log(modificarArray(matrizPrueba))


/*
Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no
*/

function isEmpty(variable){
    if (variable == undefined){
        return "variable vacia"
    }else{
        return typeof(variable)
    }
}

let variableVacia;
let variableConAlgo = 1;

console.log(isEmpty(variableVacia))

console.log(isEmpty(variableConAlgo))