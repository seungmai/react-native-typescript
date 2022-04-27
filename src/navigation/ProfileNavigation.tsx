// ProfileNavigation.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screen/profile/Profile';

// Stack Navigator
const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
