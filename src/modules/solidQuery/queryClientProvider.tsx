import type { QueryClient } from 'react-query/types';
import { Component, createContext, useContext } from 'solid-js';

export const QueryClientContext = createContext<QueryClient>();

interface IProps {
  children: any;
  client: QueryClient;
}

export const QueryClientProvider: Component<IProps> = (props) => {
  if (!props.client) {
    throw new Error('No queryClient found.');
  }
  return (
    <QueryClientContext.Provider value={props.client}>{props.children}</QueryClientContext.Provider>
  );
};

export const useQueryClient = () => {
  return useContext(QueryClientContext);
};
