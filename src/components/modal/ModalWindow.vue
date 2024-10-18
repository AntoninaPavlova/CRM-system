<script setup>
import { appStore } from '@/stores/store.js';
const useStore = appStore();

const onClickSaveChanges = async () => {
  await useStore.saveChanges();
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
          <h3 class="crm-modal__title-text">
            Изменить данные: <span class="crm-modal__title-highlight">департамента</span>
          </h3>
        </div>
      </div>

      <!-- Modal body -->
      <div class="crm-modal__body">
        <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
          <div v-if="useStore.selectedDepartment" class="crm-modal__form-groups">
            <div class="crm-modal__form-group">
              <label for="name" class="crm-modal__label">Название<sup>*</sup></label>
              <input
                id="name"
                v-model="useStore.selectedDepartment.name"
                type="text"
                name="name"
                class="crm-modal__input"
                placeholder=""
                required=""
              />
            </div>

            <div class="crm-modal__form-group">
              <label for="description" class="crm-modal__label">Описание<sup>*</sup></label>
              <input
                id="description"
                v-model="useStore.selectedDepartment.description"
                type="text"
                name="description"
                class="crm-modal__input"
                placeholder=""
                required=""
              />
            </div>

            <div class="crm-modal__form-group">
              <label for="number" class="crm-modal__label">Сотрудники<sup>*</sup></label>
              <input
                id="number"
                v-model="useStore.selectedDepartment.number"
                type="text"
                name="number"
                class="crm-modal__input"
                placeholder=""
                required=""
              />
            </div>

            <div class="crm-modal__form-group">
              <label for="head" class="crm-modal__label">Заведующий<sup>*</sup></label>
              <input
                id="head"
                v-model="useStore.selectedDepartment.head"
                type="text"
                name="head"
                class="crm-modal__input"
                placeholder=""
                required=""
              />
            </div>
          </div>

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

.crm-modal__form-group {
  margin-bottom: 16px;
}

.crm-modal__label {
  display: block;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;

  color: var(--blue-color);
}

.crm-modal__input {
  width: 100%;
  padding: 10px;

  color: var(--black-color);
  font-size: 12px;

  background-color: var(--light-gray-bg-color);
  box-shadow: 0 0 0 0 transparent;
  outline: none;
  &:focus {
    border-color: var(--lilac-color);
    box-shadow: 0 0 0 2px var(--lilac-color);
  }
  &:placeholder {
    color: var(--light-gray-color);
  }
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
