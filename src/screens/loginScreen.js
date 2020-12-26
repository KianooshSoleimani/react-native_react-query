import { StackActions } from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { setLogin } from '../redux/actions';
import { Colors } from '../utility/Colors';
import Utils from '../utility/Utils';

const { width } = Dimensions.get('window');

const loginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [{ loading, error, data }, authTokenApi] = useAxios(
    {
      method: 'POST',
      url: '/user/auth-token',
    },
    {
      manual: true,
    },
  );

  useEffect(() => {
    if (data !== undefined && data.token) {
      props.setLogin(data);
      props.navigation.dispatch(StackActions.replace('categories'));
    }
    return () => {};
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>LOGIN</Text>
        <TextInput
          label="User Name"
          placeholder={'enter your user name'}
          placeholderTextColor={'#000'}
          value={username}
          onChangeText={(value) => setUsername(value)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          placeholder={'enter your password'}
          placeholderTextColor={'#000'}
          value={password}
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
        />
        <HelperText
          type="error"
          style={styles.error}
          visible={
            error !== null && 'response' in error && 'data' in error.response
          }>
          {Utils.objToString(error !== null ? error.response.data : '')}
        </HelperText>
        <Button
          mode="contained"
          loading={loading}
          onPress={() => {
            authTokenApi({ data: { username, password } });
          }}
          style={styles.button}>
          CONFIRM
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 15,
    textAlign: 'center',
  },
  input: {
    width: width / 1.8,
    height: 60,
    marginTop: 20,
    fontSize: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  button: {
    width: width / 1.8,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  error: {
    width: width / 1.8,
  },
});

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const mapActionToProps = {
  setLogin,
};

export default connect(mapStateToProps, mapActionToProps)(loginScreen);
