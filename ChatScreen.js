import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';
import contactos from './contactos';

const ChatScreen = () => {
    const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
  
    const seleccionarContacto = (contacto) => {
      setContactoSeleccionado(contacto);
    };
  
    return (
        <View style={{flex: 1}}>
          <Text style={styles.titulo}>Contactos</Text>
          <ScrollView
            contentContainerStyle={{ paddingBottom: '5%' }}
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
                    <Text style={styles.nombre}>{item.nombre}</Text>
                    <Text style={styles.telefono}>{item.telefono}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </ScrollView>
        </View>
      );
  };
  

  const styles = StyleSheet.create({
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft: 20,
      marginTop: '10%',
      marginBottom: 8,
    },
    lista: {
      padding: 16,
    },
    contacto: {
      marginBottom: 16,
      padding: 16,
      backgroundColor: '#ffffff',
      borderRadius: 8,
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
    nombre: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    telefono: {
      fontSize: 16,
      marginBottom: 4,
    },
    email: {
      fontSize: 16,
    },
  });


export default ChatScreen;
