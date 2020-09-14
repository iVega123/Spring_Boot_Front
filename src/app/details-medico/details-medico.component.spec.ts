import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDetailsComponent } from './details-medico.component';

describe('DetailsMedicoComponent', () => {
  let component: MedicoDetailsComponent;
  let fixture: ComponentFixture<MedicoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
