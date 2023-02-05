import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
  <app-dashboard-header></app-dashboard-header>
  <router-outlet></router-outlet>
`
})
export class DashboardLayoutComponent {

}
