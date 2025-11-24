import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInput } from './cadastro-input';

describe('CadastroInput', () => {
  let component: CadastroInput;
  let fixture: ComponentFixture<CadastroInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
