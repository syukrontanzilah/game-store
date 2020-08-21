import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './pages/Home'
import Live from './pages/Live'
import Profile from './pages/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo';
import styled from 'styled-components'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 10,
    //  paddingTop:10,
    // height: 55
  }
}

const ScreenNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Live":
              iconName = "game-controller";
              break;
            case "Profile":
              iconName = "user";
              break;
            default:
              iconName = "home"
              break
          }
          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={22} color={focused ? "#ffffff" : "gray"} />
            </TabBarIconContainer>
          )
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Profile" component={Profile} />


    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="App" component={ScreenNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const TabBarIconContainer = styled.View`
background-color: ${(props) => (props.focused ? "#819ee5" : "#343434")};
padding:2px 15px;
border-radius: 32px;
`
