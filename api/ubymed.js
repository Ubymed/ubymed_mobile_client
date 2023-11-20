import axios from 'axios';

const API_BASE_URL = 'https://api.ubymed.com'; // Reemplaza con la URL real de tu API

export const obtenerServiciosDisponibles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/servicios/`);
    return response.data;
  } catch (error) {
    throw error; // Maneja el error en el componente que llama a esta función
  }
};

export const obtenerUbymedAPI = async (url) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${url}`);
    return response.data;
  } catch (error) {
    throw error; // Maneja el error en el componente que llama a esta función
  }
};