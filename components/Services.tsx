import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Services = () => {
  const services = [
    {id: 1, name: 'Eau', icon: require('../assets/icons/eau.png')},
    {id: 2, name: 'Électricité', icon: require('../assets/icons/elect.png')},
    {id: 3, name: 'Assurance', icon: require('../assets/icons/assu.png')},
    {id: 4, name: 'Plus', icon: require('../assets/icons/plus.png')},
  ];

  return (
    <View style={styles.container}>
      {services.map(service => (
        <TouchableOpacity key={service.id} style={styles.serviceBox}>
          <View style={styles.iconContainer}>
            <Image
              source={service.icon}
              style={[styles.icon, {resizeMode: 'contain'}]}
              tintColor="#E85412"
            />
          </View>
          <Text style={styles.serviceName}>{service.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  serviceBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E85412',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    maxWidth: 20,
    height: 20,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E85412',
  },
});

export default Services;
