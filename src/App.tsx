import React from 'react';
import Container from './UI/Container/Container';
import HoC from './hoc/hoc';

const App = () => {
  return <Container />;
};

export default HoC(App);
