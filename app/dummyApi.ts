import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getProductsList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products list:', error);
    throw error;
  }
};

export const getProductDetails = async (productId: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for product ${productId}:`, error);
      throw error;
    }
  };
  
  export const searchProducts = async (query: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/search?q=${query}`);
      return response.data;
    } catch (error) {
      console.error(`Error searching for products with query "${query}":`, error);
      throw error;
    }
  };
  
  export const getUserProfile = async (userId: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user profile for user ${userId}:`, error);
      throw error;
    }
  };
  
  export const getUsersList = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users list:', error);
      throw error;
    }
  };
  