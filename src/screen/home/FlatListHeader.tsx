// FlatListHeader.tsx
import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const FlatListHeader = () => {
  const UserStory_DATA = [
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/rabbit.png'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
    },
    {
      id: 'pandaii',
      img: require('../../assets/panda.jpeg'),
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
      <LineStyle
        numberOfLines={1}
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 1,
        }}
      />
    </Container>
  );
};
const Container = styled.View`
  justify-content: center;
  width: 500px;
  height: 100px;
`;

const Wrap = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const Contents = styled.View`
  margin: 10px 10px;
`;

const UserImage = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px #c4c4c4;
`;

const UserName = styled.Text`
  margin-top: 6px;
  margin-left: 6px;
`;

const LineStyle = styled.Text`
  background-color: gray;
  height: 0.5px;
`;
export default FlatListHeader;
