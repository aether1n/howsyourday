import { Component, EventEmitter, Output } from '@angular/core';

interface QuoteSubmission {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-quote-submission',
  templateUrl: './quote-submission.component.html',
  styleUrls: ['./quote-submission.component.sass']
})
export class QuoteSubmissionComponent {
  @Output() quoteSubmitted = new EventEmitter<QuoteSubmission>();
  newQuote: string = '';
  newAuthor: string = '';

  submitQuote() {
    if (this.newQuote && this.newAuthor) {
      const newSubmission: QuoteSubmission = {
        quote: this.newQuote,
        author: this.newAuthor
      };
      this.quoteSubmitted.emit(newSubmission);
      this.newQuote = '';
      this.newAuthor = '';
    }
  }
}

