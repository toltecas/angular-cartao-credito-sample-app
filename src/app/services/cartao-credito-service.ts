import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MembroFamilia } from '../models/cartao-credito.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class CartaoCreditoService {
  private readonly isProducao = environment.producao;
  
  constructor(private http: HttpClient) {}
  
  // Membros da Familia
  getMembros(): Observable<MembroFamilia[]> {
    return this.http.get<MembroFamilia[]>(`${environment.API_URL}/membros`);
  }

}
