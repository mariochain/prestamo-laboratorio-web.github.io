import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import jwt_decode from 'jwt-decode';

// Crear una instancia de Axios
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000', // Base URL de la API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud para agregar el token de autenticación
apiClient.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta para manejar errores 401 y otros
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { logout } = useAuthStore.getState();
    if (error.response && error.response.status === 401) {
      // Si recibimos un 401, se cierra la sesión
      logout();
    }
    return Promise.reject(error);
  }
);

// Función para verificar si el token ha expirado
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: any = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true; // Si el token no es válido o no puede ser decodificado
  }
};

// Exportar el cliente Axios configurado
export default apiClient;
