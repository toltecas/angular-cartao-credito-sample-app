/**
 * Representam as Movimentacoes (Transacoes)
 */
export interface MovimentosCartao {
  codigoMovimento?: number;         ///Opcional gerado via Pattern Generate
  codigoMembroFamilia: number;    //FK link para MembroFamilia
  valorMovimento: number;
  dataMovimento: string | Date; // ISO string format (YYYY-MM-DD) from Spring
  descricaoMovimento: string;
}
