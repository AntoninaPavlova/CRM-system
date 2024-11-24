<script setup>
defineProps({
  onClickGoBack: Function,
});
</script>

<template>
  <button @click="onClickGoBack" class="crm-button button-back">
    <img src="@/img/back.png" alt="edit" width="23" height="23" />
  </button>
</template>

<style scoped>
.crm-button {
  margin: 15px;

  cursor: pointer;
}
</style>
