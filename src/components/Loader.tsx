// Loader.tsx
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size={'large'} color={'#111111'} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Loader;
