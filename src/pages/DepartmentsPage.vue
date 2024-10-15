<script setup>
import { ref, onMounted } from 'vue';
import { appStore } from '@/stores/store.js';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import TableHeader from '@/components/table/TableHeader.vue';
import TableRow from '@/components/table/TableRow.vue';

const useStore = appStore();

onMounted(async () => {
  await useStore.fetchDepartments();
});
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <div class="crm-table">
        <TableHeader />
        <div class="crm-table__rows">
          <TableRow v-for="department in useStore.departments" :key="department._id" :department="department" />
        </div>
      </div>
    </Main>
  </div>
</template>

<style scoped></style>
