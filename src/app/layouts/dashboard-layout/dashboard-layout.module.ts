import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardLayoutComponent } from './dashboard-layout.component'
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [DashboardLayoutComponent, DashboardHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardLayoutModule {}
