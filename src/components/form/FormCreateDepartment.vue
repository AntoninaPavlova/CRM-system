<script setup></script>

<template>
  <div class="crm-modal__form-groups">
    <div class="crm-modal__form-group">
      <label for="name" class="crm-modal__label">Название департамента<sup>*</sup></label>
      <input id="name" type="text" name="name" class="crm-modal__input" placeholder="" required="" />
    </div>

    <div class="crm-modal__form-group">
      <label for="description" class="crm-modal__label">Описание<sup>*</sup></label>
      <input id="description" type="text" name="description" class="crm-modal__input" placeholder="" required="" />
    </div>

    <div class="crm-modal__form-group">
      <label for="number" class="crm-modal__label">Количество сотрудников<sup>*</sup></label>
      <input id="number" type="number" name="number" class="crm-modal__input" placeholder="" required="" />
    </div>

    <div class="crm-modal__form-group">
      <label for="head" class="crm-modal__label">Заведующий<sup>*</sup></label>
      <input id="head" type="text" name="head" class="crm-modal__input" placeholder="" required="" />
    </div>
  </div>
</template>

<style scoped>
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
</style>
