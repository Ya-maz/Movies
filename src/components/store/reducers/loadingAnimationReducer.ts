import { Reducer } from "redux";
import { SHOW_LOADING, HIDE_LOADING } from "./../actions";
import { typeHideLoading, typeShowLoading } from "./../type/actionsType";

interface typeInitial {
  loading: boolean;
}

type actions = typeHideLoading | typeShowLoading;

const initialState: typeInitial = {
  loading: false,
};

export const loadingAnimationReducer: Reducer<typeInitial, actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
