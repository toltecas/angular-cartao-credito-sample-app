import { Routes } from '@angular/router';
import { CartaoCreditoMovimentos } from './features/cartao-credito/transactions/cartao-credito-movimentos';

export const routes: Routes = [
    { path: 'movimentos', component: CartaoCreditoMovimentos }
    //{ path: '', redirectTo: '', pathMatch: 'full' }
];
