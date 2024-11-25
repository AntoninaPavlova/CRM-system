<script setup>
import { appStore } from '@/stores/store.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import DataTableDepartments from '@/components/table/DataTableDepartments.vue';

const useStore = appStore();
const router = useRouter();

const departmentColumns = ref([
  { label: 'Название департамента', field: 'name' },
  { label: 'Описание', field: 'description' },
  { label: 'Количество сотрудников', field: 'number' },
  { label: 'Заведующий', field: 'head' },
  { label: 'Действия', field: 'edit', sortable: false },
  { label: '', field: 'delete', sortable: false },
]);

const paginationOptions = {
  enabled: true,
  perPage: 10,
};

const onClickDetails = (id) => {
  router.push(`/departments/${id}`);
};

const onClickEdit = (row) => {
  useStore.selectedDepartment = { ...row };
  useStore.openEditModal();
};

const onClickDelete = async (id) => {
  await useStore.deleteDepartment(id);
};

const truncateDescription = (description) => {
  return description.length > 18 ? description.substring(0, 18) + ' ...' : description;
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <DataTableDepartments
        :columns="departmentColumns"
        :rows="useStore.departments"
        :pagination-options="paginationOptions"
        :onClickEdit="onClickEdit"
        :onClickDelete="onClickDelete"
        :onClickDetails="onClickDetails"
        :truncateDescription="truncateDescription"
      />
    </Main>
  </div>
</template>
