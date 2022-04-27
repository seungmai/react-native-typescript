// SearchNavigation.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screen/search/Search';

// Stack Navigator
const Stack = createNativeStackNavigator();

const SearchNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
