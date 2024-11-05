<script setup>
import { appStore } from '@/stores/store.js';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';

const useStore = appStore();
const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <div v-if="useStore.openedEmployee" class="crm-info">
        <p class="crm-info__text">{{ useStore.openedEmployee.firstName }} {{ useStore.openedEmployee.lastName }}</p>
      </div>
      <div v-else class="crm-loading">
        <p class="crm-loading__text">Загрузка...</p>
      </div>

      <button @click="goBack" class="crm-backbutton">Назад</button>
    </Main>
  </div>
</template>

<style>
.crm-info__text {
  padding: 10px 0;
  font-size: 16px;
}

.crm-backbutton {
  max-width: 150px;
  width: 100%;
  height: 28px;
  margin: 0 auto 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--black-color);
  font-weight: 400;
  border-radius: 6px;
  background-color: var(--turquoise-bg-color);
  cursor: pointer;
}
</style>
