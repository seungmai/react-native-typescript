// Post.tsx
import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const Post = () => {
  const UserStory_DATA = [
    {
      id: 'Highlight',
      img: require('../../assets/background.jpeg'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/background.jpeg'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/background.jpeg'),
    },
  ];

  return (
    <Container>
      <ScrollView horizontal={true}>
        {UserStory_DATA.map((item, index) => (
          <Contents key={index}>
            <ImageBox>
              <ImageBackground
                source={item.img}
                style={{width: 120, height: 120}}
              />
            </ImageBox>
          </Contents>
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ImageBox = styled.View`
  width: 123px;
  height: 123px;
`;

const Contents = styled.View`
  margin: 4px 4px 4px 4px;
  align-items: center;
`;

export default Post;
