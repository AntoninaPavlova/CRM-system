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

    editingDepartment: null,
    editingEmployee: null,
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

    async fetchDepartmentById(id) {
      try {
        const response = await axios.get(`http://localhost:5000/api/departments/${id}`);
        this.selectedDepartment = response.data;
      } catch (error) {
        console.error('Error fetching department:', error);
        this.selectedDepartment = null;
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

    async fetchEmployeeById(id) {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
        this.selectedEmployee = response.data;
      } catch (error) {
        console.error('Error fetching employee:', error);
        this.selectedEmployee = null;
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
            `http://localhost:5000/api/departments/${this.selectedDepartment._id}`,
            this.selectedDepartment
          );
          this.departments[index] = response.data;
          this.closeModal();
        } else {
          console.error('Департамент не найден');
        }
      } catch (error) {
        console.error('Ошибка при сохранении изменений:', error);
      }
    },

    async saveEmployeeChanges() {
      try {
        const index = this.employees.findIndex((elem) => elem._id === this.selectedEmployee._id);

        if (index !== -1) {
          const response = await axios.put(
            `http://localhost:5000/api/employees/${this.selectedEmployee._id}`,
            this.selectedEmployee
          );

          this.employees[index] = response.data;
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
      this.editingDepartment = null;
      this.editingEmployee = null;

      this.isEditModalOpen = false;
      this.isCreateModalOpen = false;
    },
  },
});
