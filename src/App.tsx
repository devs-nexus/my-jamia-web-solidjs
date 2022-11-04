import { Route, Routes } from '@solidjs/router';
import { Component, lazy } from 'solid-js';

import RootWrapper from './layout/rootWrapper';

const Home = lazy(async () => await import('./pages/home'));

const App: Component = () => {
  return (
    <RootWrapper>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </RootWrapper>
  );
};

export default App;
