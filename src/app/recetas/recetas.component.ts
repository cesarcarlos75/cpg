import { Component, OnInit } from '@angular/core';
import { Receta } from '../modelos/receta.modelo';
//import { Receta } from '../modelos/receta';



@Component({
	selector: 'app-recetas',
	templateUrl: './recetas.component.html',
	styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

	recetas: Receta[] = [];
	//receta: Receta = new Receta();
	receta: Receta;

	constructor() { }

	ngOnInit() {
		//this.receta = new Receta("", "", "", false);
		this.receta = {};
	}



	agregarReceta() {

		if (this.receta.titulo != "" && this.receta.descripcion != "" && this.receta.url != "") {
			//const receta = { titulo: this.receta.titulo, descripcion: this.receta.descripcion, url: this.receta.url, abrir: false };
			//this.recetas.push(receta);
			this.recetas.push(this.receta);

			//this.receta = new Receta("", "", "", false);
			this.receta = {};
		}



	}

	obtenerColor(): string {
		return 'rgb(255,255,0)'];
	}

	recetaColor(indice): string {
		if (indice % 2 == 0) {
			return 'gray';
		} else {
			return 'green';
		}
	}

	modthree(indice): boolean {
		if ((indice + 1) % 3 == 0) {
			return true;
		} else {
			return false;
		}
	}



}



