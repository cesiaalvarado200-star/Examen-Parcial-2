
// ==================================================
// EJERCICIO: GESTIÓN DE ESTUDIANTES
// SEGUNDO PARCIAL DE TYPESCRIPT
// ==================================================

// 1- Crear la interfaz Estudiante
// Define las propiedades y los tipos de datos
// que tendrá cada estudiante.

interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    nota: number;
}

// 2- Crear el arreglo tipado de estudiantes
// Estudiante[] indica que el arreglo contiene objetos
// que cumplen con la interfaz Estudiante.

let estudiantes: Estudiante[] = [
    { id: 1, nombre: "Cesia", edad: 18, nota: 9 },
    { id: 2, nombre: "Ana", edad: 19, nota: 7 },
    { id: 3, nombre: "Luis", edad: 20, nota: 5 },
    { id: 4, nombre: "Carlos", edad: 18, nota: 8 },
];

// 3- .push(): Agregar un estudiante al final del arreglo
// El nuevo estudiante se coloca después del último elemento.

estudiantes.push({
    id: 5,
    nombre: "Maria",
    edad: 21,
    nota: 10
});

// 4- .unshift(): Agregar un estudiante al inicio del arreglo
// El nuevo estudiante se coloca en la primera posición.

estudiantes.unshift({
    id: 6,
    nombre: "Pedro",
    edad: 22,
    nota: 6
});

// 5- .shift(): Eliminar el primer estudiante del arreglo
// shift() elimina el primer elemento y lo devuelve.
// Guardamos el estudiante eliminado en una variable.

const estudianteEliminadoInicio = estudiantes.shift();

console.log("Estudiante eliminado del inicio:");
console.log(estudianteEliminadoInicio);

// 6- .pop(): Eliminar el último estudiante del arreglo
// pop() elimina el último elemento y lo devuelve.

const estudianteEliminadoFinal = estudiantes.pop();

console.log("Estudiante eliminado del final:");
console.log(estudianteEliminadoFinal);

// 7- Crear un estudiante preferencial
// Declaramos un nuevo objeto que cumple con la interfaz.

const estudiantePreferencial: Estudiante = {
    id: 7,
    nombre: "Sofia",
    edad: 19,
    nota: 9
};

// .splice(): Insertar el estudiante en la posición 1
// El primer número indica el índice donde se insertará.
// El segundo número indica cuántos elementos se eliminarán.
// El 0 significa que no se eliminará ningún elemento.

estudiantes.splice(1, 0, estudiantePreferencial);

// 8- .splice(): Eliminar un estudiante por su posición
// El índice 2 corresponde a la tercera posición.
// El 1 indica que se eliminará un solo estudiante.

estudiantes.splice(2, 1);

// 9- .slice(): Obtener una copia de los dos primeros estudiantes
// El 0 indica el índice inicial.
// El 2 indica el límite final, que no se incluye.
// slice() no modifica el arreglo original.

const primerosEstudiantes: Estudiante[] = estudiantes.slice(0, 2);

console.log("Copia de los dos primeros estudiantes:");
console.log(primerosEstudiantes);

// 10- .forEach(): Mostrar el nombre y la nota de cada estudiante
// Recorre todos los elementos del arreglo y ejecuta
// una acción para cada estudiante.

console.log("Información de los estudiantes:");

estudiantes.forEach((estudiante) => {
    console.log(
        `Nombre: ${estudiante.nombre}, Nota: ${estudiante.nota}`
    );
});

// 11- .map(): Obtener únicamente los nombres
// Crea un nuevo arreglo con los nombres de los estudiantes.

const nombres: string[] = estudiantes.map(
    (estudiante) => estudiante.nombre
);

console.log("Nombres de los estudiantes:");
console.log(nombres);

// 12- .filter(): Obtener los estudiantes aprobados
// Se considera aprobado al estudiante con nota mayor
// o igual a 6.
// filter() devuelve un arreglo con las coincidencias.

const aprobados: Estudiante[] = estudiantes.filter(
    (estudiante) => estudiante.nota >= 6
);

console.log("Estudiantes aprobados:");
console.log(aprobados);

// 13- .find(): Buscar un estudiante por su ID
// Busca el primer estudiante cuyo ID sea igual a 3.
// Si no encuentra coincidencias, devuelve undefined.

const estudianteBuscado: Estudiante | undefined = estudiantes.find(
    (estudiante) => estudiante.id === 3
);

console.log("Estudiante encontrado:");
console.log(estudianteBuscado);

// 14- .reduce(): Sumar las notas de todos los estudiantes
// suma representa el acumulador.
// estudiante.nota es la nota que se suma en cada vuelta.
// El 0 es el valor inicial del acumulador.

const sumaNotas: number = estudiantes.reduce(
    (suma, estudiante) => suma + estudiante.nota,
    0
);

console.log("Suma de las notas:");
console.log(sumaNotas);

// 15- Calcular el promedio de las notas
// Dividimos la suma de las notas entre la cantidad
// de estudiantes que hay en el arreglo.
// Si el arreglo está vacío, el promedio será 0.

const promedio: number = estudiantes.length > 0
    ? sumaNotas / estudiantes.length
    : 0;

console.log("Promedio de las notas:");
console.log(promedio.toFixed(2));

// 16- Mostrar la lista final de estudiantes
// Imprimimos el arreglo después de todas las operaciones.

console.log("Lista final de estudiantes:");
console.log(estudiantes);
