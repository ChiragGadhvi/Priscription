import {useEffect, useState } from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnBoardingScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import { getItem } from '../utils/asyncStorage.js';
import ImgToDoc from '../screens/ImgToDoc.js';
import SpeechToText from '../screens/SpeechToText.js';


const Stack = createNativeStackNavigator();


export default function AppNavigation() {

  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, [])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if (showOnboarding == null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="ImgToDoc" options={{ headerShown: false }} component={ImgToDoc} />
        <Stack.Screen name="SpeechToText" options={{ headerShown: false }} component={SpeechToText} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
