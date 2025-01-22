import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSubmissionComponent } from './quote-submission.component';

describe('QuoteSubmissionComponent', () => {
  let component: QuoteSubmissionComponent;
  let fixture: ComponentFixture<QuoteSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteSubmissionComponent]
    });
    fixture = TestBed.createComponent(QuoteSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
