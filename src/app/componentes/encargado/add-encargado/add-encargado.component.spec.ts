import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncargadoComponent } from './add-encargado.component';

describe('AddEncargadoComponent', () => {
  let component: AddEncargadoComponent;
  let fixture: ComponentFixture<AddEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncargadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
