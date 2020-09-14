import { Cliente } from './cliente';
import { Medico } from './medico';

export class Consulta {
  id: number;
  cliente: Cliente;
  medico: Medico;
  diaMarcado: Date;
  status: string;
  active: boolean;
  cliente_id: number;
  medico_id: number;
}
