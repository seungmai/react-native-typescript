// ModalBox.tsx
import React from 'react';
import styled from 'styled-components/native';
import {Modal, TouchableHighlight} from 'react-native';

const ModalBox = ({modalVisible, setModalVisible}: any) => {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <CenteredView>
        <ModalView>
          <OpenButton>프로필 편집할래?</OpenButton>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <TextStyle>닫기</TextStyle>
          </TouchableHighlight>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  background-color: black;
  border-radius: 20px;
  padding: 35px 35px 35px 35px;
  align-items: center;
`;

const OpenButton = styled.Text`
  color: white;
  text-align: center;
  margin-bottom: 15px;
`;

const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 6px;
`;

export default ModalBox;
