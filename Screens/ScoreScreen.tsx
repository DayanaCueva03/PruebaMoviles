import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { db } from '../config/Config';
import { collection, addDoc } from 'firebase/firestore';

const Screen1 = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [color, setColor] = useState('');

  const agregarAuto = async () => {
    try {
      const autosCollectionRef = collection(db, 'autos');
      const nuevoAuto = await addDoc(autosCollectionRef, {
        marca: marca,
        modelo: modelo,
        anio: anio,
        color: color
      });
      Alert.alert('Éxito', 'El auto se agregó correctamente.');
      setMarca('');
      setModelo('');
      setAnio('');
      setColor('');
    } catch (error) {
      handleFirebaseError(error);
    }
  };

  const handleFirebaseError = (error: any) => {
    if (error instanceof Error) {
      console.error('Error al agregar el auto:', error.message);
      Alert.alert('Error', 'Hubo un error al agregar el auto. Por favor, inténtalo de nuevo.');
    } else {
      console.error('Error desconocido al agregar el auto:', error);
      Alert.alert('Error', 'Hubo un error desconocido al agregar el auto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Agregar Auto</Text>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={(text) => setMarca(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={(text) => setModelo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Año"
        value={anio}
        onChangeText={(text) => setAnio(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={(text) => setColor(text)}
      />
      <TouchableOpacity style={styles.button} onPress={agregarAuto}>
        <Text style={styles.buttonText}>Agregar Auto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Screen1;
