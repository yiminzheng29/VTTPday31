import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerSelection, Inventory } from '../models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  @Input()
  cart: CustomerSelection[] = []

  @Output()
  onDelete = new Subject<number>()

  deleteItem(i:number) {
    console.info("To delete: ${i}")
    this.onDelete.next(i);
  }
}


