import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembrosFamilia } from '../../models/cartao-credito.model';
import { CartaoCreditoService } from '../../services/cartao-credito-service';

@Component({
  selector: 'app-cartao-credito-movimentos',
  imports: [ReactiveFormsModule],
  templateUrl: './cartao-credito-movimentos.html',
  styleUrl: './cartao-credito-movimentos.css',
})
export class CartaoCreditoMovimentos implements OnInit{
  
  movimentosCartaoCredito: FormGroup;
  membrosFamilia: MembrosFamilia[] = [];

    constructor(private fb: FormBuilder, private servico: CartaoCreditoService){
      
      //Inicializa o formularios com validacao
      this.movimentosCartaoCredito = this.fb.group({
        codigoMembroFamilia: ['', Validators.required],
        valorMovimento: [null, [Validators.required, Validators.pattern(/^-?\d+(\.\d{1,2})?$/)]],
        dataMovimento: [new Date().toISOString().substring(0, 10), Validators.required],
        descricaoMovimento: ['', [Validators.required, Validators.minLength(10)]]
      });
      
    }

    ngOnInit(): void {
      //Inicia membros. Pode-se selecionar quem faz a transacao
      this.servico.listarMembrosFamilia().subscribe(dados => this.membrosFamilia = dados);
      //console.log(this.membros[0].nome);            
    }

    criarMovimento(): void {
      console.log('Passando: ', this.movimentosCartaoCredito.value);
      this.servico.criarMovimentoCartao(this.movimentosCartaoCredito.value).subscribe({

        next: (movimento) => {

          console.log('Successo!', movimento);
          this.movimentosCartaoCredito.reset({ data: new Date().toISOString().substring(0, 10) });
        },

        error: (erro) => console.error('Erro ao criar movimentação', erro)
      });

    }
}
