// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var array = [];
  array = Object.entries(objeto);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array=[];
  array = Array.from(string);
  
  const conjunto = new Set(array);
  const unicos = [... conjunto];
  
  var cant=[];
  var sum=0;
  for(var i=0; i<unicos.length;i++){
    for(var j=0; j<array.length;j++){
      if(unicos[i]===array[j])
        sum=sum+1;
    }
    cant[i]=sum; 
    sum=0;
  }

  var objeto = {};
  for(var i=0; i<unicos.length;i++){
     objeto[unicos[i]] = cant[i]
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var final = '';
  var check='';
  var letra = '';
  var minus='';
  for(var i=0; i<s.length;i++){
    letra = s.charAt(i);
    check = letra.toUpperCase();
    if(letra === check){
      final = final + letra;
    }
    else{
      minus = minus + letra;
    }
  }
  return final + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var inv = '';
  var palabra='';
  var cadenas=[];
  var invertidas = [];
  var mirror = '';
  cadenas = str.split(" ");
  
 
  for(var i=0; i<cadenas.length;i++){
     palabra = '';
     palabra = cadenas[i];
     for(var j=palabra.length; j>=0;j--){
        inv= inv + palabra.charAt(j);
     }
    inv = inv + ' ';
    mirror = mirror + inv;
    inv='';
  }  
  
  return mirror.slice(0,mirror.length-1);
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    
  var strn ='';
  var str1='';
  var str2='';
  var inv = '';

  strn = numero.toString();

  if (strn.length % 2 == 0){
    str1 = strn.slice(0,strn.length/2);
    str2 = strn.slice(-(strn.length/2));
  }
  else{
    str1 = strn.slice(0,(strn.length-1)/2);
    str2 = strn.slice(-((strn.length-1)/2));
  }
  
  for(var j=str2.length; j>=0;j--){
    inv= inv + str2.charAt(j);
  }
  
  if(str1 === inv){
    return 'Es capicua';
  }
  else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí  

  var final = '';
  for(var i=0; i<cadena.length; i++){

       if((cadena.charAt(i) !== 'a') && (cadena.charAt(i) !== 'b') && (cadena.charAt(i) !== 'c')){
         final = final + cadena.charAt(i);
       }
  }
  return final;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var objeto = {
       palabra: '',
       longitud: 0,
  };
  
  var array=[];
  
  for (var i=0; i<arr.length ; i++){
      objeto = {};
      objeto.palabra = arr[i];
      objeto.longitud = arr[i].length;
      array.push(objeto);
  }
    
  var orden = [];
  orden = array.sort(((a, b) => a.longitud - b.longitud));

  var final = [];
  for(var i=0; i<orden.length;i++){
     final[i] = orden[i].palabra;   
  }

  return final;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = [];
  for(var i=0; i<arreglo2.length;i++){
    for(var j=0; j<arreglo1.length;j++){
      if(arreglo2[i] === arreglo1[j]){
        arreglo3.push(arreglo2[i]);
      }
    }
  }
  return arreglo3;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

