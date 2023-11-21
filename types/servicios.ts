export type Servicio = {
    id: number;
    nombre: string;
    descripcion: string;
    url: string;
    sort_index: number;
    is_active: boolean;
  };

  export type CatalogoConsultaMedica = {
    id: number;
    nombre: string;
    descripcion: string;
    descripcion_larga: string;
    costo: boolean;
  };