import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosyDimensionesComponent } from './ciclosy-dimensiones.component';

describe('CiclosyDimensionesComponent', () => {
  let component: CiclosyDimensionesComponent;
  let fixture: ComponentFixture<CiclosyDimensionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiclosyDimensionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiclosyDimensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
