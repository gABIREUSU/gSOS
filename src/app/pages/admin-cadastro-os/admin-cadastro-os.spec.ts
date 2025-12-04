import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroOs } from './admin-cadastro-os';

describe('AdminCadastroOs', () => {
  let component: AdminCadastroOs;
  let fixture: ComponentFixture<AdminCadastroOs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadastroOs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadastroOs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
