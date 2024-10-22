<script setup>
import FormDepartment from '@/components/form/FormDepartment.vue';
import FormEmployee from '@/components/form/FormEmployee.vue';
import { appStore } from '@/stores/store.js';

const useStore = appStore();

const props = defineProps({
  isDepartment: {
    type: Boolean,
    default: true,
  },
});

const onClickSaveChanges = async () => {
  if (props.isDepartment) {
    await useStore.saveDepartmentChanges();
  } else {
    await useStore.saveEmployeeChanges();
  }
};

const onClickCloseModal = () => {
  useStore.closeModal();
};
</script>

<template>
  <!-- Main modal -->
  <div class="crm-modal">
    <!-- Modal content -->
    <div class="crm-modal__content">
      <!-- Modal header -->
      <div class="crm-modal__header">
        <div class="crm-modal__title">
          <h3 class="crm-modal__title-text">Изменить данные:</h3>
        </div>
      </div>

      <!-- Modal body -->
      <div class="crm-modal__body">
        <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
          <FormDepartment v-if="useStore.selectedDepartment" />
          <FormEmployee v-else />
          <button type="submit" class="crm-modal__button crm-modal__button--save">Сохранить</button>
        </form>
      </div>

      <!-- Modal footer -->
      <div class="crm-modal__footer">
        <button @click="onClickCloseModal" class="crm-modal__close-button">
          <img class="crm-modal__close-icon" src="@/img/close.png" alt="close" width="15" height="15" />
        </button>
      </div>
    </div>
  </div>

  <div class="crm-bg"></div>
</template>

<style scoped>
.crm-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  max-width: 448px;
  width: 100%;
}

.crm-modal__content {
  background-color: var(--white-bg-color);
  box-shadow: 0 4px 6px var(--black-color);
}

.crm-modal__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--light-gray-color);
}

.crm-modal__title-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--blue-color);
}

.crm-modal__title-highlight {
  font-size: 12px;
  color: var(--lilac-color);
  text-transform: uppercase;
}

.crm-modal__form {
  margin-bottom: 16px;
  padding: 20px;
}

.crm-modal__button--save {
  margin: 0 auto;
  padding: 10px 20px;

  display: flex;

  color: var(--black-color);
  font-size: 16px;
  cursor: pointer;

  text-align: center;
  text-decoration: none;

  background-color: var(--turquoise-bg-color);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.crm-modal__button--delete {
  padding: 8px 16px;
  margin: 0 auto;

  display: flex;

  color: var(--black-color);
  font-weight: 500;

  text-decoration: underline;
  cursor: pointer;
}

.crm-modal__close-button {
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
}

.crm-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  background-color: var(--lilac-bg-color);
  opacity: 0.6;
}
</style>
