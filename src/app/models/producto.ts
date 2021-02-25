export class PersonaModel{
    idProducto: number;
    //Todo: agregar los campos
    estado: number;
    fechaIngreso: string;

    constructor(){
        this.estado = 1;
        this.fechaIngreso = Date.now().toString();
    }

}