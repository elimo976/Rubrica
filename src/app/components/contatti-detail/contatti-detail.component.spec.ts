import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiDetailComponent } from './contatti-detail.component';

describe('ContattiDetailComponent', () => {
  let component: ContattiDetailComponent;
  let fixture: ComponentFixture<ContattiDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContattiDetailComponent]
    });
    fixture = TestBed.createComponent(ContattiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
