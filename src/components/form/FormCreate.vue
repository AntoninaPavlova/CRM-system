<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';

import FormCreateDepartment from '@/components/form/FormCreateDepartment.vue';
import FormCreateEmployee from '@/components/form/FormCreateEmployee.vue';
import ButtonSave from '@/components/buttons/buttonSave.vue';

const useStore = appStore();
const route = useRoute();

const onClickSaveChanges = async () => {
  if (route.path === '/departments') {
    await useStore.createDepartment();
  } else {
    await useStore.createEmployee();
  }
};
</script>

<template>
  <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
    <FormCreateDepartment v-if="route.path === '/departments'" />
    <FormCreateEmployee v-else />
    <ButtonSave />
  </form>
</template>
