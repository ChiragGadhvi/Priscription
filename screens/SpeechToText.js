import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SpeechToText() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.temp1}>
        {/* doctor icon */}
        <View style={styles.temp2}>
          <Image source={require('../assets/animations/doctor.png')} style={styles.temp3} />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  temp1: {
    flex: 1,
    marginLeft: 1.25
  },
  temp2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temp3:{
    marginTop: 10,
    height: 150,
    width: 150
  }
})