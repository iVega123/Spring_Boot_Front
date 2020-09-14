import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsConsultaComponent } from './details-consulta.component';

describe('DetailsConsultaComponent', () => {
  let component: DetailsConsultaComponent;
  let fixture: ComponentFixture<DetailsConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
