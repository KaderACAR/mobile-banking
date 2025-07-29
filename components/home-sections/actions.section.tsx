import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// stylesheet example

const actions: {
    background_color: string;
    label: string;
    icon: any;
}[] = [
    {
    background_color: "blue",
    icon: <FontAwesome5 name="money-check-alt" size={24} color="black" />,
    label: "Pay bills",
},
 {
    background_color: "green",
    icon: <MaterialIcons name="attach-money" size={24} color="black" />,
    label: "Invest",
},
 {
    background_color: "pink",
    icon: <FontAwesome5 name="money-check-alt" size={24} color="black" />,
    label: "Loans",
},
 {
    background_color: "yellow",
    icon: <Entypo name="plus" size={24} color="black" />,
    label: "More",
},
];




const ActionsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Quick Actions</Text>
      <View style={styles.card_container}>
        {actions.map((action, index) => (
        <View style={styles.card} key={index}>
            <View style={[styles.card_top, {
                backgroundColor: action.background_color
            }]} ></View>
            <Text>{action.label}</Text>
        </View>
     ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        flex: 1,
    },
    card_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },

    card_top: {},
    card: {},
    

    title: {
        fontSize: 24,
        fontWeight: "bold",
       
    }
        
})

export default ActionsSection