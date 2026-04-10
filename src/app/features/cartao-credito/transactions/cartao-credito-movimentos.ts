import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembrosFamilia } from '../../membros-familia/models/membros-familia.model';
import { CartaoCreditoService } from '../cartao-credito-service';

@Component({
  selector: 'app-cartao-credito-movimentos',
  imports: [ReactiveFormsModule],
  templateUrl: './cartao-credito-movimentos.html',
  styleUrl: './cartao-credito-movimentos.css',
})
export class CartaoCreditoMovimentos implements OnInit{
  
  cartaoCreditoForm: FormGroup;
  membrosFamilia: MembrosFamilia[] = [];

    constructor(private fb: FormBuilder, private servico: CartaoCreditoService){
      
      //Inicializa o formularios com validacao
      this.cartaoCreditoForm = this.fb.group({
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
      console.log('Passando: ', this.cartaoCreditoForm.value);
      this.servico.criarMovimentoCartao(this.cartaoCreditoForm.value).subscribe({

        next: (movimento) => {

          console.log('Successo!', movimento);
          this.cartaoCreditoForm.reset({ data: new Date().toISOString().substring(0, 10) });
        },

        error: (erro) => console.error('Erro ao criar movimentação', erro)
      });

    }
}
