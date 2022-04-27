// StreamVideoNavigation.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StreamVideo from '../screen/streamvideo/StreamVideo';

// Stack Navigator
const Stack = createNativeStackNavigator();

const StreamVideoNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StreamVideo" component={StreamVideo} />
    </Stack.Navigator>
  );
};

export default StreamVideoNavigation;
