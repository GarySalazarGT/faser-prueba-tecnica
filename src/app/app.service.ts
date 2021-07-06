import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class AppService {
    constructor(

    ) { }

    public async obtenerTareas() {
        try {
            var tareas: Tarea[] = [];
            tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            tareas.push(new Tarea(2, 'Sacar la basura', 5));
            tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            tareas.push(new Tarea(5, 'Regar las plantas', 20));
            return tareas;
        } catch (error) {
            return null;
        }
    }

    public async crearTarea(object) {
        //Compiamos los registros ya existentes pero se agrega el nuevo que viene desde el formulario
        //Para retornar los datos quemados con los datos variados
        try {
            var tareas: Tarea[] = [];
            tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            tareas.push(new Tarea(2, 'Sacar la basura', 5));
            tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            tareas.push(new Tarea(5, 'Regar las plantas', 20));
            tareas.push(new Tarea(object.id, object.titulo, object.minutos));
            return tareas;
        } catch (err) {
            //En caso de error no retornamos nada y se muestra por consola el error
            console.error(err);
            return null
        }
    }

    public async eliminarTarea(id) {
        //Obtenemos nuevamente los datos quemados
        //Pasaremos un id para buscarlo dentro del array
        try {
            var tareas: Tarea[] = [];
            tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            tareas.push(new Tarea(2, 'Sacar la basura', 5));
            tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            tareas.push(new Tarea(5, 'Regar las plantas', 20));
            //Si es encontrado lo obtenemos
            let data = tareas.findIndex(tarea => tarea.id === id);
            //Lo eliminamos del array
            if (data > -1) {
                tareas.splice(data, 1);
            }
            return tareas;
        } catch (err) {
            //En caso de error no retornamos nada y se muestra por consola el error
            console.error(err);
            return null
        }
    }

    public async ordenarTareas(array) {
        try {
            //Utilizando la funcion sort, podemos hacer el fitro por tiempo, tomando en cuenta que es un arra multidimensional
            var tareas = array.sort((a,b) => a['minutos'] - b['minutos']);

            //El array ordenado es el que retornamos para ser pintado en pantalla
            return tareas;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    public async checkFavorite(object) {
        //Pasamos el objecto a marcar como destacado
        try {
            // Verificamos si dentro del objecto existe la propiedad favorite
            if (object.favorite) {
                //Si es asi lo desmarcamos
                object.favorite = false
            } else {
                //De lo contrario marcamos
                object.favorite = true
            }
        } catch (error) {
            
        }
    }
}