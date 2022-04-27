// Profile.tsx
import React, {useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {theme} from '../../theme/theme';

import ProfileDescription from './ProfileDescription';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  // 왼쪽, 오른쪽 헤더
  const ProfileHeaderLeft = () => {
    return (
      <View>
        <LeftTitle>Min_lsll</LeftTitle>
      </View>
    );
  };

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
      <Text>
        <ProfileDescription />
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}: any) => theme.background};
  align-items: center;
  justify-content: flex-start;
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
