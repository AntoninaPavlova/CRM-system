<script setup>
import { appStore } from '@/stores/store.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import DataTableEmployees from '@/components/table/DataTableEmployees.vue';

const useStore = appStore();
const router = useRouter();

const employeeColumns = ref([
  { label: 'Имя', field: 'firstName' },
  { label: 'Фамилия', field: 'lastName' },
  { label: 'Возраст', field: 'age' },
  { label: 'Департамент', field: 'department' },
  { label: 'Технологии', field: 'technologies' },
  { label: 'Действия', field: 'edit', sortable: false },
  { label: '', field: 'delete', sortable: false },
]);

const paginationOptions = {
  enabled: true,
  perPage: 10,
};

const onClickDetails = (id) => {
  router.push(`/employees/${id}`);
};

const onClickEdit = (row) => {
  useStore.selectedEmployee = { ...row };
  useStore.openEditModal();
};

const onClickDelete = async (id) => {
  await useStore.deleteEmployee(id);
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <DataTableEmployees
        :columns="employeeColumns"
        :rows="useStore.employees"
        :pagination-options="paginationOptions"
        :onClickEdit="onClickEdit"
        :onClickDelete="onClickDelete"
        :onClickDetails="onClickDetails"
      />
    </Main>
  </div>
</template>
