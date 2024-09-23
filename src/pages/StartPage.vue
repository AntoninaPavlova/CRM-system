<script setup></script>

<template>
  <div class="crm-container">
    <header class="crm-header">
      <button type="button" class="crm-header__btn">Добавить</button>
    </header>
    <main class="crm-main">
      <div class="crm-content">
        <div class="crm-content__sidebar">
          <ul lass="crm-content__list">
            <li class="crm-content__point">
              <router-link :to="`/`">Главная</router-link>
            </li>
            <li class="crm-content__point">
              <router-link :to="`/departments`">Департаменты</router-link>
            </li>
            <li class="crm-content__point">
              <router-link :to="`/staff`">Сотрудники</router-link>
            </li>
          </ul>
        </div>

        <div class="crm-content__details"></div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.crm-container {
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.crm-header {
  height: var(--header-height);
  padding: 20px 25px 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: var(--turquoise-bg-color);
}

.crm-header__btn,
.crm-content__point {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--black-color);
  font-weight: 400;
  border-radius: 6px;
  background-color: var(--white-color);
  cursor: pointer;
}

.crm-header__btn {
  max-width: 180px;
  height: 40px;

  font-size: 21px;
}

.crm-content {
  display: flex;
  flex-direction: row;
}

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
  height: 28px;
  margin: 0 auto 10px;

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
