import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import HeaderBack from '../components/HeaderBack';
import MovieItem from '../components/MovieItem';
import { useMovie } from '../hooks';
import { Colors } from '../utility/Colors';

const moviesScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { status, data = { results: [] } } = useMovie(params.name);

  return (
    <View style={styles.container}>
      <HeaderBack title={params.name} onBackPress={() => goBack()} />
      <FlatList
        data={data.results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <MovieItem item={item} />}
        ListEmptyComponent={() =>
          status === 'loading' ? (
            <ActivityIndicator color={Colors.lightPurple} />
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

export default moviesScreen;
