import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCreditoMovimentos } from './cartao-credito-movimentos';

describe('CartaoCreditoMovimentos', () => {
  let component: CartaoCreditoMovimentos;
  let fixture: ComponentFixture<CartaoCreditoMovimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoCreditoMovimentos],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoCreditoMovimentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
