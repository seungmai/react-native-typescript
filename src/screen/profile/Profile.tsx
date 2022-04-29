// Profile.tsx
import React, {useLayoutEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {theme} from '../../theme/theme';

import ProfileDescription from './ProfileDescription';
import ProfileEdit from './ProfileEdit';
import ProfileNavbar from './ProfileNavbar';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  // const [isRefresing, setIsRefresing] = useState<boolean>(false);

  // const onRefresh = () => {
  //   setTimeout(() => {
  //     setIsRefresing(false);
  //   }, 700);
  // };

  // const onEndReached = () => {
  //   console.log('1');
  // };

  // 왼쪽 헤더
  const ProfileHeaderLeft = () => {
    return (
      <View>
        <LeftTitle>min_lsll</LeftTitle>
      </View>
    );
  };

  // 오른쪽 헤더
  const ProfileHeaderRight = () => {
    return (
      <ButtonView>
        {/* 플러스 버튼 */}
        <TouchableOpacity>
          <RightImage source={require('../../assets/plus.png')} />
        </TouchableOpacity>

        {/* 햄버거 버튼 */}
        <TouchableOpacity>
          <RightImage source={require('../../assets/menu.png')} />
        </TouchableOpacity>
      </ButtonView>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => <ProfileHeaderLeft />,
      headerRight: () => <ProfileHeaderRight />,
    });
  }, [navigation]);

  return (
    <Container theme={theme}>
      {/* 프로필 정보 */}
      <ProfileDescription />

      {/* 프로필 편집 버튼 */}
      <ProfileEdit />

      {/* 프로필 TopNavbar */}
      <ProfileNavbar />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}: any) => theme.background};
`;

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

export default Profile;
