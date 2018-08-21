export class Receta {
	/*titulo: string;
	descripcion: string;
	url: string;
	abrir: boolean;*/

	/*constructor(tit, desc, url, abr) {
		this.titulo = tit;
		this.descripcion = desc;
		this.url = url;
		this.abrir = abr;
	}*/

	constructor(public titulo, public descripcion, public url, public abrir) {

	}

	reducirTexto() {
		const arr = this.descripcion.split(" ");
		const nuevoArr = arr.slice(0, 5);
		return nuevoArr.join(" ");
	}
}