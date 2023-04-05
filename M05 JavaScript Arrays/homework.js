/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];

   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return array[array.length - 1];
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}



function obtenerLargoDelArray(array) {
   return array.length;
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   var masUno = array.map((num) => { return num + 1 });
   return masUno;
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array;
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}



function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   var arreglo = palabras.join(' ')
   return arreglo;

   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   return array.includes(elemento);

   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   let suma = 0;
   arrayOfNums.forEach((num) => { return suma += num })

   return suma;
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   let suma = 0;
   resultadosTest.forEach((num) => { return suma += num })
   const largo = resultadosTest.length;
   const promedio = suma / largo;

   return promedio;

   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   let mayor = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i];
      }
   }
   return mayor;
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {
   let multiplicar = 1;
   const longitud = arguments.length;

   if (longitud === 0) {
      return 0;
   }

   for (let i = 0; i < arguments.length; i++) {
      multiplicar = multiplicar * arguments[i]
   }

   return multiplicar;
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {

   return elementosR(array);
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}
function elementosR(array) {
   let cantidad = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         cantidad.push(array[i])
      }
   }

   return cantidad.length;
}

function diaDeLaSemana(numeroDeDia) {

   return retornadia(numeroDeDia);
}
function retornadia(num) {

   const dias = [];
   dias[1] = 'Domingo';
   dias[2] = 'Lunes';
   dias[3] = 'Martes';
   dias[4] = 'Miercoles';
   dias[5] = 'Jueves';
   dias[6] = 'Viernes';
   dias[7] = 'Sabado';


   if (dias[num] == 'Sabado' || dias[num] == 'Domingo') {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }

   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana" si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}


function empiezaConNueve(num) {
   var str = num.toString();
   var numSeparada = str.split('');

   if (numSeparada[0] == 9) {
      return true;
   }

   return false;
}
// Esta función recibe por parámetro un número.
// Debe retornar true si el entero inicia con 9 y false en otro caso.
// Tu código:


function todosIguales(array) {
   let iterador = array[0];
   let res = true;
   array.forEach((elemento) => {
      if (iterador != elemento) {
         res = false;
      }
   })


   return res;
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
   const meses = ["Marzo", "Noviembre", "Enero"]

   var mesE = array.includes('Enero');
   var mesN = array.includes('Noviembre');
   var mesM = array.includes('Marzo');


   if (mesE && mesN && mesM) {
      return meses;

   }
   return "No se encontraron los meses pedidos";

   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   let multiplicar = [];
   const seis = 6;
   let resul;
   for (let i = 0; i <= 10; i++) {
      resul = seis * i
      multiplicar.push(resul)
   }

   return multiplicar;
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   let valores = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         valores.push(array[i])
      }
   }
   return valores;
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   let arreglo = [];
   let varia;

   for (let i = 0; i < 10; i++) {
      num = num + 2;
      arreglo.push(num)

      if (num == i) {
         varia = "Se interrumpió la ejecución";
         break;
      }
   }

   if (!varia) {
      varia = arreglo;
   }

   return varia;
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   let valor = [];
   for (let i = 0; i < 10; i++) {
      if (i == 5) {
         continue;
      }
      num = num + 2;
      valor.push(num)

}

return valor;

   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
