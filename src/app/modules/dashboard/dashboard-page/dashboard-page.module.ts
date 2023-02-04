import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardPageComponent } from './dashboard-page.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardPageComponent }]),
  ],
  exports: [DashboardPageComponent],
})
export class DashboardPageModule {}
