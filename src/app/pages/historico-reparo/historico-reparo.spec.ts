import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoReparo } from './historico-reparo';

describe('HistoricoReparo', () => {
  let component: HistoricoReparo;
  let fixture: ComponentFixture<HistoricoReparo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoReparo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoReparo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
