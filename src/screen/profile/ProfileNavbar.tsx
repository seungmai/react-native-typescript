// ProfileNavbar.tsx
import React from 'react';
import {ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import Post from './Post';
import Reels from './Reels';
import AnotherUser from './AnotherUser';

const Tab = createBottomTabNavigator();

const ProfileNavbar = () => {
  return (
    <ScrollView>
      <Container>
        <Tab.Navigator>
          <Tab.Screen
            name="Post"
            component={Post}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <NavigationImage source={require('../../assets/grid.png')} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Reels"
            component={Reels}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <NavigationImage
                    source={require('../../assets/youtube.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="AnotherUser"
            component={AnotherUser}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <NavigationImage
                    source={require('../../assets/employees.png')}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View``;

const NavigationImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export default ProfileNavbar;
