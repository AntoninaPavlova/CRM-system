import { defineStore } from 'pinia';
import axios from 'axios';

export const appStore = defineStore('app-store', {
  state: () => ({
    departments: [],
  }),
  getters: {
  },
  actions: {
    async fetchDepartments() {
      try {
        const response = await axios.get('http://localhost:5000/api/departments');
        this.departments = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
  },
});
