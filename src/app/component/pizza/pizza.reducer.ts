import * as actions from './pizza.actions';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';


export interface Pizza{
    id: string;
    size: string;
}

export const pizzaAdapter = createEntityAdapter<Pizza>();
export interface State extends EntityState<Pizza>{

}

const defaultPizza = {
    ids: [''],
    entities: {
        '123':{
            id: '123',
            size: 'small'
        }
    }
}

export const initialState: State = pizzaAdapter.getInitialState(defaultPizza);

export const getPizzaState = createFeatureSelector<State>('pizza');
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = pizzaAdapter.getSelectors(getPizzaState);

export const pizzaReducer = createReducer(
    initialState,
    on(actions.Create, (state, { pizza }) => {
        return pizzaAdapter.addOne(pizza, state)
    }),
    on(actions.Update, (state, { id, changes }) => {
        return pizzaAdapter.updateOne({ id, changes }, state)
    }),
    on(actions.Delete, (state, { id }) => {
        return pizzaAdapter.removeOne(id, state)
    }),

)