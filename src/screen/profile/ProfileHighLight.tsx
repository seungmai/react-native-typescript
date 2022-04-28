// ProfileHighLight.tsx
import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const ProfileHighLight = () => {
  const UserStory_DATA = [
    {
      id: 'Highlight',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/rabbit.png'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/rabbit.png'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/rabbit.png'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/rabbit.png'),
    },
    {
      id: 'Highlight',
      img: require('../../assets/rabbit.png'),
    },
  ];

  return (
    <Container>
      <ScrollView horizontal={true}>
        {UserStory_DATA.map((item, index) => (
          <Contents key={index}>
            <UserImage>
              <ImageBackground
                source={item.img}
                style={{width: 60, height: 60}}
                imageStyle={{borderRadius: 50}}
              />
            </UserImage>
            <UserName>{item.id}</UserName>
          </Contents>
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  height: 120px;
`;

const Contents = styled.View`
  margin: 10px 10px;
  align-items: center;
`;

const UserImage = styled.View`
  border: 1px solid black;
  border-radius: 50px;
`;

const UserName = styled.Text`
  margin-top: 6px;
`;

export default ProfileHighLight;
