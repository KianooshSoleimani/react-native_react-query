import React, { memo } from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../utility/Colors';

const { width } = Dimensions.get('window');

const HeaderSearch = ({
  onSearchPress,
  searchValue,
  onSearchTextChange,
  onBackPress,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onBackPress}
        activeOpacity={0.4}
        style={styles.backButtonContainer}>
        <Ionicons name={'ios-chevron-back'} size={25} color={'#555679'} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={onSearchPress}
          activeOpacity={0.4}
          style={styles.searchButtonContainer}>
          <Ionicons name={'search'} size={25} color={'#555679'} />
        </TouchableOpacity>
        <TextInput
          allowFontScaling={false}
          placeholder={'search movie by director'}
          placeholderTextColor={Colors.grayLight}
          style={styles.input}
          value={searchValue}
          onChangeText={onSearchTextChange}
          onEndEditing={onSearchPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    elevation: 4,
    justifyContent: 'center',
  },
  inputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    height: 50,
    width: width / 1.2,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.4,
    borderRadius: 10,
  },
  input: {
    width: width / 1.5,
    fontSize: 12,
    textAlign: 'left',
  },

  backButtonContainer: {
    padding: 10,
    marginLeft: 10,
    alignSelf: 'center',
  },

  searchButtonContainer: {
    padding: 10,
    marginRight: 5,
  },
});

export default memo(HeaderSearch);
