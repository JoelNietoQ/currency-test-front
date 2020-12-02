import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: 'quote', component: QuoteComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: '**', redirectTo: 'quote', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
