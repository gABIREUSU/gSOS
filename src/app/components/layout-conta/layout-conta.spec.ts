import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConta } from './layout-conta';

describe('LayoutConta', () => {
  let component: LayoutConta;
  let fixture: ComponentFixture<LayoutConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutConta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
