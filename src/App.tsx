// App.tsx
import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigation from './navigation/HomeNavigation';
import SearchNavigation from './navigation/SeachNavigation';
import StreamVideoNavigation from './navigation/StreamVideoNavigation';
import ShopNavigation from './navigation/ShopNavigation';
import ProfileNavigation from './navigation/ProfileNavigation';

// Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            if (route.name === 'Home') {
              color = focused ? '#2ed6df' : '#ccc';
            } else if (route.name === 'Search') {
              color = focused ? '#2ed6df' : '#ccc';
            } else if (route.name === 'StreamVideo') {
              color = focused ? '#2ed6df' : '#ccc';
            } else if (route.name === 'Shop') {
              color = focused ? '#2ed6df' : '#ccc';
            } else if (route.name === 'Profile') {
              color = focused ? '#2ed6df' : '#ccc';
            }
            return (
              <Container>
                <Title>{route.name}</Title>
              </Container>
            );
          },
        })}>
        {/* 홈 */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <NavigationImage source={require('./assets/home.png')} />;
            },
          }}
          name="Home"
          component={HomeNavigation}
        />

        {/* 검색 */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return (
                <NavigationImage source={require('./assets/search.png')} />
              );
            },
          }}
          name="Search"
          component={SearchNavigation}
        />

        {/* 스트림비디오 */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <NavigationImage source={require('./assets/video.png')} />;
            },
          }}
          name="StreamVideo"
          component={StreamVideoNavigation}
        />

        {/* 쇼핑 */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <NavigationImage source={require('./assets/shop.png')} />;
            },
          }}
          name="Shop"
          component={ShopNavigation}
        />

        {/* 프로필 */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return (
                <NavigationImage source={require('./assets/profile.png')} />
              );
            },
          }}
          name="Profile"
          component={ProfileNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Container = styled.View``;
const Title = styled.Text``;

const NavigationImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export default App;
