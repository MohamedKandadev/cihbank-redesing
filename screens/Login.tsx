// src/screens/Login.tsx
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={['#822F0A', '#FF8F5E', '#E85412']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../assets/images/image.png')}
            style={styles.loginImage}
            resizeMode="contain"
          />
          <Text style={styles.welcomeHeading}>Bienvenue</Text>
          <CustomInput placeholder="Utilisateur" />
          <CustomInput placeholder="Mot de Passe" secureTextEntry />
          <CustomButton
            title="Connexion"
            onPress={() => {
              navigation.replace('MainTabs');
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  loginImage: {
    height: 272,
    width: '100%',
    marginBottom: 40,
  },
  welcomeHeading: {
    textAlign: 'center',
    marginBottom: 50,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Login;
