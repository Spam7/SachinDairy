import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingHomeComponent } from './billing-home/billing-home.component';
import { routes} from './routes.billing'
import { RouterModule } from '@angular/router';
import { ProductBillComponent } from '../products/product-bill/product-bill.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component'
@NgModule({
  declarations: [BillingHomeComponent,ProductBillComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"billing",
        component:BillingHomeComponent
      }
    ])
  ]
})
export class BillingModule { }
