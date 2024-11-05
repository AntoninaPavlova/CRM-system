<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import EmployeeId from '@/components/id/EmployeeId.vue';

const { params } = useRoute();
const useStore = appStore();

onMounted(async () => {
  await useStore.fetchEmployeeById(params.id);
});
</script>

<template>
  <EmployeeId :employee="useStore.openedEmployee" />
</template>
