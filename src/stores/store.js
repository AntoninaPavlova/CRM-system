import { defineStore } from 'pinia';
import axios from 'axios';

export const appStore = defineStore('app-store', {
  state: () => ({
    departments: [],
    isEditModalOpen: false,
    selectedDepartment: null,
  }),
  getters: {},
  actions: {
    async fetchDepartments() {
      try {
        const response = await axios.get('http://localhost:5000/api/departments');
        this.departments = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },

    async deleteDepartment(id) {
      try {
        await axios.delete(`http://localhost:5000/api/departments/${id}`);

        this.departments = this.departments.filter((elem) => elem._id !== id);
      } catch (error) {
        console.error('Ошибка при удалении отдела:', error);
      }
    },

    openEditModal() {
      this.isEditModalOpen = true;
    },

    closeModal() {
      this.selectedDepartment = null;
      this.isEditModalOpen = false;
    },
  },
});
