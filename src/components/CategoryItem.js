import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { List } from 'react-native-paper';

const CategoryItem = ({ item }) => {
  const { navigate } = useNavigation();
  const { name } = item;
  return (
    <List.Item
      onPress={() => navigate('movies', { name })}
      title={name}
      left={(props) => <List.Icon {...props} icon="library" />}
    />
  );
};

export default memo(CategoryItem);
