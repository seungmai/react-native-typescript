// ProfileEdit.tsx
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import ProfileHighLight from './ProfileHighLight';

const ProfileEdit = () => {
  type EditProps = {
    edit: boolean;
    add: boolean;
  };

  const [edit, setEdit] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);

  return (
    <Container>
      <Wrap>
        <TouchableOpacity>
          <ButtonBox>
            <ButtonText
              edit={edit}
              onPress={() => {
                setEdit(true);
              }}>
              프로필 편집
            </ButtonText>
          </ButtonBox>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text
              add={add}
              style={{width: 40}}
              onPress={() => {
                setAdd(true);
              }}>
              <UserImage source={require('../../assets/adduser.png')} />
            </Text>
          </View>
        </TouchableOpacity>
      </Wrap>
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
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  align-items: center;
  text-align: center;
`;

const UserImage = styled.ImageBackground`
  width: 30px;
  height: 30px;
`;

export default ProfileEdit;
