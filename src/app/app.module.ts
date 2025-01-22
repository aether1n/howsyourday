import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { QuoteSubmissionComponent } from './quote-submission/quote-submission.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteSubmitListComponent } from './quote-submit-list/quote-submit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteGeneratorComponent,
    QuoteSubmissionComponent,
    QuoteSubmitListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
