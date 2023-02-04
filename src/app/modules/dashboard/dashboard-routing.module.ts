import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardLayoutComponent } from 'src/app/layouts/dashboard-layout/dashboard-layout.component'
import { DashboardLayoutModule } from 'src/app/layouts/dashboard-layout/dashboard-layout.module'

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('./dashboard-page/dashboard-page.module').then(
        (m) => m.DashboardPageModule,
      ),
  },
  {
    path: 'orders',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DashboardLayoutModule],
})
export class DashboardRoutingModule {}
