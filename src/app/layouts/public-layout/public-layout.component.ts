import { Component } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  template: `
  <app-public-header></app-public-header>
  <router-outlet></router-outlet>
  `
})
export class PublicLayoutComponent {

}
