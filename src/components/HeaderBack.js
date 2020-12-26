import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../utility/Colors';

const HeaderBack = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={props.onBackPress}
          activeOpacity={0.4}
          style={styles.backButtonContainer}>
          <Ionicons name={'ios-chevron-back'} size={25} color={'#555679'} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.right} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    elevation: 10,
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 5,
  },

  backButtonContainer: {
    padding: 10,
    marginLeft: 10,
  },

  title: {
    color: Colors.lightPurple,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default memo(HeaderBack);
