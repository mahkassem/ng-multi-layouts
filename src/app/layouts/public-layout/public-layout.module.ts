import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicLayoutComponent } from './public-layout.component'
import { PublicHeaderComponent } from './public-header/public-header.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [PublicHeaderComponent, PublicLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class PublicLayoutModule {}
