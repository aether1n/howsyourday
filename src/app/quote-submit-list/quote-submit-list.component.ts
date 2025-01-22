import { Component } from '@angular/core';

interface QuoteSubmission {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-quote-submit-list',
  templateUrl: './quote-submit-list.component.html',
  styleUrls: ['./quote-submit-list.component.sass']
})
export class QuoteSubmitListComponent {
  userSubmissions: QuoteSubmission[] = [];

  onQuoteSubmitted(submission: QuoteSubmission) {
    this.userSubmissions.push(submission);
  }
}
