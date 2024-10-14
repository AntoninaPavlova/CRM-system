<script setup></script>

<template>
  <div class="crm-content__sidebar">
    <ul сlass="crm-content__list">
      <li class="crm-content__point">
        <router-link :to="`/`" class="crm-content__link">Главная</router-link>
      </li>
      <li class="crm-content__point">
        <router-link :to="`/departments`" class="crm-content__link">Департаменты</router-link>
      </li>
      <li class="crm-content__point">
        <router-link :to="`/staff`" class="crm-content__link">Сотрудники</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.crm-content__sidebar {
  max-width: 170px;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  padding-top: 40px;

  display: flex;
  flex-direction: column;

  background: var(--turquoise-bg-color);
  overflow: hidden;
}

.crm-content__point {
  max-width: 150px;
  width: 100%;
  height: 28px;
  margin: 0 auto 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--black-color);
  font-weight: 400;
  border-radius: 6px;
  background-color: var(--white-color);
  cursor: pointer;
  &:nth-of-type(1) {
    .crm-content__link {
      font-size: 19px;
    }
  }
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
}

.crm-content__link {
  font-size: 16px;
}
</style>
