import { getAllUsers } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

const useFetchMovieById = () => useQuery(['user', userId], () => getAllUsers());

export default useFetchMovieById;
