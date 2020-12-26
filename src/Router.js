import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CategoriesScreen from './screens/categoriesScreen';
import LoginScreen from './screens/loginScreen';
import MoviesScreen from './screens/moviesScreen';
import SearchScreen from './screens/searchScreen';
import SplashScreen from './screens/splashScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName={'splash'}
        mode={'card'}>
        <Stack.Screen name={'splash'} component={SplashScreen} />
        <Stack.Screen name={'login'} component={LoginScreen} />
        <Stack.Screen name={'categories'} component={CategoriesScreen} />
        <Stack.Screen name={'movies'} component={MoviesScreen} />
        <Stack.Screen name={'search'} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
