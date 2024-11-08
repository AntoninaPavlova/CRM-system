<script setup>
const props = defineProps({
  columns: Array,
  rows: Array,
  paginationOptions: Object,
  onClickEdit: Function,
  onClickDelete: Function,
  onClickDetails: Function,
  truncateDescription: Function,
});
</script>

<template>
  <div class="crm-table">
    <vue-good-table :columns="columns" :rows="rows" :pagination-options="paginationOptions">
      <template v-slot:table-row="props">
        <div v-if="props.column.field == 'name'" class="crm-table__cell" @click="onClickDetails(props.row._id)">
          {{ props.row.name }}
        </div>

        <div v-else-if="props.column.field == 'description'" class="crm-table__cell">
          {{ truncateDescription(props.row.description) }}
        </div>

        <div v-else-if="props.column.field == 'edit'" class="crm-table__cell">
          <button @click="onClickEdit(props.row)" class="crm-table__button crm-table__edit-button">
            <img src="@/img/edit.png" alt="edit" width="23" height="23" />
          </button>
        </div>

        <div v-else-if="props.column.field == 'delete'" class="crm-table__cell">
          <button @click="onClickDelete(props.row._id)" class="crm-table__button crm-table__delete-button">
            <img src="@/img/delete.png" alt="delete" width="23" height="23" />
          </button>
        </div>
      </template>
    </vue-good-table>
  </div>
</template>

<style scoped>
.crm-table__cell {
  cursor: pointer;
}

.crm-table__button {
  cursor: pointer;
}
</style>
