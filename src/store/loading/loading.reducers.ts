import { Action, createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.actions";
import { LoadingState } from "./LoadingState";

const initialState: LoadingState ={
  show: false
}

const reducer = createReducer(
  initialState,
  on(show, () => {
    return{show: true};
  }),
  on(hide, () => {
    return {show: false};
  })
);
// export function loadingReducer(state: LoadingState | undefined, action: Action): LoadingState
export function loadingReducer(state: LoadingState, action: any){
  return reducer(state, action);
} 
