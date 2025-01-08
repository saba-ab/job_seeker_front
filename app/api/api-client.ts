import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_URL = 'http://0.0.0.0:8000/api';

// Create an Axios instance for consistent configuration
export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor for handling responses
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response, // Return the response if successful
  async (error) => {
    console.error('API Error:', error.response?.status, error.response?.data);
    const message =
      error.response?.data?.message || 'An unexpected error occurred.';
    console.error(message);
  }
);

// Helper function to create headers
export function createHeaders(authToken?: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`; // Add Bearer token if available
  }

  return headers;
}
