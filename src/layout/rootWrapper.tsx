import { Component } from 'solid-js';
import { Router } from '@solidjs/router';

import Header from './header';
import Footer from './Footer';

interface IProps {
  children: any;
}

const RootWrapper: Component<IProps> = (props) => {
  return (
    <Router>
      <Header />
      {props.children}
      <Footer />
    </Router>
  );
};

export default RootWrapper;
