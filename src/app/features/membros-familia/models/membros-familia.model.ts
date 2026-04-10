/**
 * Representa os Membros da Familia
 */
export interface MembrosFamilia {
  id?: number;         //Opcional gerado via Pattern Generate
  nome: string;
  relacaoFamiliar: string;     //e.x., 'Pai', 'Mae', 'Filho'
}