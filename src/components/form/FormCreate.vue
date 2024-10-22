<script setup>
import { appStore } from '@/stores/store.js';

import FormCreateDepartment from '@/components/form/FormCreateDepartment.vue';
import FormCreateEmployee from '@/components/form/FormCreateEmployee.vue';
import ButtonSave from '@/components/buttons/buttonSave.vue';

const useStore = appStore();

const props = defineProps({
  isDepartment: {
    type: Boolean,
    default: true,
  },
});

const onClickSaveChanges = async () => {
  if (props.isDepartment) {
    await useStore.createDepartment(departmentData);
  } else {
    await useStore.createEmployee(employeeData);
  }
};
</script>

<template>
  <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
    <FormCreateDepartment v-if="props.isDepartment" />
    <FormCreateEmployee v-else />
    <ButtonSave />
  </form>
</template>
