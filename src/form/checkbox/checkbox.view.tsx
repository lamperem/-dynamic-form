/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement, useState} from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './checkbox.styles';

const InputCheckboxView = ({current, label, cb}): ReactElement => {
  const [active, setActive] = useState<boolean>(current);

  const setValue = () => {
    const value = !active;

    setActive(value);
    cb(String(value));
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setValue()}>
        <View style={styles.checkbox}>
          {
            active ?
            <View style={[styles.box, {backgroundColor: '#343434'}]} /> :
            <View style={[styles.box, {backgroundColor: '#FFF'}]} />
          }
          <Text
            style={[
              styles.text,
              {
                fontWeight: active ? 'bold' : 'normal',
              },
            ]}>
            {label}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default InputCheckboxView;
