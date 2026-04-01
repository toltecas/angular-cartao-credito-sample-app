/**
 * Representa os Membros da Familia
 */
export interface MembrosFamilia {
  id?: number;         //Opcional gerado via Pattern Generate
  nome: string;
  relacaoFamiliar: string;     //e.x., 'Pai', 'Mae', 'Filho'
}

/**
 * Representam as Movimentacoes (Transacoes)
 */
export interface MovimentosCartao {
  id?: number;         ///Opcional gerado via Pattern Generate
  codigoMembroFamilia: number;    //FK link para MembroFamilia
  valorMovimento: number;
  dataMovimento: string | Date; // ISO string format (YYYY-MM-DD) from Spring
  descricaoMovimento: string;
}