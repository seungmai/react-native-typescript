// ShopNavigation.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Shop from '../screen/shop/Shop';

// Stack Navigator
const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
