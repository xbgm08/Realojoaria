import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoBuscaComponent } from './producao-busca.component';

describe('ProducaoBuscaComponent', () => {
  let component: ProducaoBuscaComponent;
  let fixture: ComponentFixture<ProducaoBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducaoBuscaComponent]
    });
    fixture = TestBed.createComponent(ProducaoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
