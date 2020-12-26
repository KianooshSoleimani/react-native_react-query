import axiosInstance from './AxiosInstance';

const getAllCategory = async () => {
  const { data } = await axiosInstance.get('/category');
  return data;
};

const getMovie = async (tag) => {
  const { data } = await axiosInstance.get(`/movie/?tags=${tag}`);
  return data;
};

const searchMovie = async (search) => {
  const { data } = await axiosInstance.get(`/movie/?search=${search}`);
  return data;
};

export { getAllCategory, getMovie, searchMovie };
