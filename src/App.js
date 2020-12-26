import { configure } from 'axios-hooks';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { connect, Provider } from 'react-redux';
import axiosInstance from './api/AxiosInstance';
import store from './redux/store';
import Router from './Router';

configure({ axios: axiosInstance });

const queryClient = new QueryClient();

const RouterWithRedux = connect()(Router);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PaperProvider>
      <Provider store={store}>
        <RouterWithRedux />
      </Provider>
    </PaperProvider>
  </QueryClientProvider>
);

export default App;
