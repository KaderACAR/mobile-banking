import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardSection = () => {
  return (
    <View className="flex-1">
      
      <SafeAreaView className="flex-1">
        <View className="px-6 gap-y-4 flex-1">
          <View className="flex-row">
             {/* // avatar */}
          <View className="w-[40px] aspect-square bg-blue-500 rounded-full items-center justify-center">

            <Text className="text-white font-bold text-xl text-center" > JD</Text>
          </View>
           {/* // texts */}
          <View className="px-2 justify-between">
            <Text className="font-bold">Hello,John</Text>
            <Text className="opacity-70">Welcome Back</Text>
          </View>
          {/* // notification */}
          <View className="ml-auto bg-slate-200 aspect-square rounded-full items-center justify-center">
            <Ionicons name="notifications-outline" size={16} color="black" />
          </View>
          </View>
         {/* // card */}

        <View className="bg-blue-500 flex-1 rounded-xl">
        </View>

        </View>
      </SafeAreaView>

    </View>
  )
}

export default CardSection;