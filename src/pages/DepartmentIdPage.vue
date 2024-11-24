<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import DepartmentId from '@/components/id/DepartmentId.vue';

const { params } = useRoute();
const useStore = appStore();

onMounted(async () => {
  await useStore.fetchDepartmentById(params.id);
});

const onClickEdit = () => {
  if (useStore.selectedDepartment) {
    useStore.editingDepartment = { ...useStore.selectedDepartment };
    console.log('> DepartmentId -> onClickEdit, Выбранный департамент:', useStore.selectedDepartment);
    useStore.openEditModal();
  }
};

const onClickGoBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <DepartmentId :onClickEdit="onClickEdit" :onClickGoBack="onClickGoBack" />
    </Main>
  </div>
</template>
