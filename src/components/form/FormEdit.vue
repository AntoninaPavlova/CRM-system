<script setup>
import { appStore } from '@/stores/store.js';

import FormEditDepartment from '@/components/form/FormEditDepartment.vue';
import FormEditEmployee from '@/components/form/FormEditEmployee.vue';
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
    await useStore.saveDepartmentChanges();
  } else {
    await useStore.saveEmployeeChanges();
  }
};
</script>

<template>
  <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
    <FormEditDepartment v-if="useStore.selectedDepartment" />
    <FormEditEmployee v-else />
    <ButtonSave />
  </form>
</template>

<style scoped>
.crm-modal__button--save {
  margin: 0 auto;
  padding: 10px 20px;

  display: flex;

  color: var(--black-color);
  font-size: 16px;
  cursor: pointer;

  text-align: center;
  text-decoration: none;

  background-color: var(--turquoise-bg-color);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
</style>
