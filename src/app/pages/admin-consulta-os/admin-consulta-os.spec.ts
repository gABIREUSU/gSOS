import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultaOs } from './admin-consulta-os';

describe('AdminConsultaOs', () => {
  let component: AdminConsultaOs;
  let fixture: ComponentFixture<AdminConsultaOs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConsultaOs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConsultaOs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
