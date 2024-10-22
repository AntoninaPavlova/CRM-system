<script setup>
import { onMounted } from 'vue';
import { appStore } from '@/stores/store.js';

import Sidebar from '@/components/Sidebar.vue';
import ModalWindow from '@/components/modal/ModalWindow.vue';

const useStore = appStore();

const props = defineProps({
  isDepartment: {
    type: Boolean,
    default: true,
  },
});

onMounted(async () => {
  await useStore.fetchDepartments();
  await useStore.fetchEmployees();
});
</script>

<template>
  <main class="crm-main">
    <div class="crm-content">
      <Sidebar />
      <div class="crm-details">
        <slot></slot>
      </div>
    </div>
    <ModalWindow v-if="useStore.isEditModalOpen" :isDepartment="isDepartment" />
    <ModalWindow v-if="useStore.isCreateModalOpen" :isDepartment="isDepartment" />
  </main>
</template>

<style scoped>
.crm-container {
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.crm-content {
  display: flex;
  flex-direction: row;
}

.crm-details {
  width: 100%;
  padding: 20px;
}
</style>
