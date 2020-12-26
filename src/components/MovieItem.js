import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native-paper';

const MovieItem = ({ item }) => {
  const { date_of_release, director, id, rating, tags, title } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>director : {director}</Text>
      <Text style={styles.text}>title : {title}</Text>
      <Text style={styles.text}>rating : {rating}</Text>
      <Text style={styles.text}>release date : {date_of_release}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.grey500,
    margin: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default memo(MovieItem);
