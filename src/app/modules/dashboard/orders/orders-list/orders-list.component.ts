import { Component } from '@angular/core'

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent {
  orders = [
    {
      id: 1,
      number: '123456',
      date: '2020-01-01',
      status: 'pending',
      total: 1698,
      customer: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@test.com',
        phone: '+1234567890',
        address: '123 Main St, New York, NY 10001',
      },
      items: [
        {
          id: 1,
          name: 'Apple iPhone 11 Pro Max 256GB',
          price: 899,
          quantity: 1,
        },
        {
          id: 2,
          name: 'Google Pixel 4 XL 128GB',
          price: 799,
          quantity: 1,
        },
      ],
    },
  ]
}
