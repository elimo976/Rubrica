import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiPreviewComponent } from './contatti-preview.component';

describe('ContattiPreviewComponent', () => {
  let component: ContattiPreviewComponent;
  let fixture: ComponentFixture<ContattiPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContattiPreviewComponent]
    });
    fixture = TestBed.createComponent(ContattiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
