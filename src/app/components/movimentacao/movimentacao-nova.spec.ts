import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoNova } from './movimentacao-nova';

describe('MovimentacaoNova', () => {
  let component: MovimentacaoNova;
  let fixture: ComponentFixture<MovimentacaoNova>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentacaoNova]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentacaoNova);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
