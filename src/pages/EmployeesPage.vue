<script setup>
import { appStore } from '@/stores/store.js';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import TableHeader from '@/components/table/TableHeader.vue';
import TableRow from '@/components/table/TableRow.vue';

const useStore = appStore();

const headers = ['Имя', 'Фамилия', 'Возраст', 'Департамент', 'Технологии', ''];
</script>

<template>
  <div class="crm-container">
    <Header :isDepartment="false" />
    <Main :isDepartment="false">
      <div class="crm-table">
        <TableHeader :headers="headers" :isDepartment="false" />
        <div class="crm-table__rows">
          <TableRow
            v-for="employee in useStore.employees"
            :key="employee._id"
            :rowData="employee"
            :isDepartment="false"
          />
        </div>
      </div>
    </Main>
  </div>
</template>
