// AnotherUser.tsx
import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const AnotherUser = () => {
  return (
    <Container>
      <Text>다른사람이양</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default AnotherUser;
