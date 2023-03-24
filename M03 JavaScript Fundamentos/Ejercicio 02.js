/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   console.log(string)

   // Tu código:
   return string;

}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   var sumados = x + y;
   console.log(sumados);
   return sumados;
}
suma(8, 7)


function resta(x, y) {
   var restas = x - y;
   console.log(restas);
   return restas;
   // Retorna el resultado de la resta.
   // Tu código:
}
resta(10, 2)

function divide(x, y) {
   var div = x / y;
   console.log(div);
   return div;
   // Retorna el resultado de su división.
   // Tu código:
}
divide(8, 4)

function multiplica(x, y) {
   var mult = x * y;
   console.log(mult);
   return mult;
   // Retorna el resultado de su multiplicación.
   // Tu código:
}
multiplica(12, 8)

function obtenerResto(x, y) {
   var modulo = x % y;
   console.log(modulo);
   return modulo;
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
}
obtenerResto(32,4)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
