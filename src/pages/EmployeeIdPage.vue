<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import EmployeeId from '@/components/id/EmployeeId.vue';

const { params } = useRoute();
const useStore = appStore();

const props = defineProps({
  isDepartment: {
    type: Boolean,
    default: true,
  },
});

onMounted(async () => {
  await useStore.fetchEmployeeById(params.id);
});

const onClickEdit = () => {
  if (useStore.selectedEmployee) {
    useStore.editingEmployee = { ...useStore.selectedEmployee };
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
    <Main :isDepartment="!props.isDepartment">
      <EmployeeId :onClickEdit="onClickEdit" :onClickGoBack="onClickGoBack" />
    </Main>
  </div>
</template>
