<script setup></script>

<template>
  <div class="crm-table__header">
    <div class="crm-table__names">
      <div class="crm-table__name">Название</div>
      <div class="crm-table__name">Описание</div>
      <div class="crm-table__name">Сотрудники</div>
      <div class="crm-table__name">Заведующий</div>
      <div class="crm-table__name">Действия</div>
      <div class="crm-table__name"></div>
    </div>
  </div>
</template>

<style scoped>
.crm-table__header {
  padding: 20px 0;
}

.crm-table__names {
  display: grid;
  align-items: flex-end;

  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.crm-table__name {
  font-size: 16px;
}
</style>
