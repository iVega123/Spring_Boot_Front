import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsultaComponent } from './create-consulta.component';

describe('CreateConsultaComponent', () => {
  let component: CreateConsultaComponent;
  let fixture: ComponentFixture<CreateConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
