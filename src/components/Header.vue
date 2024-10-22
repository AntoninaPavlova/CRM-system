<script setup>
import { appStore } from '@/stores/store.js';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const useStore = appStore();

const buttonText = computed(() => {
  switch (route.path) {
    case '/departments':
      return 'Добавить департамент';
    case '/employees':
      return 'Добавить сотрудника';
    case '/':
      return 'Лого';
    default:
      return '';
  }
});

const onClickCreate = () => {
  if (route.path === '/departments') {
    useStore.openCreateModal();
  } else if (route.path === '/employees') {
    useStore.openCreateModal();
  }
};
</script>

<template>
  <header class="crm-header">
    <div class="crm-header__menu">
      <button type="button" @click="onClickCreate" class="crm-header__btn" v-if="buttonText">
        {{ buttonText }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.crm-header {
  height: var(--header-height);
  padding: 20px 25px 20px;

  display: flex;
  align-items: center;

  background: var(--turquoise-bg-color);
}

.crm-header__menu {
  width: 100%;
  text-align: right;
}

.crm-header__btn {
  max-width: 180px;
  width: 100%;
  height: 40px;

  color: var(--black-color);
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  background-color: var(--white-color);
  cursor: pointer;
}

.crm-header__btn:hover {
  background-color: var(--light-gray-color);
}
</style>
