import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/employees';

export const fetchEmployees = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchEmployeeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const saveEmployee = async (id, employee) => {
  const response = await axios.put(`${BASE_URL}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const createEmployee = async (employee) => {
  const response = await axios.post(BASE_URL, employee);
  return response.data;
};
