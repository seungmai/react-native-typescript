// BottomSheetProfile.tsx
import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

const BottomSheetProfile = () => {
  {
    const bottomSheet = useRef<any>();

    return (
      <SafeAreaView>
        <BottomSheet snapPoints={[]} children={undefined} />
        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <Text>Open modal</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.Button`
  width: 150px;
  height: 50px;
  background-color: black;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const TextBox = styled.Text`
  color: white;
  font-weight: 600;
`;

export default BottomSheetProfile;
