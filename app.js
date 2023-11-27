const readlineSync = require("readline-sync");

const {mostrarListaEstudiantes} = require("./list_estudiantes")

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readlineSync.question("Ingrese la cantidad de estudiantes: ");
    const estudiantes = [];


    for (let i = 0; i < cantidadEstudiantes; i++);{

    
    const nombre = readlineSync.question("Ingrese el nombre del estudiante :");
    const edad = readlineSync.question("Ingrese la edad:");

    const estudiante = {
        nombre, 
        edad

    };;
    estudiantes.push(estudiante);
      }

   mostrarListaEstudiantes(estudiantes);   

 };


registrarEstudiantes();
