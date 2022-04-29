// ProfileEdit.tsx
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ProfileHighLight from './ProfileHighLight';
import ModalBox from '../../components/ModalBox';

const ProfileEdit = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Container>
      <Wrap>
        {/* 모달 */}
        <ModalBox
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        <TouchableOpacity>
          <ButtonBox>
            <ButtonText
              onPress={() => {
                setModalVisible(true);
              }}>
              프로필 편집
            </ButtonText>
          </ButtonBox>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text
              style={{width: 40}}
              onPress={() => {
                setAdd(true);
              }}>
              <UserImage source={require('../../assets/adduser.png')} />
            </Text>
          </View>
        </TouchableOpacity>
      </Wrap>

      {/* 프로필 하이라이트 */}
      <ProfileHighLight />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

const Wrap = styled.View`
  flex-direction: row;
  margin: 10px;
`;

const ButtonBox = styled.View`
  width: 330px;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
`;

const ButtonText = styled.Text`
  margin: auto 0;
  font-size: 16px;
  align-items: center;
  text-align: center;
`;

const UserImage = styled.ImageBackground`
  width: 30px;
  height: 30px;
`;

export default ProfileEdit;
