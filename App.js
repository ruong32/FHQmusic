import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/screens/Home';
import Personal from './app/screens/Personal'

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home}  />
    </HomeStack.Navigator>
  );
}

const PersonalStack = createStackNavigator();
function PersonalStackScreen() {
  return (
    <PersonalStack.Navigator screenOptions={{ headerShown: false }}>
      <PersonalStack.Screen name="Personal" component={Personal}  />
    </PersonalStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Personal" component={PersonalStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
