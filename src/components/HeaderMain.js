import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../utility/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderMain = ({ title, onSearchPress, onLogoutPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={onSearchPress}
          activeOpacity={0.4}
          style={styles.iconContainer}>
          <Ionicons name={'search'} size={25} color={'#555679'} />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          onPress={onLogoutPress}
          activeOpacity={0.4}
          style={styles.iconContainer}>
          <Ionicons name={'log-out'} size={25} color={'#555679'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 53,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    elevation: 4,
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

  iconContainer: {
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  title: {
    color: Colors.lightPurple,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default memo(HeaderMain);
