import { useQuery, useMutation } from 'react-query';
import * as api from '../api';

const useAllCategory = () => {
  return useQuery('categories', api.getAllCategory);
};

const useMovie = (tag = '') => {
  return useQuery(['movie', tag], () => api.getMovie(tag));
};

const useSearch = (search = '') => {
  return useMutation(() => api.searchMovie(search), {
    onSuccess: (data) => {
      return data;
    },
  });
};

export { useAllCategory, useMovie, useSearch };
