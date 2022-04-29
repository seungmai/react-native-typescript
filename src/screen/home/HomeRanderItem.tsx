// HomeRanderItem.tsx
import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const HomeRanderItem = ({item}: any) => {
  const [like, setLike] = useState<boolean>(false);
  const [bookmark, setBookMark] = useState<boolean>(false);

  const MAINHOME_PICTURE_DATA = [
    {
      img: require('../../assets/background.jpeg'),
    },
  ];

  return (
    <>
      <Container>
        <WrapOne>
          <Contents>
            <UserImage
              source={require('../../assets/panda.jpeg')}
              imageStyle={{borderRadius: 50}}
            />
            <UserName>min_lsll</UserName>
          </Contents>
        </WrapOne>
        <TouchableOpacity>
          <RightImageOne>...</RightImageOne>
        </TouchableOpacity>
      </Container>
      {MAINHOME_PICTURE_DATA.map((item, index) => (
        <ImageBackground
          source={item.img}
          key={index}
          style={{width: '100%', height: 300}}
        />
      ))}
      <ButtonView>
        <WrapOne>
          <TouchableOpacity
            onPress={() => {
              setLike(!like);
            }}>
            {like ? (
              <LeftImage source={require('../../assets/redheart.png')} />
            ) : (
              <LeftImage source={require('../../assets/heart.png')} />
            )}
          </TouchableOpacity>
        </WrapOne>
        <TouchableOpacity>
          <LeftImage source={require('../../assets/bubble.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <LeftImage source={require('../../assets/send.png')} />
        </TouchableOpacity>
      </ButtonView>
      <WrapTwo>
        <TouchableOpacity
          onPress={() => {
            setBookMark(!bookmark);
          }}>
          {bookmark ? (
            <RightImage source={require('../../assets/blackbookmark.png')} />
          ) : (
            <RightImage source={require('../../assets/bookmark.png')} />
          )}
        </TouchableOpacity>
      </WrapTwo>
      <LikeTitle>min_lsll님 외 여러명이 좋아합니다.</LikeTitle>
      <Description>min_lsll 요즘 핫한 #원밀리언 댄스 ❤️</Description>
      <Comment>댓글 7개 모두 보기</Comment>
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WrapOne = styled.View``;

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

const RightImageOne = styled.Text`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  font-size: 30px;
`;

const ButtonView = styled.View`
  flex-direction: row;
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

const WrapTwo = styled.View`
  align-items: flex-end;
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

export default HomeRanderItem;
