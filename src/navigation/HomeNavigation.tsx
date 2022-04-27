// HomeNavigation.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home/Home';

// Stack Navigator
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
