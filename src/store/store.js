import { defineStore } from 'pinia';
import {
  fetchDepartments,
  fetchDepartmentById,
  saveDepartment,
  deleteDepartment,
  createDepartment,
} from '@/api/departments.js';
import { fetchEmployees, fetchEmployeeById, saveEmployee, deleteEmployee, createEmployee } from '@/api/employees.js';
import { showErrorToast, showSuccessToast } from '@/utils/toast.js';

export const useAppStore = defineStore('app-store', {
  state: () => ({
    departments: [],
    openedDepartment: null,
    selectedDepartment: null,
    newDepartment: {},

    employees: [],
    openedEmployee: null,
    selectedEmployee: null,
    newEmployee: {},

    isEditModalOpen: false,
    isCreateModalOpen: false,
  }),

  actions: {
    // Универсальная функция для получения данных
    async fetchData(fetchFunction, setDataFunction, errorMessage) {
      try {
        const data = await fetchFunction();
        setDataFunction(data);
      } catch (error) {
        showErrorToast(`Ошибка при получении данных: ${errorMessage}`);
        console.error(error);
      }
    },

    // Для департамента
    async fetchDepartments() {
      await this.fetchData(
        fetchDepartments,
        (data) => {
          this.departments = data;
        },
        'департаментов'
      );
    },

    // Для сотрудника
    async fetchEmployees() {
      await this.fetchData(
        fetchEmployees,
        (data) => {
          this.employees = data;
        },
        'сотрудников'
      );
    },

    // Универсальная функция для получения данных по id
    async fetchItemById(fetchFunction, id, setDataFunction, errorMessage) {
      try {
        const item = await fetchFunction(id);
        setDataFunction(item);
      } catch (error) {
        showErrorToast(`Ошибка при получении данных: ${errorMessage}`);
        console.error(error);
      }
    },

    // Для департамента
    async fetchDepartmentById(id) {
      await this.fetchData(
        () => fetchDepartmentById(id),
        (data) => {
          this.openedDepartment = data;
        },
        'департамента'
      );
    },

    // Для сотрудника
    async fetchEmployeeById(id) {
      await this.fetchData(
        () => fetchEmployeeById(id),
        (data) => {
          this.openedEmployee = data;
        },
        'сотрудника'
      );
    },

    // Универсальная функция для сохранения
    async saveItem(saveFunction, selectedItem, items, openedItemKey, successMessage, errorMessage) {
      try {
        if (!selectedItem) {
          throw new Error('Нет выбранного элемента для сохранения');
        }

        const updatedItem = await saveFunction(selectedItem._id, selectedItem);
        const index = this[items].findIndex((item) => item._id === updatedItem._id);

        if (index !== -1) {
          this[items][index] = updatedItem;
        }

        this[openedItemKey] = { ...updatedItem };
        this.closeModal();

        showSuccessToast(`${successMessage} успешно сохранен!`);
      } catch (error) {
        showErrorToast(`Ошибка при сохранении: ${errorMessage}`);
        console.error(error);
      }
    },

    // Для департамента
    async saveDepartment() {
      await this.saveItem(
        saveDepartment,
        this.selectedDepartment,
        'departments',
        'openedDepartment',
        'Департамент',
        'департамента'
      );
    },

    // Для сотрудника
    async saveEmployee() {
      await this.saveItem(
        saveEmployee,
        this.selectedEmployee,
        'employees',
        'openedEmployee',
        'Сотрудник',
        'cотрудника'
      );
    },

    // Универсальная функция для удаления
    async deleteItem(deleteFunction, id, items, successMessage, errorMessage) {
      try {
        await deleteFunction(id);
        this[items] = this[items].filter((item) => item._id !== id);
        showSuccessToast(`${successMessage} успешно удален!`);
      } catch (error) {
        showErrorToast(`Ошибка при удалении: ${errorMessage}`);
        console.error(error);
      }
    },

    // Для департамента
    async deleteDepartment(id) {
      await this.deleteItem(deleteDepartment, id, 'departments', 'Департамент', 'департамента');
    },

    // Для сотрудника
    async deleteEmployee(id) {
      await this.deleteItem(deleteEmployee, id, 'employees', 'Сотрудник', 'сотрудника');
    },

    // Универсальная функция для добавления
    async createItem(createFunction, newItem, stateArray, successMessage, errorMessage) {
      try {
        const createdItem = await createFunction(newItem);
        this[stateArray].push(createdItem);
        this.closeModal();
        showSuccessToast(`${successMessage} успешно добавлен!`);
      } catch (error) {
        showErrorToast(`Ошибка при добавлении: ${errorMessage}`); // Исправлено
        console.error(error);
      }
    },

    // Для департамента
    async createDepartment() {
      await this.createItem(createDepartment, this.newDepartment, 'departments', 'Департамент', 'департамента.');
    },

    // Для сотрудника
    async createEmployee() {
      await this.createItem(createEmployee, this.newEmployee, 'employees', 'Сотрудник', 'сотрудника.');
    },

    // Общие действия
    openEditModal() {
      this.isEditModalOpen = true;
    },

    openCreateModal() {
      this.isCreateModalOpen = true;
    },

    closeModal() {
      this.selectedDepartment = null;
      this.newDepartment = {};

      this.selectedEmployee = null;
      this.newEmployee = {};

      this.isEditModalOpen = false;
      this.isCreateModalOpen = false;
    },
  },
});
