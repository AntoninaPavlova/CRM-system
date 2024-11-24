<script setup>
const props = defineProps({
  columns: Array,
  rows: Array,
  paginationOptions: Object,
  onClickEdit: Function,
  onClickDelete: Function,
  onClickDetails: Function,
});
</script>

<template>
  <div class="crm-table">
    <vue-good-table :columns="columns" :rows="rows" :pagination-options="paginationOptions">
      <template v-slot:table-row="props">
        <div
          v-if="props.column.field == 'firstName'"
          class="crm-table__cell cell--firstName"
          @click="onClickDetails(props.row._id)"
        >
          {{ props.row.firstName }}
        </div>
        <div v-else-if="props.column.field == 'lastName'" class="crm-table__cell">
          {{ props.row.lastName }}
        </div>
        <div v-else-if="props.column.field == 'age'" class="crm-table__cell">{{ props.row.age }}</div>
        <div v-else-if="props.column.field == 'department'" class="crm-table__cell">
          {{ props.row.department }}
        </div>
        <div v-else-if="props.column.field == 'technologies'" class="crm-table__cell">
          {{ props.row.technologies.join(', ') }}
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
.cell--firstName {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

.crm-table__button {
  cursor: pointer;
}
</style>
