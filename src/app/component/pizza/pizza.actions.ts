import {Action } from '@ngrx/store';
import { Pizza } from './pizza.reducer';
import { createAction, props } from '@ngrx/store';

export const CREATE = '[Pizzas] Create';
export const UPDATE = '[Pizzas] Update';
export const DELETE = '[Pizzas] Delete';

export const Create = createAction( CREATE, props<{pizza: Pizza}>());
export const Update = createAction( UPDATE, props<{id: string, changes: Partial<Pizza>}>());
export const Delete = createAction( DELETE, props<{id: string}>());