/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {

   var alcuadrado =  Math.pow(num, 2); 
   return  alcuadrado;

   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
}

function elevarAlCubo(num) {
   var alcubo = Math.pow(num,3);
   return alcubo;
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
}

function elevar(num, exponent) {
   var alexponent = Math.pow(num,exponent);
   return  alexponent;
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
}

function redondearNumero(num) {
   var redondeado = Math.round(num);
   return redondeado;
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
}

function redondearHaciaArriba(num) {
   var enteromayor  = Math.ceil(num);
   return enteromayor;
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
}

function numeroRandom() {
   var rango= Math.random(0,1);
   return rango;   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
