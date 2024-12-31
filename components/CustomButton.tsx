// src/components/CustomButton.tsx
import React from 'react';
import {StyleSheet, Pressable, Text, PressableProps} from 'react-native';

interface CustomButtonProps extends PressableProps {
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, ...props}) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 58,
    backgroundColor: '#E85412',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CustomButton;
