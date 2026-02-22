import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartaoCreditoService } from './services/cartao-credito.service';
import { MembroFamilia } from './models/cartao-credito.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-root',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('cartao-credito');
  usuario = 'Stone';
  transactionForm: FormGroup;
  membros: MembroFamilia[] = [];

 constructor(private fb: FormBuilder, private service: CartaoCreditoService){
      
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
      this.service.getMembros().subscribe(data => this.membros = data);
      //this.service.getMembros().subscribe((data: MembroFamilia[]) => {this.membros = data;
      //console.log(this.membros[0].nome);            
    }
    
    onSubmit(): void {
      if (this.transactionForm.valid) {
        this.service.criarMovimentacao(this.transactionForm.value).subscribe({
          next: (res) => {
            console.log('Successo!', res);
            this.transactionForm.reset({ data: new Date().toISOString().substring(0, 10) });
          },
          error: (err) => console.error('Erro ao criar movimentação', err)
        });
      }
    }
}
