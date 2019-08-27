import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Cards from '~/components/Cards';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header/>
      <Cards/>
      <Tabs/>
    </Container>
  );
}
