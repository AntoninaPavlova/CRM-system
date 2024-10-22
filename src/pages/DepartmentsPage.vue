<script setup>
import { appStore } from '@/stores/store.js';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import TableHeader from '@/components/table/TableHeader.vue';
import TableRow from '@/components/table/TableRow.vue';

const useStore = appStore();
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main :isDepartment="true">
      <div class="crm-table">
        <TableHeader
          :headers="['Название департамента', 'Описание', 'Количество сотрудников', 'Заведующий', '']"
          :isDepartment="true"
        />
        <div class="crm-table__rows">
          <TableRow
            v-for="department in useStore.departments"
            :key="department._id"
            :rowData="department"
            :isDepartment="true"
          />
        </div>
      </div>
    </Main>
  </div>
</template>

<style scoped></style>
