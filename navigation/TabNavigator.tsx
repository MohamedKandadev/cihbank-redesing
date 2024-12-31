// src/navigation/TabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import {TabParamList} from './types';

// Tab Screens
import Home from '../screens/tabs/Home';
import Internet from '../screens/tabs/Internet';
import Transfer from '../screens/tabs/Transfer';
import Cartes from '../screens/tabs/Cartes';
import Compte from '../screens/tabs/Compte';

const Tab = createBottomTabNavigator<TabParamList>();

interface TabIconProps {
  focused: boolean;
  color: string;
}

const TabIcon: React.FC<{iconSource: any} & TabIconProps> = ({
  iconSource,
  color,
}) => <Image source={iconSource} style={styles.icon} tintColor={color} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E85412',
        tabBarInactiveTintColor: '#666666',
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabel: () => null, // Removes labels for all tabs
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <TabIcon
              {...props}
              iconSource={require('../assets/icons/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Internet"
        component={Internet}
        options={{
          tabBarIcon: props => (
            <TabIcon
              {...props}
              iconSource={require('../assets/icons/internet.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarIcon: props => (
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: '#E85412',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TabIcon
                {...props}
                color="white"
                iconSource={require('../assets/icons/transfer.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cartes"
        component={Cartes}
        options={{
          tabBarIcon: props => (
            <TabIcon
              {...props}
              iconSource={require('../assets/icons/cartes.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Compte"
        component={Compte}
        options={{
          tabBarIcon: props => (
            <TabIcon
              {...props}
              iconSource={require('../assets/icons/compte.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    height: 93,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default TabNavigator;
