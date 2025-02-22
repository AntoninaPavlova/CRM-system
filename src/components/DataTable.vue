div
<script setup>
import Button from '@/components/Button.vue';
import { validateColumns, validateRows, validatePaginationOptions } from '@/utils/validators.js';

const props = defineProps({
  columns: {
    type: Array,
    required: true,
    validator: validateColumns,
  },
  rows: {
    type: Array,
    required: true,
    validator: validateRows,
  },
  paginationOptions: {
    type: Object,
    required: true,
    validator: validatePaginationOptions,
  },
  onClickEdit: {
    type: Function,
    required: true,
  },
  onClickDelete: {
    type: Function,
    required: true,
  },
  onClickDetails: {
    type: Function,
    required: true,
  },
  truncateDescription: {
    type: Function,
    required: true,
  },
});

const getCellContent = (row, field) => {
  const fieldMap = {
    name: row.name,
    number: row.number,
    head: row.head,
    lastName: row.lastName,
    age: row.age,
    department: row.department,
    technologies: Array.isArray(row.technologies) ? row.technologies.join(', ') : '',
  };

  return fieldMap[field] || '';
};
</script>

<template>
  <vue-good-table :columns="columns" :rows="rows" :pagination-options="paginationOptions">
    <template v-slot:table-row="props">
      <div class="crm-table__row" @click="onClickDetails(props.row._id)">
        <div class="crm-table__cell">
          <div v-if="props.column.field === 'edit'">
            <Button
              @click.stop="onClickEdit(props.row)"
              buttonClass="crm-table__button crm-table__edit-button"
              icon="src/img/edit.png"
            />
          </div>

          <div v-if="props.column.field === 'delete'">
            <Button
              @click.stop="onClickDelete(props.row._id)"
              buttonClass="crm-table__button crm-table__delete-button"
              icon="src/img/delete.png"
            />
          </div>

          <div v-if="props.column.field === 'description'">
            {{ truncateDescription(props.row.description) }}
          </div>

          <div v-if="props.column.field === 'firstName'">
            {{ props.row.firstName }}
          </div>

          <div v-else>
            {{ getCellContent(props.row, props.column.field) }}
          </div>
        </div>
      </div>
    </template>
  </vue-good-table>
</template>
