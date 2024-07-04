import { useState } from 'react';
import { Alert } from 'react-native';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../config/Config'; 

const Screen1 = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [color, setColor] = useState('');

  const [nick, setNick] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [edad, setEdad] = useState('');

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
    } catch (error: any) {
      handleFirebaseError(error);
    }
  };

  const guardarUsuarios = async () => {
    try {
      const usuariosCollectionRef = collection(db, 'users');
      const usuarioDocRef = doc(usuariosCollectionRef, nick);

      await setDoc(usuarioDocRef, {
        username: nick,
        email: correo,
        password: contrasena,
        age: edad
      });

      Alert.alert('Éxito', 'Usuario guardado exitosamente.');
      setNick('');
      setCorreo('');
      setContrasena('');
      setEdad('');
    } catch (error: any) {
      handleFirebaseError(error);
    }
  };

  const handleFirebaseError = (error: Error | any) => {
    if (error instanceof Error) {
      console.error('Error al interactuar con Firebase:', error.message);
      Alert.alert('Error', 'Hubo un error al interactuar con Firebase. Por favor, inténtalo de nuevo.');
    } else {
      console.error('Error desconocido al interactuar con Firebase:', error);
      Alert.alert('Error', 'Hubo un error desconocido al interactuar con Firebase. Por favor, inténtalo de nuevo.');
    }
  };

  
};

export default Screen1;
