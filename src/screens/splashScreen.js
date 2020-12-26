import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { setLogin } from '../redux/actions/UserActions';

const splashScreen = (props) => {
  useEffect(() => {
    if (props.rehydrated) {
      if (props.userData.isLogin) {
        navigateToScreen('categories');
      } else {
        navigateToScreen('login');
      }
    }
    return () => {};
  }, [props.rehydrated]);

  const navigateToScreen = (screen) => {
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace(screen));
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator color={'black'} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    rehydrated: state.rehydrated,
  };
};

const mapActionToProps = {
  setLogin,
};

export default connect(mapStateToProps, mapActionToProps)(splashScreen);
