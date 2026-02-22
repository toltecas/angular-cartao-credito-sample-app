import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembroFamilia, MovimentacaoCartao } from '../models/cartao-credito.model';

@Injectable({
  providedIn: 'root',
})
export class CartaoCreditoService {
  private readonly API_URL = 'http://localhost:8080/api/cartaoCredito';
  
  constructor(private http: HttpClient) {}
  
  // Membros da Familia
  getMembros(): Observable<MembroFamilia[]> {
    return this.http.get<MembroFamilia[]>(`${this.API_URL}/membros/v2/1`);
  }
  
  criarMembro(membro: MembroFamilia): Observable<MembroFamilia> {
    return this.http.post<MembroFamilia>(`${this.API_URL}/membros`, membro);
  }
  // Movimentacoes no Cartao
  getMovimentacoes(): Observable<MovimentacaoCartao[]> {
    return this.http.get<MovimentacaoCartao[]>(`${this.API_URL}/movimentacoes`);
  }

  criarMovimentacao(data: MovimentacaoCartao): Observable<MovimentacaoCartao> {
    return this.http.post<MovimentacaoCartao>(`${this.API_URL}/movimentacoes`, data);
  }
}
