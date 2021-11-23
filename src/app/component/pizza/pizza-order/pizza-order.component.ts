import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../pizza.actions';
import * as fromPizza from '../pizza.reducer';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  pizzas: Observable<any>;

  constructor(private store: Store<fromPizza.State>) { 
    this.pizzas = new Observable<any>();
  }

  ngOnInit(): void {
    this.pizzas = this.store.select(fromPizza.selectAll);
  }

  createPizza(){
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }

    this.store.dispatch(actions.Create({pizza}));
  }

  updatePizza(id: string, size: any){
    this.store.dispatch(actions.Update( size ));
  }

  deletePizza(id: string){
    this.store.dispatch(actions.Delete({id}))
  }

}
