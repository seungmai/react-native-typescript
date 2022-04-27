// HomeMain.tsx
import React from 'react';
import {ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components/native';

import HomeRanderItem from './HomeRanderItem';

const HomeMain = () => {
  const MAINHOME_DESCRIPTION = [
    {
      title: 'seungmin',
      img: '../../assets/background.jpeg',
    },
    {
      title: 'seungmin',
      img: '../../assets/background.jpeg',
    },
    {
      title: 'seungmin',
      img: '../../assets/background.jpeg',
    },
    {
      title: 'seungmin',
      img: '../../assets/background.jpeg',
    },
    {
      title: 'seungmin',
      img: '../../assets/background.jpeg',
    },
  ];

  return (
    <Container>
      {MAINHOME_DESCRIPTION.map(() => (
        <HomeRanderItem />
      ))}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  /* background-color: #fff; */
`;

export default HomeMain;
