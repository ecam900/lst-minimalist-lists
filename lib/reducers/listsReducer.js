import { INITIALIZE_IDEATE_LIST } from './listsReducerTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_IDEATE_LIST:
      return { ...state, name: action.payload, type: 'ideate' };

    default:
      return { state };
  }
};

export default reducer;
