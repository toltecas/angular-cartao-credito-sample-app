import { Injectable } from '@angular/core';
import { MembrosFamilia } from '../membros-familia/models/membros-familia.model';
import { MovimentosCartao } from './models/cartao-credito.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class CartaoCreditoService {
  
  private readonly isProducao = environment.producao;
  
  constructor(private http: HttpClient) {}

  // Membros da Familia
  listarMembrosFamilia(): Observable<MembrosFamilia[]> {
    return this.http.get<MembrosFamilia[]>(`${environment.API_URL}/membros-familia`);
  }

  criarMovimentoCartao(data: MovimentosCartao): Observable<MovimentosCartao> {
    return this.http.post<MovimentosCartao>(`${environment.API_URL}/movimentos`, data);
  }


}
