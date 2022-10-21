/* eslint-disable prettier/prettier */
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import {Button, Text, TextInput, View} from 'react-native';
import InputRadioView from './radio/radio.view';
import InputCheckboxView from './checkbox/checkbox.view';
import {FieldInterface, OptionFieldInterface} from './form.model';
import styles from './form.styles';

const setInitialValues = (records: Array<FieldInterface>): any => {
  const fields = records.map((item: FieldInterface) => item.name); // get all fields names
  const initialValues: any = {};

  for (let i = 0; i < fields.length; i++) {
    initialValues[fields[i]] = '';
  }

  console.log('campos: ', initialValues);

  return initialValues;
};

const FormView = ({data}: {data: Array<FieldInterface>}) => {
  const initialValues = setInitialValues(data);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            {
              data && data.length > 0 ?
              data.map((item: FieldInterface, index: number) => (

                // input text
                item.type === 'input' ?
                <View style={styles.fielContainer} key={index}>
                  { item.label ? <Text style={styles.label}>{item.label}</Text> : null }
                  <TextInput
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    style={[styles.field, styles.input]}
                    placeholder={item.placeholder}
                  />
                </View> :
                // input number
                item.type === 'number' ?
                <View style={styles.fielContainer} key={index}>
                  { item.label ? <Text style={styles.label}>{item.label}</Text> : null }
                  <TextInput
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    style={[styles.field, styles.input]}
                    placeholder={item.placeholder}
                    keyboardType="numeric"
                  />
                </View>
                 :
                // select
                item.type === 'select' ?
                <View style={styles.fielContainer} key={index}>
                  { item.label ? <Text style={styles.label}>{item.label}</Text> : null }
                  <View style={[styles.field]}>
                    <Picker
                      selectedValue={item.defaultValue}
                      onValueChange={handleChange(item.name)}
                      // enabled={false}
                    >
                      <Picker.Item color="#333" label={item.placeholder} value="" />
                      {
                        item.options && item.options?.length > 0 ?
                        item.options.map((option: OptionFieldInterface, optionIndex: number) => (
                          <Picker.Item label={option.key} value={option.value} key={optionIndex} />
                        )) : null
                      }
                    </Picker>
                  </View>
                </View> :
                // input radio
                item.type === 'radio' ?
                <View style={styles.fielContainer} key={index}>
                  { item.label ? <Text style={styles.label}>{item.label}</Text> : null }
                  <InputRadioView current={''} items={item.options} cb={handleChange(item.name)} />
                </View> :
                // input checkbox
                item.type === 'checkbox' ?
                <View style={styles.fielContainer} key={index}>
                  { item.label ? <Text style={styles.label}>{item.label}</Text> : null }
                  <InputCheckboxView current={0} label={item.placeholder} cb={handleChange(item.name)} />
                </View> :
                // textarea
                item.type === 'textarea' ?
                <View style={styles.fielContainer} key={index}>
                  { item.label ? <Text style={styles.label}>{item.label}</Text> : null }
                  <TextInput
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    style={[styles.field, styles.input, styles.textarea]}
                    placeholder={item.placeholder}
                    multiline = {true}
                    numberOfLines={3}
                  />
                </View> : null
              ))
              : null
            }
            <Button onPress={handleSubmit} title="Enviar" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormView;
