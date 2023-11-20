import apiClient from './apiClient';

export const GET = async (endpoint: string, headers = {}) => {
  try {
    const response = await apiClient.get(endpoint, headers);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const POST = async (endpoint: string, data: any, config = {}) => {
  try {
    const response = await apiClient.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const PATCH = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.patch(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DELETE = async (endpoint: string) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
