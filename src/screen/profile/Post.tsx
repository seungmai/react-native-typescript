// Post.tsx
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Post = () => {
  return (
    <Container>
      <Text>릴스야</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default Post;
