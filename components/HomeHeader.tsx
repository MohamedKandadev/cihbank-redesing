// src/components/HomeHeader.tsx
import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';

interface HomeHeaderProps {
  onNotificationPress?: () => void;
  onMessagePress?: () => void;
  hasNotifications?: boolean;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onNotificationPress,
  onMessagePress,
  hasNotifications = true, // Set default to true for testing, change as needed
}) => {
  return (
    <View style={styles.container}>
      {/* Left space for symmetry */}
      <View style={styles.sideContainer} />

      {/* Center logo */}
      <View style={styles.centerContainer}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Right icons */}
      <View style={styles.sideContainer}>
        <View>
          <Pressable onPress={onNotificationPress} style={styles.iconButton}>
            <Image
              source={require('../assets/icons/notif.png')}
              style={styles.icon}
              tintColor="#E85412"
            />
          </Pressable>
          {hasNotifications && <View style={styles.notificationDot} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sideContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 120,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E85412',
  },
  icon: {
    width: 18,
    height: 18,
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    backgroundColor: '#E85412',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default HomeHeader;
