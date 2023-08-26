import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width,height} = Dimensions.get('window');

export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const handleDone = ()=>{
    navigation.navigate('Home');
    setItem('onboarded','1');
  }
  
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/a.json')} autoPlay loop />
              </View>
            ),
            title: 'Our Main Goal',
            subtitle: 'Digitalization of Prescriptions!!',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/b.json')} autoPlay loop />
              </View>
            ),
            title: 'Saves Time and Efficient',
            subtitle: 'Clean organization of documents!!',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/c.json')} autoPlay loop />
              </View>
            ),
            title: 'Doctor Friendly',
            subtitle: 'Easy to Implement',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie: {
    width: width*0.9,
    height:width
  },
})