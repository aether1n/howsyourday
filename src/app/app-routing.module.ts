import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { QuoteSubmissionComponent } from './quote-submission/quote-submission.component';
import { QuoteSubmitListComponent } from './quote-submit-list/quote-submit-list.component';

const routes: Routes = [
  { path: 'quote-generator', component: QuoteGeneratorComponent },
  { path: 'quote-submission', component: QuoteSubmissionComponent },
  { path: 'quote-submit-list', component: QuoteSubmitListComponent },
  { path: '', redirectTo: '/quote-generator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
