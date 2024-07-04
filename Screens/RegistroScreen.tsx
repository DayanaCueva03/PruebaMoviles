import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://elcomercio.pe/resizer/YHELJ2GhWvoVjNIQxBPqkhZWW9Y=/640x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XVO6I5CHD5CUZGB5G57G5LVMFU.webp' }}
      style={styles.imagen}
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Dayana Cueva</Text>

        <View style={styles.container}>

          <Button title='Ingresar' onPress={() => navigation.navigate('Score')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', 
  },
  titulo: {
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '100%', 
    margin: 10,
    marginBottom: 25,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default LoginScreen;
