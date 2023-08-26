import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default function SpeechToText() {

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* doctor icon */}
        <View className="flex-row justify-center mt-4" >
          <Image source={require('../assets/animations/doctor.png')} style={{ height: hp(15), width: hp(15) }} />
        </View>
        <View className="space-y-2 flex-1">
          <Text className="text-gray-700 mt-5 font-semibold ml-1" style={{ marginLeft: 10, fontSize: 20 }}>Doctor</Text>
          <View className="bg-neutral-200 rounded-3xl p-4" style={{ height: hp(58) }}>
          </View>
        </View>
        <View className="flex justfy-center items-center ">
          <TouchableOpacity>
            <Image className="mb-10" source={require('../assets/animations/camera.png')} style={{ width: hp(7), height: hp(7) }} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-neural-400 rounded-3xl p-2 absolute right-10">
            <Image className="rounded-full " source={require('../assets/animations/icon.png')} style={{ width: hp(6), height: hp(6) }} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-neural-400 rounded-3xl p-2 absolute left-10">
            <Image className="rounded-full " source={require('../assets/animations/scan.png')} style={{ width: hp(6), height: hp(6) }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
