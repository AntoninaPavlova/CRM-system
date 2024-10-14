<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <main class="crm-main">
    <div class="crm-content">
      <Sidebar />
      <div class="crm-details">
        <slot></slot>
      </div>
    </div>
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
</style>
