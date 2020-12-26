import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from '../components/CategoryItem';
import HeaderMain from '../components/HeaderMain';
import { useAllCategory } from '../hooks';
import { setLogout } from '../redux/actions/UserActions';
import { Colors } from '../utility/Colors';

const categoriesScreen = (props) => {
  const { navigate } = useNavigation();
  const { status, data = { results: [] } } = useAllCategory();

  return (
    <View style={styles.container}>
      <HeaderMain
        title={'Categories'}
        onSearchPress={() => {
          navigate('search');
        }}
        onLogoutPress={() => {
          props.setLogout();
          props.navigation.dispatch(StackActions.replace('splash'));
        }}
      />
      <FlatList
        data={data.results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <CategoryItem item={item} />}
        ListEmptyComponent={() =>
          (status === 'loading ' && (
            <ActivityIndicator color={Colors.lightPurple} />
          )) ||
          null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});

const mapStateToProps = (state) => state;

const mapActionToProps = {
  setLogout,
};

export default connect(mapStateToProps, mapActionToProps)(categoriesScreen);
