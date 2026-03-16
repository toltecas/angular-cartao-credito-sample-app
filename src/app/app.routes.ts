import { Routes } from '@angular/router';
import { CartaoCreditoMovimentos } from './components/cartao-credito-movimentos/cartao-credito-movimentos';
import { App } from './app';

export const routes: Routes = [
    { path: 'movimentos', component: CartaoCreditoMovimentos }
    //{ path: '', redirectTo: '', pathMatch: 'full' }
];
