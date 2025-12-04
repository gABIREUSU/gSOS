import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutConta } from './admin-layout-conta';

describe('AdminLayoutConta', () => {
  let component: AdminLayoutConta;
  let fixture: ComponentFixture<AdminLayoutConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayoutConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutConta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
