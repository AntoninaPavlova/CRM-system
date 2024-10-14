<script setup></script>

<template>
  <div class="crm-sidebar">
    <ul сlass="crm-sidebar__list">
      <li class="crm-sidebar__point">
        <router-link :to="`/`" class="crm-sidebar__link">Главная</router-link>
      </li>
      <li class="crm-sidebar__point">
        <router-link :to="`/departments`" class="crm-sidebar__link">Департаменты</router-link>
      </li>
      <li class="crm-sidebar__point">
        <router-link :to="`/staff`" class="crm-sidebar__link">Сотрудники</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.crm-sidebar {
  max-width: 170px;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  padding-top: 40px;

  display: flex;
  flex-direction: column;

  background: var(--turquoise-bg-color);
  overflow: hidden;
}

.crm-sidebar__point {
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
    .crm-link {
      font-size: 19px;
    }
  }
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
}

.crm-sidebar__link {
  font-size: 16px;
}
</style>
