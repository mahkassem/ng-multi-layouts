import { Component } from '@angular/core'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Apple iPhone 14',
      price: 999,
      description: 'A large phone with one of the best screens',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 799,
      description: 'A great phone with one of the best cameras',
    },
    {
      id: 3,
      name: 'Dell XPS 13',
      price: 999,
      description: '',
    },
  ]
}
