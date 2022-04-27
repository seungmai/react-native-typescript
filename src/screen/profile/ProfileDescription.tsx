// ProfileDescription.tsx
import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import styled from 'styled-components/native';

const ProfileDescription = () => {
  return (
    <Container>
      <UserImage>
        <ImageBackground
          source={require('../../assets/panda.jpeg')}
          style={{width: 100, height: 100}}
          imageStyle={{borderRadius: 50}}
        />
      </UserImage>

      <Contents>
        <View>
          <ContentText>게시물</ContentText>
        </View>
        <View>
          <ContentText>팔로워</ContentText>
        </View>
        <View>
          <ContentText>팔로윙</ContentText>
        </View>
      </Contents>

      <UserDescription>오늘은 당신만을 위한 날</UserDescription>
    </Container>
  );
};

const Container = styled.View`
  width: 500px;
  height: 100px;
  background-color: #111111;
`;

const Contents = styled.View`
  color: white;
  align-items: flex-end;
  flex-direction: row;
`;

const ContentText = styled.Text`
  color: white;
`;

const UserImage = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 80px 0px 0px 10px;
  background-color: white;
  box-shadow: 0px 0px 10px #c4c4c4;
`;

const UserDescription = styled.Text`
  color: white;
  font-size: 16px;
  margin: 4px 0px 0px 10px;
`;

export default ProfileDescription;
