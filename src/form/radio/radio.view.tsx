/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement, useState} from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './radio.styles';

const InputRadioView = ({current, items, cb}): ReactElement => {
  const [active, setActive] = useState(current);

  const setValue = (index: number) => {
    setActive(index);
    cb(items[index].value);
  };

  return (
    <View style={styles.container}>
      {
        items && items.length > 0 ?
        items.map((item: any, index: number) => (
          <Pressable onPress={() => setValue(index)} key={index}>
            <View style={styles.input}>
              {
                active === index ?
                <View style={[styles.radio, {backgroundColor: '#343434'}]} /> :
                <View style={[styles.radio, {backgroundColor: '#FFF'}]} />
              }
              <Text
                style={[
                  styles.text,
                  {
                    fontWeight: active === item.value ? 'bold' : 'normal',
                  },
                ]}>
                {item.key}
              </Text>
            </View>
          </Pressable>
        )) : null
      }
    </View>
  );
};

export default InputRadioView;
