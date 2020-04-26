import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/screens/Home';

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home}  />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
}
