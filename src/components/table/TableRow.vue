<script setup>
import { appStore } from '@/stores/store.js';
const useStore = appStore();

const props = defineProps({
  department: {
    type: Object,
    required: true,
  },
});

const truncateDescription = (description) => {
  return description.substring(0, 18) + ' ...';
};

const onClickDeleteDepartment = async (id) => {
  await useStore.deleteDepartment(id);
};
</script>

<template>
  <div class="crm-table__row">
    <div class="crm-table__text">{{ department.name }}</div>
    <div class="crm-table__text">{{ truncateDescription(department.description) }}</div>
    <div class="crm-table__text">{{ department.number }}</div>
    <div class="crm-table__text">{{ department.head }}</div>
    <button class="crm-table__button crm-table__edit-button">
      <img src="@/img/edit.png" alt="edit" width="23" height="23" />
    </button>
    <button @click="onClickDeleteDepartment(department._id)" class="crm-table__button crm-table__delete-button">
      <img src="@/img/delete.png" alt="delete" width="23" height="23" />
    </button>
  </div>
</template>

<style scoped>
.crm-table__row {
  margin-bottom: 10px;
  padding: 0 15px;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  border-radius: 10px;

  background: var(--turquoise-bg-color);
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
}

.crm-table__text {
  padding: 10px 0;
  font-size: 16px;
}

.crm-table__button {
  cursor: pointer;
}
</style>
