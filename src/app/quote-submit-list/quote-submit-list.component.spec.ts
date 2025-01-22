import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSubmitListComponent } from './quote-submit-list.component';

describe('QuoteSubmitListComponent', () => {
  let component: QuoteSubmitListComponent;
  let fixture: ComponentFixture<QuoteSubmitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteSubmitListComponent]
    });
    fixture = TestBed.createComponent(QuoteSubmitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
