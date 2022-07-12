


import { Category } from "./category.interface";



export interface Juguete {

    data: {
        id:number,
        nombre_juguete: string,
        fecha_publicacion: Date,
        descripcion: string,
        categorias: Category [],
        path_imagen: string
    }
}