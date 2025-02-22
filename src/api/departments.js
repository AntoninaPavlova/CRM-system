import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/departments';

export const fetchDepartments = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchDepartmentById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const saveDepartment = async (id, department) => {
  const response = await axios.put(`${BASE_URL}/${id}`, department);
  return response.data;
};

export const deleteDepartment = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const createDepartment = async (department) => {
  const response = await axios.post(BASE_URL, department);
  return response.data;
};
