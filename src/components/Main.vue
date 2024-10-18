<script setup>
import { appStore } from '@/stores/store.js';

import Sidebar from '@/components/Sidebar.vue';
import ModalWindow from '@/components/modal/ModalWindow.vue';

const useStore = appStore();
</script>

<template>
  <main class="crm-main">
    <div class="crm-content">
      <Sidebar />
      <div class="crm-details">
        <slot></slot>
      </div>
    </div>
    <ModalWindow v-if="useStore.isEditModalOpen" />
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
