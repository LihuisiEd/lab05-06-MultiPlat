import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.name}>MapScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
    },
    image: {
        marginHorizontal:50,
        marginTop:50,
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize:30,
        padding: 20
    }
  });




export default MapScreen