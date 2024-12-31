// src/screens/tabs/Home.tsx
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import BankCard from '../../components/BankCard';
import Services from '../../components/Services';
import RecentTransactions from '../../components/History';

const Home = () => {
  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        onNotificationPress={handleNotificationPress}
        hasNotifications={true}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingLabel}>Bonjour</Text>
          <Text style={styles.greetingName}>M,Mohamed Kandad</Text>
        </View>

        <BankCard cardNumber="1234567890123456" balance={12345.67} />

        <Services />

        <RecentTransactions />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  greetingContainer: {
    paddingVertical: 24,
  },
  greetingLabel: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  greetingName: {
    fontSize: 20,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Home;
