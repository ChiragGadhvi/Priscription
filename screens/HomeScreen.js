import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
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
      <Text style={styles.text}>Features</Text>
      <View >
      <TouchableOpacity onPress={() => navigation.navigate('SpeechToText')} style={styles.reset}>
        <Image source={require('../assets/animations/text-to-speech.png')}  style={{height: 45,width: 45}}/>
        <Text style={{padding: 10, fontSize: 15}}>Speech To Text</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ImgToDoc')} style={styles.reset2}>
      <Image source={require('../assets/animations/bill.png')}  style={{height: 45,width: 45}}/>
        <Text style={{padding: 10, fontSize: 15}}>Image to Document</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.reset3}>
      <Image source={require('../assets/animations/idea.png')}  style={{height: 45,width: 45}}/>
        <Text style={{padding: 10, fontSize: 15}}>About App</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'lightblue'
  },
  lottie: {
    width: width*0.9,
    height:width
  },
  text: {
    fontSize: width*0.06,
    marginBottom: 20,
  },
  reset: {
    backgroundColor: '#68D391',
    padding: 20,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  reset2: {
    backgroundColor: '#B794F4',
    padding: 20,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  reset3: {
    backgroundColor: '#F87171',
    padding: 20,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    flexDirection: 'row'
  }
})