<script setup>
/*

  Figuring out how to work with child content.

  Looks like Vue wants to use "slots"

*/
</script>

<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: var(--color-primary-text);
  color: var(--color-background);
  font-family: "Inter", sans-serif;
}
</style>
