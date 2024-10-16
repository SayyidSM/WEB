// Ejercicio 1: Leer un número y mostrar si dicho número es o no es par.
function esPar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} es un número impar.`);
    }
}

// Ejercicio 2: Leer un número y mostrar su tabla de multiplicar.
function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

// Ejercicio 3: Leer dos números y realizar el producto mediante sumas.
function productoMedianteSumas(a, b) {
    let producto = 0;
    for (let i = 0; i < b; i++) {
        producto += a;
    }
    console.log(`El producto de ${a} y ${b} mediante sumas es: ${producto}`);
}

// Ejercicio 4: Leer una secuencia de n números, almacenarlos en un arreglo y mostrar la posición donde se encuentra el mayor valor leído.
function posicionMayorValor(arr) {
    let mayor = arr[0];
    let posicion = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
            posicion = i;
        }
    }
    console.log(`El mayor valor es ${mayor} y se encuentra en la posición ${posicion}`);
}

// Ejercicio 5: Dados dos vectores A y B de n elementos, obtener un arreglo C donde la posición i se almacene la suma de A[i] + B[i].
function sumaVectores(A, B) {
    let C = [];
    for (let i = 0; i < A.length; i++) {
        C[i] = A[i] + B[i];
    }
    console.log(`El arreglo C es: ${C}`);
}

// Ejercicio 6: Calcular la media de una secuencia de números proporcionado por el usuario.
function calcularMedia(arr) {
    let suma = arr.reduce((a, b) => a + b, 0);
    let media = suma / arr.length;
    console.log(`La media de los números es: ${media}`);
}

// Ejercicio 7: Dada una secuencia de números leídos y almacenados en un arreglo A mostrar dichos números en orden.
function mostrarEnOrden(arr) {
    let ordenado = arr.slice().sort((a, b) => a - b); // Usamos slice para no modificar el arreglo original
    console.log(`Los números en orden son: ${ordenado}`);
}

// Ejercicio 8: Dada una secuencia de textos proporcionados por el usuario visualizar: la longitud, en mayúsculas, en minúsculas, cada uno de ellos.
function procesarTextos(textos) {
    textos.forEach(texto => {
        console.log(`Texto: ${texto}`);
        console.log(`Longitud: ${texto.length}`);
        console.log(`En mayúsculas: ${texto.toUpperCase()}`);
        console.log(`En minúsculas: ${texto.toLowerCase()}`);
    });
}

// Ejemplos de uso de las funciones

// Ejercicio 1
esPar(4);

// Ejercicio 2
mostrarTablaMultiplicar(5);

// Ejercicio 3
productoMedianteSumas(3, 4);

// Ejercicio 4
posicionMayorValor([10, 20, 5, 40, 30]);

// Ejercicio 5
sumaVectores([1, 2, 3], [4, 5, 6]);

// Ejercicio 6
calcularMedia([10, 20, 30]);

// Ejercicio 7
mostrarEnOrden([10, 3, 5, 2, 8]);

// Ejercicio 8
procesarTextos(["Hola", "Mundo", "JavaScript"]);
