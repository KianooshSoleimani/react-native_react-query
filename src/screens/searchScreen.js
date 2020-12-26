import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';
import HeaderSearch from '../components/HeaderSearch';
import MovieItem from '../components/MovieItem';
import { Colors } from '../utility/Colors';
import { useSearch } from './../hooks';

const searchScreen = () => {
  const { goBack } = useNavigation();
  const [search, setSearch] = useState('');
  const { mutate, data = { results: [] }, status } = useSearch(search);

  return (
    <View style={styles.container}>
      <HeaderSearch
        onBackPress={() => goBack()}
        searchValue={search}
        onSearchTextChange={(value) => setSearch(value)}
        onSearchPress={() => {
          Keyboard.dismiss();
          mutate({ search });
        }}
      />
      <FlatList
        data={data.results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <MovieItem item={item} />}
        ListEmptyComponent={() =>
          status === 'loading' ? (
            <ActivityIndicator animating={true} color={Colors.red800} />
          ) : null
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

export default searchScreen;
