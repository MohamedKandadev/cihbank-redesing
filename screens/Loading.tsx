import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Loading'>;

const Loading: FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Login');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: 133, height: 134}}
      />
      <Text>la banque de demain des aujourd´hui</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
