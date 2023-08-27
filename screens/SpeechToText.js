import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Voice from '@react-native-voice/voice'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function SpeechToText() {

  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");
  const [recording, setRecording] = React.useState(false);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* doctor icon */}
        <View className="flex-row justify-center mt-4" >
          <Image source={require('../assets/animations/doctor.png')} style={{ height: hp(15), width: hp(15) }} />
        </View>
        <View className="space-y-2 flex-1">
          <Text className="text-gray-700 mt-5 font-semibold ml-1" style={{ marginLeft: 10, fontSize: 20 }}>Doctor</Text>
          <View className="bg-neutral-200 rounded-3xl p-4 justify-center" style={{ height: hp(58) }}>
            <Image  source={require('../assets/images/doc1.png')} style={{height:400,width:350}} resizeMode="contain"/>
          </View>
        </View>
        <View className="flex justfy-center items-center ">
          {
            recording ? (
              <TouchableOpacity>
                <Image className="rounded-full items-center mb-9" source={require('../assets/animations/voiceLoading.gif')} style={{ width: hp(10), height: hp(10) }} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image className="rounded-full mb-9" source={require('../assets/animations/recordingIcon.png')} style={{ width: hp(10), height: hp(10) }} />
              </TouchableOpacity>
            )
          }
          <TouchableOpacity className="bg-neural-400 rounded-3xl p-2 absolute right-10">
          <Image className="rounded-full " source={require('../assets/animations/icon.png')} style={{ width: hp(7), height: hp(7) }} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-neural-400 rounded-3xl p-2 absolute left-10">
          <Image className="rounded-full " source={require('../assets/animations/chatgptIcon.png')} style={{ width: hp(7), height: hp(7) }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

