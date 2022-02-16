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
  //Escribe tu código aquí. Pongo varias soluciones en comentarios:
  //return Object.entries(objeto);
  let array = [];
  for (let clave in objeto) {
    array.push([clave, objeto[clave]]);
  };
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //let objeto = {};
  //for (let i=0; i< string.length; i++) {
    //if (objeto.hasOwnProperty(string[i])) {
      //objeto[string[i]] += 1;
    //} else objeto[string[i]] = 1;
  //};
  //return objeto;
//}
  let objeto = {};

  for (let i=0; i<string.length; i++) {
    if (Object.keys(objeto).includes(string[i])) {
      objeto[string[i]] += 1;
      continue;
    }
    objeto[string[i]] = 1;
  };
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = [];
  let minusculas = [];
  for (let i=0; i< s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas.push(s[i]);
    } else minusculas.push(s[i])
  };
  return mayusculas.concat(minusculas).join("");
}
//tambien se puede hacer con strings vacios en vez de mayuscula[], minuscula []
// renglon bjo el if como no es array, no puede pushear, entonces hace
//mayus y minus +=s[i];
//pero el final de la funcion cambia el return:
//return string.concat(""; string2);

//otro hace la ultima linea mas facil. return mayus + minus;

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  return str.split(" ").map(function(palabra){
    return palabra.split("").reverse().join("");
  }).join(" ");
} 

//otro lo guarda en un variable:
//var invertida = str.split(" ").map(function(elemento) {
//  return elemento.split("").reverse.join("");
//});
// return invertida.join(" ");

//console.log(asAmirror("The Henry Challenge is close!"));

// este funcionaria si no tuviera los espacios el string a devolver!
  //if (str === "") // This is the terminal case that will end the recursion
    //return "";
  
  //else
    //return asAmirror(str.substr(1)) + str.charAt(0);
//}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero = numero.toString();
  var numero2 = "";

  numero2 = numero.split("").reverse().join("");
  if (numero === numero2) return "Es capicua";
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadena2 = "";

  for (i=0; i < cadena.length; i++) { 
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      cadena2 += cadena[i];
    }
  }
  return cadena2;
}
//otra forma de otro (notar la diferencia en el if -mientras el de arriba niega !== , el de abajo
//compara === )
//let cadena2 = "";
//
//for (i=0; i<cadena.length; i++) {
//  if (cadena[i] === "a"|| cadena[i] === "b"|| cadena[i] === "c") {
//  continue;
//  }
//  else {
//  cadena2 += cadena[i];
//  }
//}
//}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
//  let nuevoArray = arr.sort(function(a, b) {
//    return a.length - b.length;
//  });
//  return nuevoArray;
//}
var cambio = true;
while (cambio) {
  cambio = false;
  for (i=0; i< arr.length-1; i++) {
    if (arr[i].length > arr[i+1].length) {
      var aux = arr[i];
      arr[i] = arr[i+1];
      arr [i+1] = aux;
      cambio = true;
    }
  }
}
return arr;
}

//console.log(sortArray(["abc", "ab", "a", "abcde", "ab", "abcdefg"]));

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
   let arreglo = [];

   for (let i=0; i<arreglo1.length; i++) {
     for (let j=0; j<arreglo2.length; j++) {
       if (arreglo1[i] === arreglo2[j]) {
         arreglo.push(arreglo1[i]);
       }
     }
   };
   return arreglo;
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

