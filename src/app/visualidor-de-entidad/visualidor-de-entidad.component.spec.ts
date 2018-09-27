import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualidorDeEntidadComponent } from './visualidor-de-entidad.component';

describe('VisualidorDeEntidadComponent', () => {
  let component: VisualidorDeEntidadComponent;
  let fixture: ComponentFixture<VisualidorDeEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualidorDeEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualidorDeEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
