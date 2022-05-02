// Reels.tsx
import React from 'react';
import {StyleSheet, FlatList, Image} from 'react-native';
import styled from 'styled-components/native';

const data = [
  {
    id: 1,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 2,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 3,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 4,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 5,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 6,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 7,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 8,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 9,
    img: require('../../assets/background.jpeg'),
  },
  {
    id: 10,
    img: require('../../assets/background.jpeg'),
  },
];

const Reels = () => {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => <ImageWrap source={item.img} />}
        columnWrapperStyle={styles.imageRow}
        numColumns={3}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin: auto;
`;

const ImageWrap = styled.Image`
  width: 120px;
  height: 120px;
  margin: 4px 4px 4px 4px;
`;

const styles = StyleSheet.create({
  imageRow: {
    justifyContent: 'space-between',
  },
});

export default Reels;
