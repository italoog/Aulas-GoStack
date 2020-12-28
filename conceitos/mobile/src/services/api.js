import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // simulador adb reverse tcp:3333 tcp:3333  
  //baseURL: 'http://10.0.2.2', 
  // baseURL: 'http://192.168.1.7', //device
});

export default api;