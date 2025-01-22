import { Component, OnInit } from '@angular/core';
import { RandomQuoteService } from '../random-quote.service';
import { quotes } from '../data/quotes';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.sass']
})

export class QuoteGeneratorComponent implements OnInit {
  quote!: string;
  author!: string;

  constructor(private randomQuoteService: RandomQuoteService) { }

  ngOnInit() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    if (randomQuote) {
      this.quote = randomQuote.quote;
      this.author = randomQuote.author;
    } else {
      this.quote = 'No quotes found.';
      this.author = '';
    }
  }
}
