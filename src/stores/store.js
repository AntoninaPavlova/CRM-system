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

    async saveChanges() {
      if (!this.selectedDepartment || !this.selectedDepartment._id) {
        console.error('Департамент не выбран или ID отсутствует');
        return;
      }

      try {
        const index = this.departments.findIndex((elem) => elem._id === this.selectedDepartment._id);
        if (index !== -1) {
          const response = await axios.put(
            `http://localhost:5000/api/departments/${this.selectedDepartment._id}`,
            this.selectedDepartment
          );
          this.departments[index] = response.data;
          this.selectedDepartment = null;
          this.closeModal();
        } else {
          console.error('Департамент не найден');
        }
      } catch (error) {
        console.error('Ошибка при сохранении изменений:', error);
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
