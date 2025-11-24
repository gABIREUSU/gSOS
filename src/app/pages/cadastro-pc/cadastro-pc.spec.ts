import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPc } from './cadastro-pc';

describe('CadastroPc', () => {
  let component: CadastroPc;
  let fixture: ComponentFixture<CadastroPc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
