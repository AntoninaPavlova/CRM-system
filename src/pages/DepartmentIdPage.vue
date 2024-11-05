<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import DepartmentId from '@/components/id/DepartmentId.vue';

const { params } = useRoute();
const useStore = appStore();

onMounted(async () => {
  await useStore.fetchDepartmentById(params.id);
});
</script>

<template>
  <DepartmentId :department="useStore.openedDepartment" />
</template>
