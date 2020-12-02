import { useReducer, useContext } from 'react';
import listsReducer from '../lib/reducers/listsReducer';

const { createContext } = require('react');

const listsContext = createContext();

export function ProvideLists({ children }) {
  const lists = useProvideLists();
  return (
    <listsContext.Provider value={lists}>{children}</listsContext.Provider>
  );
}

export const useLists = () => {
  return useContext(listsContext);
};

const initialState = {
  name: null,
  content: null,
  type: null,
  isTask: false,
};

function useProvideLists() {
  const [state, dispatch] = useReducer(listsReducer, initialState);
  return {
    name: state.name,
    content: state.content,
    type: state.type,
    isTask: state.isTask,
    dispatch,
  };
}
