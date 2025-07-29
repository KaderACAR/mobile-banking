import CardSection from '@/components/home-sections/card.section'
import React from 'react'
import { View } from 'react-native'

const Page = () => {
  return (
    <View className="" style={{ flex: 1}}>
        
        <View style={{
            height: "45%",
            borderColor: "#d3d3d3",
            borderWidth: 2,
            }}>

            <CardSection />

        </View>
        <View style={{
            flex: 1,
            borderColor: "#d3d3d3",
            borderWidth: 2,
            }}>

        </View>
        <View style={{
            height: "32%",
            borderColor: "#d3d3d3",
            borderWidth: 2,
            }}>

        </View>

    </View>
  )
}

export default Page