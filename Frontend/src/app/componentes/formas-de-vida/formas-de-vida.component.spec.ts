import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasDeVidaComponent } from './formas-de-vida.component';

describe('FormasDeVidaComponent', () => {
  let component: FormasDeVidaComponent;
  let fixture: ComponentFixture<FormasDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormasDeVidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormasDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
