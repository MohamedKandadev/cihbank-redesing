// src/components/CustomInput.tsx
import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface CustomInputProps extends TextInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({placeholder, ...props}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={'#CFCFCF'}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    height: 59,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
});

export default CustomInput;
