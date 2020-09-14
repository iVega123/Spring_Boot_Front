import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsultaComponent } from './update-consulta.component';

describe('UpdateConsultaComponent', () => {
  let component: UpdateConsultaComponent;
  let fixture: ComponentFixture<UpdateConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
