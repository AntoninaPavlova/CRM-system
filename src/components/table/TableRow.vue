<script setup>
import { appStore } from '@/stores/store.js';
const useStore = appStore();
const props = defineProps({
  rowData: {
    type: Object,
    required: true,
  },
  isDepartment: {
    type: Boolean,
    default: true,
  },
});

const truncateDescription = (description) => {
  return description.length > 18 ? description.substring(0, 18) + ' ...' : description;
};

const onClickEdit = () => {
  if (props.isDepartment) {
    useStore.selectedDepartment = { ...props.rowData };
    useStore.openEditModal();
  } else {
    useStore.selectedEmployee = { ...props.rowData };
    useStore.openEditModal();
  }
};

const onClickDelete = async () => {
  if (props.isDepartment) {
    await useStore.deleteDepartment(props.rowData._id);
  } else {
    await useStore.deleteEmployee(props.rowData._id);
  }
};
</script>

<template>
  <div :class="['crm-table__row', isDepartment ? 'row-department' : 'row-employee']">
    <div class="crm-table__text">{{ isDepartment ? rowData.name : rowData.firstName }}</div>
    <div class="crm-table__text">{{ isDepartment ? truncateDescription(rowData.description) : rowData.lastName }}</div>
    <div class="crm-table__text">{{ isDepartment ? rowData.number : rowData.age }}</div>
    <div class="crm-table__text">{{ isDepartment ? rowData.head : rowData.department }}</div>
    <div class="crm-table__text" v-if="!isDepartment">{{ rowData.technologies.join(', ') }}</div>

    <button @click="onClickEdit" class="crm-table__button crm-table__edit-button">
      <img src="@/img/edit.png" alt="edit" width="23" height="23" />
    </button>
    <button @click="onClickDelete" class="crm-table__button crm-table__delete-button">
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

  border-radius: 10px;

  background: var(--turquoise-bg-color);
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  :nth-of-type(2),
  :nth-of-type(3),
  :nth-of-type(4),
  :nth-of-type(5) {
    justify-self: center;
    text-align: center;
  }
}

.crm-table__text {
  padding: 10px 0;
  font-size: 16px;
}

.crm-table__button {
  cursor: pointer;
}

.row-department {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.row-employee {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
</style>
