<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <slot />
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped></style>
