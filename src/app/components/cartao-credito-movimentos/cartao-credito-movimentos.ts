import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembroFamilia } from '../../models/cartao-credito.model';
import { CartaoCreditoService } from '../../services/cartao-credito-service';

@Component({
  selector: 'app-cartao-credito-movimentos',
  imports: [ReactiveFormsModule],
  templateUrl: './cartao-credito-movimentos.html',
  styleUrl: './cartao-credito-movimentos.css',
})
export class CartaoCreditoMovimentos implements OnInit{
  
  transactionForm: FormGroup;
  membrosFamilia: MembroFamilia[] = [];

    constructor(private fb: FormBuilder, private servico: CartaoCreditoService){
      
      //Inicializa o formularios com validacao
      this.transactionForm = this.fb.group({
        membroId: ['', Validators.required],
        valor: [null, [Validators.required, Validators.pattern(/^-?\d+(\.\d{1,2})?$/)]],
        data: [new Date().toISOString().substring(0, 10), Validators.required],
        descricao: ['', [Validators.required, Validators.minLength(10)]]
      });
      
    }

    ngOnInit(): void {
      //Inicia membros. Pode-se selecionar quem faz a transacao
      this.servico.getMembros().subscribe(dados => this.membrosFamilia = dados);
      //console.log(this.membros[0].nome);            
    }


}
