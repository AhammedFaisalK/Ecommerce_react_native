import React from 'react';
import {Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import House from '../../assets/Icons/home.svg'
import Love from '../../assets/Icons/love.svg'
import LoveFill from '../../assets/Icons/lovefill.svg'
import User from '../../assets/Icons/user.svg'
import HouseFill from '../../assets/Icons/homefill.svg'
import Notifications from '../../assets/Icons/bell.svg'
import NotificationsFill from '../../assets/Icons/bell-fill.svg'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyCart from './MyCart';
import Signup from './Signup';
import ComingSoon from './ComingSoon';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
const Navigation = () => {
const Tab = createBottomTabNavigator();
const WelcomeStack = createNativeStackNavigator();


 const WelcomeScreenTabs = ()=>(
  <Tab.Navigator  initialRouteName="Welcome"   screenOptions={({route})=> ({
    tabBarShowLabel:false,
    tabBarStyle:[{
      backgroundColor:'#fff',
      borderTopColor: 'transparent'
    }],
      headerShown:false,
      tabBarActiveTintColor:"black",
      tabBarIcon:({focused})=> {
  
          if(route.name === "Home"){
            return  focused ? <HouseFill width={16} height={16} />
            : <House width={20} height={20} />
          } 
          else if(route.name === "Welcome"){
              return focused ? <LoveFill width={20} height={20}/> : <Love width={20} height={20}/>
          }
          else if(route.name === "User"){
              return focused ? <Image source={require('../../assets/Icons/user-fill.png')} style={{width:16,height:16}}/> : <User width={20} height={20}/>
          }
          else{
              return focused ? <NotificationsFill width={16} height={16}/> : <Notifications width={20} height={20}/>
          }
      },
  })}>
  <Tab.Screen name='Home' component={ComingSoon} />
  <Tab.Screen name='Welcome' component={WelcomeScreen}/>
  <Tab.Screen name='User' component={ComingSoon}/>
  <Tab.Screen name='Notifications' component={ComingSoon}/>
</Tab.Navigator>
 )
  return <SafeAreaProvider>
     <NavigationContainer>
     <WelcomeStack.Navigator    screenOptions={{ headerShown: false }}>
         <WelcomeStack.Screen name="WelcomeScreen" component={WelcomeScreenTabs}/>
         <WelcomeStack.Screen name="MyCart" component={MyCart}/>
         <WelcomeStack.Screen name="AddCart" component={ProductDetails}/>
         <WelcomeStack.Screen name="Checkout" component={Checkout}/>
         <WelcomeStack.Screen name="SignUp" component={Signup}/>
     </WelcomeStack.Navigator>
  </NavigationContainer>
  </SafeAreaProvider>
};

export default Navigation;