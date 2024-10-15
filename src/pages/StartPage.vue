<script setup>
import Main from '@/components/Main.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <h1 class="crm-title">Добро пожаловать на главную страницу!</h1>
    </Main>
  </div>
</template>

<style scoped>
.crm-title {
  font-size: 16px;
}
</style>
