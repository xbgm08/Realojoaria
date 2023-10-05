import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoDetalheComponent } from './producao-detalhe.component';

describe('ProducaoDetalheComponent', () => {
  let component: ProducaoDetalheComponent;
  let fixture: ComponentFixture<ProducaoDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducaoDetalheComponent]
    });
    fixture = TestBed.createComponent(ProducaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
