// filepath: /Users/mohammedbenharrats/moncrmnvfront/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Remplacez par l'URL de votre backend

export const getClients = async () => {
  try {
    const response = await axios.get(`${API_URL}/clients`);
    return response.data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

export const addClient = async (client) => {
  try {
    const response = await axios.post(`${API_URL}/clients`, client);
    return response.data;
  } catch (error) {
    console.error('Error adding client:', error);
    throw error;
  }
};

// Ajoutez d'autres fonctions pour les opérations CRUD