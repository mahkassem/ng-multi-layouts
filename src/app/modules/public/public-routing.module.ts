import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PublicLayoutComponent } from 'src/app/layouts/public-layout/public-layout.component'
import { PublicLayoutModule } from 'src/app/layouts/public-layout/public-layout.module'

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPageModule,
      ),
  },
  {
    path: 'products',
    component: PublicLayoutComponent,
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), PublicLayoutModule],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
