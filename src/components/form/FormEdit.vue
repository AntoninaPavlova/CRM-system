<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';

import FormEditDepartment from '@/components/form/FormEditDepartment.vue';
import FormEditEmployee from '@/components/form/FormEditEmployee.vue';
import ButtonSave from '@/components/buttons/buttonSave.vue';

const useStore = appStore();
const route = useRoute();

const isDepartmentPage = route.path === '/departments' || route.path.startsWith('/departments/');

const onClickSaveChanges = async () => {
  if (isDepartmentPage) {
    await useStore.saveDepartmentChanges();
  } else {
    await useStore.saveEmployeeChanges();
  }
};
</script>

<template>
  <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
    <FormEditDepartment v-if="isDepartmentPage" />
    <FormEditEmployee v-else />
    <ButtonSave />
  </form>
</template>

<style scoped></style>
