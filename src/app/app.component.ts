import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public tarea: Tarea;
	tareas: Tarea[];
	tareasOrdenadas: Tarea[];

	object: {};

	constructor(
		public service: AppService,
	) {
		this.tarea = new Tarea(1, '', 0);
	}

	ngOnInit() {
		this.obtenerTareas();
	}

	//Obtener todas las tareas
	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	//Crear una nueva tarea
	async onSubmit(form) {
		//Verificamos que los campos enviados coincidan con los necesarios para agregar la nueva tarea
		var id = '';
		var titulo = '';
		var minutos = '';

		//Los valores que vienen en le formulario los verificamos para asignarlos a una variable
		form._directives.map( data => {
			if (data.name == 'id') id = data.model
			if (data.name == 'titulo') titulo = data.model
			if (data.name == 'minutos') minutos = data.model
		})

		//Creamos un objecto con los datos a pasar en la funcion, ya que esta lo espera por parametros
		const newTask = {
			id,
			titulo,
			minutos
		}

		//Lo enviamos a la funcion y retornamos la nueva funcion
		this.tareas = await this.service.crearTarea(newTask);
	}

	//Eliminar una tarea
	async onDelete(form) {
		//El campo que es de tipo Hidden lo buscamos dentro del formulario
		var id = form._directives[0].model;

		//Al obtenerlo lo pasamos a la funcion, que nos retornara un nuevo array sin el seleccionado
		this.tareas = await this.service.eliminarTarea(id);
	}


	//Ordenar las tareas por los minutos
	async onOrder(array) {
		//Se pasa por parametros el array que esta en la vista ya que puede tener un elemento adicional
		this.tareas = await this.service.ordenarTareas(array)
	}

	//Marcar tareas como favoritas
	async onFavorite(object) {
		//Pasamos el objecto a marcar
		await this.service.checkFavorite(object);
	}
}
