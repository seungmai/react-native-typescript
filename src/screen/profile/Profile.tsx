// Profile.tsx
import React, {useLayoutEffect, useCallback, useMemo, useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {theme} from '../../theme/theme';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import ProfileDescription from './ProfileDescription';
import ProfileEdit from './ProfileEdit';
import ProfileNavbar from './ProfileNavbar';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

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
        <TouchableOpacity
          onPress={() => {
            bottomSheetRef.current?.close();
          }}>
          <RightImage source={require('../../assets/plus.png')} />
        </TouchableOpacity>

        {/* 햄버거 버튼 */}
        <TouchableOpacity
          onPress={() => {
            bottomSheetRef.current?.snapToIndex(0);
            bottomSheetRef.current?.close();
          }}>
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

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View>
          <Text style={{textAlign: 'center'}}>Awesome 🎉</Text>
        </View>
      </BottomSheet>
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
