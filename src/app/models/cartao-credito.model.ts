/**
 * Representa os Membros da Familia
 */
export interface MembroFamilia {
  id?: number;         //Opcional gerado via Pattern Generate
  nome: string;
  relacaoFamiliar: string;     //e.x., 'Pai', 'Mae', 'Filho'
}

/**
 * Representam as Movimentacoes (Transacoes)
 */
export interface MovimentacaoCartao {
  id?: number;         ///Opcional gerado via Pattern Generate
  membroId: number;    //FK link para MembroFamilia
  valorMovimento: number;
  dataMovimento: string | Date; // ISO string format (YYYY-MM-DD) from Spring
  descricaoMovimento: string;
}