import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlmacenComponent } from './add-almacen.component';

describe('AddAlmacenComponent', () => {
  let component: AddAlmacenComponent;
  let fixture: ComponentFixture<AddAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
