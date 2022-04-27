// HomeRanderItem.tsx
import React from 'react';
import {ImageBackground, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

const HomeRanderItem = () => {
  const MAINHOME_PICTURE_DATA = [
    {
      img: '../../assets/background.jpeg',
    },
  ];

  return (
    <>
      <ContainerView>
        <Wrap2>
          <Contents>
            {/* <UserImage> */}
            <UserImage
              source={require('../../assets/panda.jpeg')}
              imageStyle={{borderRadius: 50}}
            />
            {/* </UserImage> */}
            <UserName>min_lsll</UserName>
          </Contents>
        </Wrap2>
        <TouchableOpacity>
          <RightImage2>...</RightImage2>
        </TouchableOpacity>
      </ContainerView>
      {MAINHOME_PICTURE_DATA.map(item => (
        <ImageBackground
          source={require('../../assets/background.jpeg')}
          style={{width: '100%', height: 300}}
        />
      ))}
      <ButtonView>
        <TouchableOpacity>
          <LeftImage source={require('../../assets/redheart.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <LeftImage source={require('../../assets/bubble.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <LeftImage source={require('../../assets/send.png')} />
        </TouchableOpacity>
      </ButtonView>
      <Wrap>
        <TouchableOpacity>
          <RightImage source={require('../../assets/bookmark.png')} />
        </TouchableOpacity>
      </Wrap>
      <LikeTitle>min_lsll님 외 여러명이 좋아합니다.</LikeTitle>
      <Description>min_lsll 요즘 핫한 #원밀리언 댄스 ❤️</Description>
      <Comment>댓글 7개 모두 보기</Comment>
    </>
  );
};

const ButtonView = styled.View`
  flex-direction: row;
`;

const Wrap = styled.View`
  align-items: flex-end;
`;

const LeftImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 15px 8px;
`;

const RightImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: -45px 8px;
`;

const LikeTitle = styled.Text`
  margin: 0px 0px 0px 8px;
`;

const Description = styled.Text`
  margin: 0px 0px 0px 8px;
`;

const Comment = styled.Text`
  color: gray;
  margin: 0px 0px 0px 8px;
`;

const ContainerView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Wrap2 = styled.View``;

const Contents = styled.View`
  flex-direction: row;
  margin: 10px 10px;
  align-items: center;
`;

const UserImage = styled.ImageBackground`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 10px #c4c4c4;
`;

const UserName = styled.Text`
  margin-left: 6px;
  font-weight: 600;
  font-size: 16px;
`;

const RightImage2 = styled.Text`
  width: 30px;
  height: 30px;
  margin: 0 10px;

  font-size: 30px;
`;

export default HomeRanderItem;
