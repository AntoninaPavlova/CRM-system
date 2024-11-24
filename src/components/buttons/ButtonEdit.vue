<script setup>
defineProps({
  onClickEdit: Function,
});
</script>

<template>
  <button @click="onClickEdit" class="crm-button button--edit">
    <img src="@/img/edit.png" alt="edit" width="23" height="23" />
  </button>
</template>

<style scoped>
.crm-button {
  cursor: pointer;
}
</style>
