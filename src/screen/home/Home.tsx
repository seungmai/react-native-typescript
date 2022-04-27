// Home.tsx
import React, {useLayoutEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import HomeRanderItem from './HomeRanderItem';
import {theme} from '../../theme/theme';

import FlatListHeader from './FlatListHeader';

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

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  const [isRefresing, setIsRefresing] = useState<boolean>(false);

  // 왼쪽, 오른쪽 헤더
  const HomeHeaderLeft = () => {
    return (
      <View>
        <LeftTitle>InstaGram</LeftTitle>
      </View>
    );
  };

  const onRefresh = () => {
    setIsRefresing(true);

    setTimeout(() => {
      setIsRefresing(false);
    }, 700);
  };

  const onEndReached = () => {
    console.log('1');
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <HomeRanderItem item={item} />;
  };

  const HomeHeaderRight = () => {
    return (
      <ButtonView>
        {/* 플러스 버튼 */}
        <TouchableOpacity>
          <RightImage source={require('../../assets/plus.png')} />
        </TouchableOpacity>

        {/* 하트 버튼 */}
        <TouchableOpacity>
          <RightImage source={require('../../assets/heart.png')} />
        </TouchableOpacity>

        {/* 보내기 버튼 */}
        <TouchableOpacity>
          <RightImage source={require('../../assets/send.png')} />
        </TouchableOpacity>
      </ButtonView>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => <HomeHeaderLeft />,
      headerRight: () => <HomeHeaderRight />,
    });
  }, [navigation]);

  return (
    <Container theme={theme}>
      {/* 홈 스토리 헤어 */}
      {/* <FlatListHeader /> */}

      {/* 홈 게시글 헤더 */}
      {/* <HomeMain /> */}
      <FlatList
        data={MAINHOME_DESCRIPTION}
        renderItem={renderItem}
        ListHeaderComponent={<FlatListHeader />}
        refreshControl={
          <RefreshControl refreshing={isRefresing} onRefresh={onRefresh} />
        }
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Wrap = styled.View``;

const ButtonView = styled.View`
  flex-direction: row;
`;

const LeftTitle = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

const RightImage = styled.Image`
  display: flex;
  width: 30px;
  height: 30px;
  margin: 0 6px;
`;

export default Home;
