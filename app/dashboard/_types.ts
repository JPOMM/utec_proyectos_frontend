export interface ProyectoInversion {
    nombre: string;
    inversion: number;
}

export interface ProyectoFueraPresupuesto {
    nombre: string;
    inversionAcumulada: number;
    presupuestoAsignado: number;
}

export interface DatosInversion {
    inversionTotalAcumulada: number;
    promedioInversionPorProyecto: number;
    top5ProyectosPorInversion: ProyectoInversion[];
    proyectosFueraDelPresupuesto: ProyectoFueraPresupuesto[];
}
