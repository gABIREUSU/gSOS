import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoginCadastro } from './layout-login-cadastro';

describe('LayoutLoginCadastro', () => {
  let component: LayoutLoginCadastro;
  let fixture: ComponentFixture<LayoutLoginCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLoginCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLoginCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
