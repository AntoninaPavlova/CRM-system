<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  isDepartment: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="crm-table__header">
    <div :class="['crm-table__names', isDepartment ? 'names-departments' : 'names-employees']">
      <div class="crm-table__name" v-for="header in headers" :key="header">{{ header }}</div>
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
}

.names-departments {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.names-employees {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
.crm-table__name {
  font-size: 16px;
}
</style>
