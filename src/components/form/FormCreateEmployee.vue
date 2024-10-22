<script setup>
</script>

<template>
  <div class="crm-modal__form-groups">
    <div class="crm-modal__form-group">
      <label for="firstName" class="crm-modal__label">Имя<sup>*</sup></label>
      <input id="firstName" type="text" name="firstName" class="crm-modal__input" placeholder="" required="" />
    </div>
    <div class="crm-modal__form-group">
      <label for="lastName" class="crm-modal__label">Фамилия<sup>*</sup></label>
      <input id="lastName" type="text" name="lastName" class="crm-modal__input" placeholder="" required="" />
    </div>
    <div class="crm-modal__form-group">
      <label for="age" class="crm-modal__label">Возраст<sup>*</sup></label>
      <input id="age" type="number" name="age" class="crm-modal__input" placeholder="" required="" />
    </div>
    <div class="crm-modal__form-group">
      <label for="department" class="crm-modal__label">Департамент<sup>*</sup></label>
      <input id="department" type="text" name="department" class="crm-modal__input" placeholder="" required="" />
    </div>
    <div class="crm-modal__form-group">
      <label for="technologies" class="crm-modal__label">Технологии<sup>*</sup></label>
      <input id="technologies" type="text" name="technologies" class="crm-modal__input" placeholder="" required="" />
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
