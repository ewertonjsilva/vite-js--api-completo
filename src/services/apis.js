// npm install axios

import axios from 'axios';

const api = axios.create({
    // O Vite expõe variáveis de ambiente via import.meta.env
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
});

// Interceptor opcional: útil se você tiver rotas protegidas no Node.js
// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('@App:token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default api;