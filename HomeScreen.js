import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native'
import React, { createElement, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import contactos from './contactos';

const HomeScreen = () => {
    const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
  
    const seleccionarContacto = (contacto) => {
      setContactoSeleccionado(contacto);
    };

    return (
        <View style={styles.container}>
          <View style={styles.container2}>
          <Image
            style={styles.image}
            source={{ uri: 'https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1704/alekseyvanin170403663/76699411-vector-de-icono-de-usuario-ilustraci%C3%B3n-de-logotipo-s%C3%B3lido-de-perfil-pictograma-aislado-en-blanco.jpg?ver=6' }}
            borderRadius={100} // cambia el valor para aumentar o disminuir la redondez
          />
          <Text style={styles.name}>John Uribe</Text>
          </View>
          
          
          <ScrollView
            contentContainerStyle={{ paddingBottom: '5%'}}
          >
            <View style={styles.lista}>
              <FlatList
                data={contactos}
                keyExtractor={contacto => contacto.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.contacto,
                      item === contactoSeleccionado && styles.contactoSeleccionado,
                    ]}

                  >
                    <View style={styles.item}>
                    <Image style={styles.image2} source={{ uri: item.image }} />
                    <View style={styles.itemDetails}>
                      <Text style={styles.itemName}>{item.marca}</Text>
                      <Text style={styles.itemPhone}>{item.placa}</Text>
                      <Text style={styles.itemEmail}>{item.descripcion}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: 20,
    },
    container2: {
      justifyContent: 'center',
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
      color: '#333',
      fontWeight: 'bold',
      fontSize:30,
      padding: 20
    },
    lista: {
      padding: 16,
    },
    contacto: {
      marginBottom: 16,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 2,
    },
    contactoSeleccionado: {
      backgroundColor: '#f0f0f0',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',

      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    image2: {
      width: 150,
      height: 150,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      marginRight: 16,
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      color: '#333',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    itemPhone: {
      fontSize: 16,
      marginBottom: 4,
    },
    itemEmail: {
      fontSize: 16,
      color: '#666',
    },
  });

export default HomeScreen