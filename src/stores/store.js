import { defineStore } from 'pinia';
import axios from 'axios';

export const appStore = defineStore('app-store', {
  state: () => ({
    departments: [],
    employees: [],
    isEditModalOpen: false,
    isCreateModalOpen: false,
    selectedDepartment: null,
    selectedEmployee: null,
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

    async fetchEmployees() {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        this.employees = response.data;
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

    async deleteEmployee(id) {
      try {
        await axios.delete(`http://localhost:5000/api/employees/${id}`);

        this.employees = this.employees.filter((elem) => elem._id !== id);
      } catch (error) {
        console.error('Ошибка при удалении сотрудника:', error);
      }
    },

    async saveDepartmentChanges() {
      try {
        const index = this.departments.findIndex((elem) => elem._id === this.selectedDepartment._id);
        if (index !== -1) {
          const response = await axios.put(
            ` http://localhost:5000/api/departments/${this.selectedDepartment._id}`,
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

    async saveEmployeeChanges() {
      if (!this.selectedEmployee || !this.selectedEmployee._id) {
        console.error('Сотрудник не выбран или ID отсутствует');
        return;
      }

      try {
        const index = this.employees.findIndex((elem) => elem._id === this.selectedEmployee._id);
        if (index !== -1) {
          const response = await axios.put(
            `http://localhost:5000/api/employees/${this.selectedEmployee._id}`,
            this.selectedEmployee
          );
          this.employees[index] = response.data;
          this.selectedEmployee = null;
          this.closeModal();
        } else {
          console.error('Сотрудник не найден');
        }
      } catch (error) {
        console.error('Ошибка при сохранении изменений:', error);
      }
    },


    openEditModal() {
      this.isEditModalOpen = true;
    },

    openCreateModal() {
      this.isCreateModalOpen = true;
    },

    closeModal() {
      this.selectedDepartment = null;
      this.selectedEmployee = null;
      this.isEditModalOpen = false;
      this.isCreateModalOpen = false;
    },
  },
});
