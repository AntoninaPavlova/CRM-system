<script setup></script>

<template>
  <header class="crm-header">
    <button type="button" class="crm-header__btn">Лого</button>
  </header>
</template>

<style scoped>
.crm-header {
  height: var(--header-height);
  padding: 20px 25px 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: var(--turquoise-bg-color);
}

.crm-header__btn {
  max-width: 180px;
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--black-color);
  font-size: 21px;
  font-weight: 400;
  border-radius: 6px;
  background-color: var(--white-color);
  cursor: pointer;
}
</style>
