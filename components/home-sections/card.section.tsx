import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardSection = () => {
  return (
    <View className="flex-1">
      
      <SafeAreaView>
        <View className="px-6">
          <View className="w-[32px] aspect-square bg-blue-300" ></View>
        </View>
      </SafeAreaView>

    </View>
  )
}

export default CardSection;