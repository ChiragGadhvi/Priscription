import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const {width,height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
      <LottieView source={require('../assets/animations/d.json')} autoPlay loop />
      </View>
      <Text style={styles.text}>Chose any Option</Text>
      <View >
      <TouchableOpacity onPress={handleReset} style={styles.reset}>
        <Text>Speech To Text</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.reset}>
        <Text>Img to Doc</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.reset}>
        <Text>Reset</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'lightblue'
  },
  lottie: {
    width: width*0.9,
    height:width
  },
  text: {
    fontSize: width*0.06,
    marginBottom: 20
  },
  reset: {
    backgroundColor: '#34d399',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    fontWeight: 'bold'
  }
})