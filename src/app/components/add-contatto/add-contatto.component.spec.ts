import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContattoComponent } from './add-contatto.component';

describe('AddContattoComponent', () => {
  let component: AddContattoComponent;
  let fixture: ComponentFixture<AddContattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContattoComponent]
    });
    fixture = TestBed.createComponent(AddContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
