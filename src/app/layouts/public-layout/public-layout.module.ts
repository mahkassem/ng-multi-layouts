import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicLayoutComponent } from './public-layout.component'
import { PublicHeaderComponent } from './public-header/public-header.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [PublicHeaderComponent, PublicLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PublicLayoutModule { }
