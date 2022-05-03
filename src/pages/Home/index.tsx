import React from 'react';
import Menu from '../../components/Menu';
import { TextEditorBlock } from '../../components/TextEditorBlock';

import { Container } from './styles';

const Home: React.FC = () => {
  return <Container>
      <Menu />
      <TextEditorBlock />
  </Container>;
}

export default Home;