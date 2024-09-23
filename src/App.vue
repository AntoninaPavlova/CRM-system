<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="crm-wrapper">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style scoped>
.crm-wrapper {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;

  color: #000000;
  background-color: #f6f5f6;

  box-sizing: border-box;
  overflow: hidden;
}
</style>
