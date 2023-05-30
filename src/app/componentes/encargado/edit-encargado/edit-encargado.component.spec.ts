import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncargadoComponent } from './edit-encargado.component';

describe('EditEncargadoComponent', () => {
  let component: EditEncargadoComponent;
  let fixture: ComponentFixture<EditEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEncargadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
