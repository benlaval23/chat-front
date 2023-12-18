const API_BASE_URL = 'https://dummyjson.com';

export const getProductsList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Network response was not ok.');
    const json = await response.json();
    const products = json.products.slice(0, 10);
    return products
  } catch (error) {
    console.error('Error fetching products list:', error);
    throw error;
  }
};

export const getProductDetails = async (args: string) => {
  const obj = JSON.parse(args);
  const productId = obj.productId

  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`);
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching details for product ${productId}:`, error);
    throw error;
  }
};

export const searchProducts = async (args: string) => {
  const obj = JSON.parse(args);
  const query = obj.query

  try {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
    if (!response.ok) throw new Error('Network response was not ok.');
    const json = await response.json();
    const products = json.products.slice(0, 10);
    return products
  } catch (error) {
    console.error(`Error searching for products with query "${query}":`, error);
    throw error;
  }
};

export const getUserProfile = async (args: string) => {
  const obj = JSON.parse(args);
  const userId = obj.userId

  console.log(typeof args)

  console.log(`Fetching user profile for user ${userId}`);
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user profile for user ${userId}:`, error);
    throw error;
  }
};

export const getUsersList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error('Network response was not ok.');
    const json = await response.json();
    const users = json.users.slice(0, 10);
    console.log('Users list:', users);
    return users
  } catch (error) {
    console.error('Error fetching users list:', error);
    throw error;
  }
};
