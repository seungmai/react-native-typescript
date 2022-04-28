// ProfileDescription.tsx
import React from 'react';
import styled from 'styled-components/native';

const ProfileDescription = () => {
  return (
    <Container>
      <Wrap>
        <Contents>
          <UserImage
            source={require('../../assets/panda.jpeg')}
            style={{width: 100, height: 100}}
            imageStyle={{borderRadius: 50}}
          />
        </Contents>
        <Description>FEND 👨🏻‍💻</Description>
      </Wrap>
      <Contents>
        <ViewView>
          <InforMation>
            <ContentText>29</ContentText>
            <ContentText>게시물</ContentText>
          </InforMation>
          <InforMation>
            <ContentText>423</ContentText>
            <ContentText>팔로워</ContentText>
          </InforMation>
          <InforMation>
            <ContentText>322</ContentText>
            <ContentText>팔로윙</ContentText>
          </InforMation>
        </ViewView>
      </Contents>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.View``;

const Contents = styled.View`
  flex-direction: column;
  margin: 10px 10px 10px 10px;
  align-items: center;
`;

const Description = styled.Text`
  font-size: 18px;
  margin: 0px 0px 0px 8px;
`;

const UserImage = styled.ImageBackground`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 10px #c4c4c4;
`;

const ViewView = styled.View`
  flex-direction: row;
`;

const InforMation = styled.View`
  align-items: center;
`;

const ContentText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin: 0px 10px 0px 10px;
`;

export default ProfileDescription;
