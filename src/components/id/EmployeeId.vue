<script setup>
import { appStore } from '@/stores/store.js';

import ButtonBack from '@/components/buttons/ButtonBack.vue';
import ButtonEdit from '@/components/buttons/ButtonEdit.vue';

const useStore = appStore();

const props = defineProps({
  onClickEdit: Function,
  onClickGoBack: Function,
});
</script>

<template>
  <div v-if="useStore.selectedEmployee" class="crm-info">
    <div class="crm-info__coll">
      <div class="crm-info__item">
        <p class="crm-info__text crm-info__name">
          {{ useStore.selectedEmployee.firstName }} {{ useStore.selectedEmployee.lastName }}
        </p>
        <p class="crm-info__text crm-info__age">Возраст: {{ useStore.selectedEmployee.age }}</p>
        <p class="crm-info__text crm-info__department">Департамент: {{ useStore.selectedEmployee.department }}</p>
        <p class="crm-info__text crm-info__technologies">
          Технологии: {{ useStore.selectedEmployee.technologies.join(', ') }}
        </p>
      </div>
      <div class="crm-info__item">
        <ButtonEdit :onClickEdit="onClickEdit" />
      </div>
    </div>
  </div>
  <div v-else class="crm-loading">
    <p class="crm-loading__text">Загрузка...</p>
  </div>

  <ButtonBack :onClickGoBack="onClickGoBack" />
</template>

<style scoped>
.crm-info {
  margin: 15px;
  padding: 20px;

  background-color: var(--light-gray-bg-color);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.crm-info__coll {
  display: grid;
  grid-template-columns: 90% 10%;
}

.crm-info__item {
  &:nth-last-of-type(1) {
    justify-self: flex-end;
  }
}

.crm-info__name {
  font-weight: bold;
}

.crm-info__text {
  padding: 10px 0;
  font-size: 16px;

  color: var(--dark-gray-color);
}
</style>
